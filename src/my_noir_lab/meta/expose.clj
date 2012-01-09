(ns ^{:doc "Allow to list functions in namespaces, usefull for exposing funs in a web app for example."}
  noir-test.meta.expose
  (:use [clojure.repl :only [doc]]))

(defn ns-public-fn
  "Given a ns symbol, returns all the public fns of this ns"
  [ns] (filter #(:arglists %)
               (vals (ns-publics (find-ns ns)))))

(defn ns-public-fn
  "Given a ns symbol, returns all the public fns of this ns"
  [ns] 
  (vals (ns-publics (find-ns ns))))

(comment
  ((var-get ('hello-noir (ns-publics *ns*)))))
