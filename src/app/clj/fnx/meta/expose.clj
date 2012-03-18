;; This is usefull to display the functions, ask the user for the
;; input parameters, and then execute them, presenting the result to
;; the user.
;; Intended to expose the functions in a Browser, but it could be
;; anything else: command line, rich client, ...
;;
(ns fnx.meta.expose
  "Expose the public functions of a namespace"
  (:use [clojure.string :only [join escape]]
        [midje.sweet]))

;; * First we load the ns with `require`
;; * Then we get the public functions (read from bottom to top):
;; * We want only functions, not the other vars: We can spot them because they have an `:arglists` in their meta.
;; * Get the public vars with `ns-publics`
;;
(defn ns-public-fn
  "Given a ns symbol, returns all the public fns of this ns."
  [ns] (do (require ns)
           (filter #(:arglists (meta %))
                   (vals (ns-publics (find-ns ns))))))

(defn fun-str "Transform a function name without the #' in front of its name."
  [s]
  (join "" (drop 2 s)))

(defn resolve-str "Wrapper around 'resolve' to deal with string representing #'namespace/function"
  [s]
  (resolve (symbol (fun-str s))))

(defn list-ns "List the fnx namespaces to expose."
  [prefix-ns]
  (filter #(.contains (str (ns-name %)) prefix-ns) (all-ns)))

(defn fn-name "Transform a list of parameters into a function name"
  [& s]
  (str "#'" (join "/" [(join "." (butlast s)) (last s)])))

(defn apply-fn "Apply the function fun to the map args"
  [f args]
  (apply f (vals args)))

(defn load-ns! "Get the namespaces from the file namespaces-to-load"
  []
  (clojure.string/split (slurp "namespaces-to-load") #"\n"))

(fact
  (load-ns!) => ["fnx.meta.expose" "fnx.meta.example"])

(def mmeta meta)

(defn namespaces-public-fn "Load all the functions of the namespaces"
  [v]
  (mapcat #(map mmeta (ns-public-fn (symbol %))) v))

(fact "namespaces-public-fn"
  (namespaces-public-fn [:ns0 :ns1]) => [:map-meta0 :map-meta1 :map-meta2]
  (provided
    (ns-public-fn (symbol :ns0)) => [:ns0-fn0 :ns0-fn1]
    (ns-public-fn (symbol :ns1)) => [:ns1-fn0]
    (mmeta :ns0-fn0) => :map-meta0
    (mmeta :ns0-fn1) => :map-meta1
    (mmeta :ns1-fn0) => :map-meta2))