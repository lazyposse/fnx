(ns fnx.meta.expose
  "Get the public functions of a namespace"
  (:use [midje.sweet]))


;; * First we load the ns with `require`
;; * Then we use `ns-publics` to get all public vars
;; * Then we filter functions: They have an `:arglists` in their meta
(defn ns-public-fn
  "Given a ns symbol, returns all the public fns of this ns."
  [ns] (do (require ns)
           (filter (fn [s] (:arglists (meta s)))
                   (map #(ns-resolve ns %)
                        (keys (ns-publics (find-ns ns)))))))

(fact "ns-public-fn"
      (second (ns-public-fn 'fnx.meta.example)) => (resolve 'fnx.meta.example/hello-noir))

(fact "ns-public-fn: listing functions and calling them (it's more an example of usage than a true test)"
      (map (fn [f] (apply f
                         (range 0 (count (first (:arglists (meta f)))))))
           (ns-public-fn 'fnx.meta.example)) => ["arg=0", "Hello noir" "args=0,1"])
