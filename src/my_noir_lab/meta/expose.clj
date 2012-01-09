(ns ^{:doc "Allow to list functions in namespaces, usefull for exposing funs in a web app for example."}
  my-noir-lab.meta.expose
  (:use [clojure.repl :only [doc]])
  (:use [midje.sweet])
  ;; TODO : we will need to not include it (should be dynamic)
  (comment (:require [my-noir-lab.meta.example :as e])))

(println "--------- BEGIN OF EXPOSE  ----------" (java.util.Date.))

(defn ns-public-fn "Given a ns symbol, returns all the public fns of this ns"
  [ns] (do (require ns)
           (filter #(:arglists (meta %))
                   (vals (ns-publics (find-ns ns))))))

(fact "ns-public-fn"
      (map str (ns-public-fn 'my-noir-lab.meta.example)) => ["#'my-noir-lab.meta.example/hello-noir"])

(fact "ns-public-fn: fn has args meta data"
      (:arglists (meta (first (ns-public-fn 'my-noir-lab.meta.example)))) => ["#'my-noir-lab.meta.example/hello-noir"])

(println "--------- END OF EXPOSE  ----------" (java.util.Date.))
