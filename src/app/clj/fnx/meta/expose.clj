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

(fact "fun-str"
  (fun-str "#'test") => "test")

(defn- resolve-str "Wrapper around 'resolve' to deal with string representing #'namespace/function"
  [s]
  (resolve (symbol s)))

(fact "resolve-str"
  (resolve-str "fnx.meta.expose/resolve-str") => #'fnx.meta.expose/resolve-str)

(defn- apply-fn "Apply the function fun to the map args"
  [f args]
  (apply f (vals args)))

(defn- load-file-ns "Load the file into a list"
  [f]
  (split (slurp f) #"\n"))

(fact
  (load-file-ns "namespaces-test-to-load") => ["fnx.meta.example" "fnx.meta.example2"])

(defn load-fq-fn! "Get the namespaces from the file namespaces-to-load"
  ([] (load-fq-fn! "namespaces-to-load"))
  ([f]
     (map (comp fun-str str) (mapcat #(ns-public-fn (symbol %)) (load-file-ns f)))))

(fact
  (load-fq-fn! :file) => (contains
                           ["fnx.meta.example/one-arg-fn"
                            "fnx.meta.example/hello-noir"
                            "fnx.meta.example/two-arg-fn"
                            "fnx.meta.example2/hello"
                            "fnx.meta.example2/three-arg-fn"] :in-any-order)
  (provided
    (load-file-ns :file) => ["fnx.meta.example" "fnx.meta.example2"]))

(defn- parent-ns "Given a namespace, return the namespace's 'parent-ns'"
  [n]
  (when n
      (let [r (split n #"\.")]
        (if (<= 2 (count r)) (join "." (butlast r)) nil))))

(fact "parent-ns"
  (parent-ns nil) => nil
  (parent-ns "foo.aws.extra") => "foo.aws"
  (parent-ns "foo.aws") => "foo"
  (parent-ns "foo") => nil)

(defn- nsp "Given a fully qualified function name, return a namespace"
  [f]
  (first (split f #"/")))

(fact "nsp"
  (nsp "fnx.meta/expose") => "fnx.meta")

(defn- children-ns "Given a namespace, return the next namespace's depth"
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
  (if (zero? n)
    nil
    (join #"." (take n (split ns #"\.")))))

(fact "nth-level"
  (nth-level 0 "foo.aws") => nil
  (nth-level 1 "foo.aws") => "foo"
  (nth-level 2 "foo.aws.ec2") => "foo.aws")

(defn- children-ns "Given a namespace, return the next namespace's depth"
  [n sc]
  (if n
    (let [l (level n)]
      (remove #{n} ((group-by #(.contains % n) (distinct (map #(nth-level (inc l) %) sc))) true)))
    (distinct (map #(nth-level 1 %) sc))))

(fact "IT - children-ns"
  (children-ns nil #{"foo" "foo.aws" "bar.other" "foo.ec2"}) => (contains  ["foo" "bar"] :in-any-order)
  (children-ns "foo" #{"foo" "foo.aws" "bar.other" "foo.ec2"}) => (contains ["foo.aws" "foo.ec2"] :in-any-order)
  (children-ns "bar.aws" #{"bar" "bar.aws.ec2.s3" "bar.aws.ec" "bar.aws.ec2.s4"}) => (contains ["bar.aws.ec2" "bar.aws.ec"] :in-any-order)
  (children-ns "foo" #{}) => [])

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

(defn all-ns-levels "Given a list of namespaces, returns the list of all namespace levels"
  [lns]
  (let [max-level (apply max (map level lns))]
    (set (filter (comp not nil?)
                 (mapcat #(for [x (range (inc max-level))]
                            (nth-level x %))
                         lns)))))

(fact "all-ns-levels"
  (all-ns-levels #{"foo.meta.expose" "foo.bar.ec2"}) => (exactly #{"foo.meta.expose"
                                                                   "foo"
                                                                   "foo.bar"
                                                                   "foo.meta"
                                                                   "foo.bar.ec2"}) :in-any-order)

(defn load-map-ns
  "Load some namespaces from a list of fully qualified functions into the following example map:
  {nil              [nil       [\"foo\" \"bar\"]                  []]
   \"foo\"          [nil       [\"foo.aws\"]                      []]
   \"bar\"          [nil       [\"bar.file\"]                     []]
   \"foo.aws\"      [\"foo\"     [\"foo.aws.ec2\" \"foo.aws.s3\"] [\"foo.aws/describe-region\"]]
   \"foo.aws.ec2\"  [\"foo.aws\" []                               [\"foo.aws.ec2/list-ami\"]]
   \"foo.aws.s3\"   [\"foo.aws\" []                               [\"foo.aws.s3/delete-buckets\"]]
   \"bar.file\"     [\"bar\"     []                               [\"bar.file/ls\"]]}"
  [vfn]
  (let [m (map-namespaces vfn)
        k (all-ns-levels (keys m))]
    (reduce (fn [o n] (assoc o n [(parent-ns n) (children-ns n k) (m n)])) {} (concat [nil] k))))

(fact "load-map-ns"
  (load-map-ns [:fq-fn1 :fq-fn2 :fq-fn3]) => {nil [nil [:foo :bar] []]
                                               :foo [nil [] [:fq-fn1 :fq-fn2]]
                                               :bar [nil [] [:fq-fn3]]}
  (provided
    (map-namespaces [:fq-fn1 :fq-fn2 :fq-fn3]) => {nil []
                                                   :foo [:fq-fn1 :fq-fn2]
                                                   :bar [:fq-fn3]}
    (all-ns-levels [nil :foo :bar]) => [:foo :bar]
    (parent-ns nil) => nil
    (parent-ns :foo) => nil
    (parent-ns :bar) => nil
    (children-ns nil [:foo :bar]) => [:foo :bar]
    (children-ns :foo [:foo :bar]) => []
    (children-ns :bar [:foo :bar]) => []))

(fact "IT - load-map-ns"
  (load-map-ns ["foo/expose"
                "bar/ls"
                "bar.test.level3/cucoo"
                "foo.aws/list-ami"
                "foo.aws/list-regions"
                "foo.meta/run" "foo.aws.ec2/test"]) =>
  {"foo.aws.ec2"     ["foo.aws"    '()                     ["foo.aws.ec2/test"]]
   "foo.aws"         ["foo"        '("foo.aws.ec2")        ["foo.aws/list-ami" "foo.aws/list-regions"]]
   "bar"             [nil          '("bar.test")           ["bar/ls"]]
   "bar.test.level3" ["bar.test"   '()                     ["bar.test.level3/cucoo"]]
   "foo.meta"        ["foo"        '()                     ["foo.meta/run"]]
   "bar.test"        ["bar"        '("bar.test.level3")    nil]
   "foo"             [nil          '("foo.meta" "foo.aws") ["foo/expose"]]
   nil               [nil          '("foo" "bar")          nil]})

(defn fn-meta "A function to extract the metadata from a string that represents a fully qualified function."
  [f]
  (let [m (meta (resolve-str f))]
    {:doc (:doc m)
     :fname f
     :arglists (:arglists m)}))

(fact "fn-meta"
  (fn-meta "fnx.meta.example/one-arg-fn") => '{:doc "A public fn with one arg, should be listed"
                                               :fname "fnx.meta.example/one-arg-fn"
                                               :arglists [[x]]})
