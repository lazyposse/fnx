;; This is usefull to display the functions, ask the user for the
;; input parameters, and then execute them, presenting the result to
;; the user.
;; Intended to expose the functions in a Browser, but it could be
;; anything else: command line, rich client, ...
;;
(ns fnx.meta.expose
  "Expose the public functions of a namespace"
  (:use [clojure.string :only [split join escape]]
        [midje.sweet]))

;; * First we load the ns with `require`
;; * Then we get the public functions (read from bottom to top):
;; * We want only functions, not the other vars: We can spot them because they have an `:arglists` in their meta.
;; * Get the public vars with `ns-publics`
;;
(defn- ns-public-fn
  "Given a ns symbol, returns all the public fns of this ns."
  [ns] (do (require ns)
           (filter #(:arglists (meta %))
                   (vals (ns-publics (find-ns ns))))))

(defn- fun-str "Transform a function name without the #' in front of its name."
  [s]
  (join "" (drop 2 s)))

(defn- resolve-str "Wrapper around 'resolve' to deal with string representing #'namespace/function"
  [s]
  (resolve (symbol (fun-str s))))

(defn- list-ns "List the fnx namespaces to expose."
  [prefix-ns]
  (filter #(.contains (str (ns-name %)) prefix-ns) (all-ns)))

(defn- fn-name "Transform a list of parameters into a function name"
  [& s]
  (str "#'" (join "/" [(join "." (butlast s)) (last s)])))

(defn- apply-fn "Apply the function fun to the map args"
  [f args]
  (apply f (vals args)))

(defn- load-file-ns "Load the file into a list"
  [f]
  (split (slurp f) #"\n"))

(fact
  (load-file-ns "namespaces-test-to-load") => ["fnx.meta.example" "fnx.meta.example2"])

(defn load-ns! "Get the namespaces from the file namespaces-to-load"
  ([] (load-ns! "namespaces-to-load"))
  ([f]
     (map str (mapcat #(ns-public-fn (symbol %)) (load-file-ns f)))))

(fact
  (load-ns! :file) => ["#'fnx.meta.example/hello" "#'fnx.meta.example/one-arg-fn" "#'fnx.meta.example/hello-noir" "#'fnx.meta.example/three-arg-fn" "#'fnx.meta.example/two-arg-fn" "#'fnx.meta.example2/hello" "#'fnx.meta.example2/three-arg-fn"]
  (provided
    (load-file-ns :file) => ["fnx.meta.example" "fnx.meta.example2"]))

(defn- parent "Given a namespace, return the namespace's 'parent'"
  [n]
  (when n
      (let [r (split n #"\.")]
        (if (<= 2 (count r)) (join "." (butlast r)) nil))))

(fact "parent"
  (parent nil) => nil
  (parent "foo.aws.extra") => "foo.aws"
  (parent "foo.aws") => "foo"
  (parent "foo") => nil)

(defn- nsp "Given a fully qualified function name, return a namespace"
  [f]
  (first (split f #"/")))

(fact "nsp"
  (nsp "fnx.meta/expose") => "fnx.meta")

(defn- child "Given a namespace, return the next namespace's depth"
  [n vc]
  (if-not n
    (distinct (map #(first (split % #"\.")) vc))
    (remove #{n} ((group-by #(.contains % n) vc) true))))

(defn- level "Given a namespace, returns its level."
  [ns]
  (count (split ns #"\.")))

(fact "level"
  (level "foo")  => 1
  (level "foo.aws")  => 2
  (level "foo.aws.ec2") => 3)

(defn- nth-level "Given a namespace, returns the nth level"
  [n ns]
    (join #"." (take n (split ns #"\."))))

(fact "nth-level"
  (nth-level 0 "foo.aws") => ""
  (nth-level 1 "foo.aws") => "foo"
  (nth-level 2 "foo.aws.ec2") => "foo.aws")

(defn- child "Given a namespace, return the next namespace's depth"
  [n vc]
  (if n
    (let [l (level n)]
      (remove #{n} ((group-by #(.contains % n) (distinct (map #(nth-level (inc l) %) vc))) true)))
    (distinct (map #(nth-level 1 %) vc))))

(fact "IT - child"
  (child nil ["foo" "foo.aws" "bar.other" "foo.ec2"]) => ["foo" "bar"]
  (child "foo" ["foo" "foo.aws" "bar.other" "foo.ec2"]) => ["foo.aws" "foo.ec2"]
  (child "bar.aws" ["bar" "bar.aws.ec2.s3" "bar.aws.ec" "bar.aws.ec2.s4"]) => ["bar.aws.ec2" "bar.aws.ec"])

(defn- map-namespaces "Given a list of functions, returns the map of keypair ns-fn"
  [vfn]
  (group-by nsp vfn))

(fact "map-namespaces"
  (map-namespaces [:fq-fn1 :fq-fn3 :fq-fn2 :fq-fn4]) => {:foo [:fq-fn1 :fq-fn2]
                                                         :bar [:fq-fn3]
                                                         :foobar [:fq-fn4]}
  (provided
    (nsp :fq-fn1) => :foo
    (nsp :fq-fn2) => :foo
    (nsp :fq-fn3) => :bar
    (nsp :fq-fn4) => :foobar))

(defn public-ns-fn
  "Expose the namespaces and functions as the following example map
  {nil              [nil       [\"foo\" \"bar\"]              []]
   \"foo\"          [nil       [\"foo.aws\"]                  []]
   \"bar\"          [nil       [\"bar.file\"]                 []]
   \"foo.aws\"      [\"foo\"     [\"foo.aws.ec2\" \"foo.aws.s3\"] [\"describe-region\"]]
   \"foo.aws.ec2\"  [\"foo.aws\" []                           [\"list-ami\"]]
   \"foo.aws.s3\"   [\"foo.aws\" []                           [\"delete-buckets\"]]
   \"bar.file\"     [\"bar\"     []                           [\"ls\"]]}"
  [vfn]
  (let [m (map-namespaces vfn)
        k (keys m)
        i (assoc m nil k)]
    (reduce (fn [o n]
              (assoc o n [(parent n) (child n k) (m n)]))
            {}
            (keys i))))

(fact "public-ns-fn"
  (public-ns-fn [:fq-fn1 :fq-fn2 :fq-fn3]) => (contains {nil [nil [:foo :bar] nil]
                                                         :foo [nil [] [:fq-fn1 :fq-fn2]]
                                                         :bar [nil [] [:fq-fn3]]} :in-any-order)
  (provided
    (map-namespaces [:fq-fn1 :fq-fn2 :fq-fn3]) => {:foo [:fq-fn1 :fq-fn2] :bar [:fq-fn3]}
    (parent nil) => nil
    (parent :foo) => nil
    (parent :bar) => nil
    (child nil [:foo :bar]) => [:foo :bar]
    (child :foo [:foo :bar]) => []
    (child :bar [:foo :bar]) => []))

(fact "IT - public-ns-fn"
  (public-ns-fn ["foo/expose" "bar/ls" "foo.aws/list-ami" "foo.aws/list-regions" "foo.meta/run" "foo.aws.ec2/test"]) =>
  '{"foo.aws.ec2" ["foo.aws" []                     ["foo.aws.ec2/test"]]
    "foo.meta" ["foo"        []                     ["foo.meta/run"]]
   "foo.aws"   ["foo"        ["foo.aws.ec2"]        ["foo.aws/list-ami" "foo.aws/list-regions"]]
   "bar"       [nil          []                     ["bar/ls"]]
   "foo"       [nil          ["foo.aws" "foo.meta"] ["foo/expose"]]
   nil         [nil          ["foo" "bar"]          nil]})