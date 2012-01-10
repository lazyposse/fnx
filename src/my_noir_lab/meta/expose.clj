(ns ^{:doc "Allow to list functions in namespaces, usefull for exposing funs in a web app for example."}
  my-noir-lab.meta.expose
  (:use [clojure.repl :only [doc]])
  (:use [midje.sweet]))

(println "--------- BEGIN OF EXPOSE  ----------" (java.util.Date.))

(defn ns-public-fn "Given a ns symbol, returns all the public fns of this ns"
  [ns](do (require ns)
          (filter (fn [s] (:arglists (meta s)))
                  (map #(ns-resolve ns %)
                       (keys (ns-publics (find-ns ns)))))))

(fact "ns-public-fn"
      (second (ns-public-fn 'my-noir-lab.meta.example)) => (resolve 'my-noir-lab.meta.example/hello-noir))

(fact "ns-public-fn: listing functions and calling them (it's more an example of usage than a true test)"
      (map (fn [f] (apply f
                         (range 0 (count (first (:arglists (meta f)))))))
           (ns-public-fn 'my-noir-lab.meta.example)) => ["arg=0", "Hello noir" "args=0,1"])

(println "--------- END OF EXPOSE  ----------" (java.util.Date.))
