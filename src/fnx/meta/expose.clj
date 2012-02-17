;; This is usefull to display the functions, ask the user for the
;; input parameters, and then execute them, presenting the result to
;; the user.
;; Intended to expose the functions in a Browser, but it could be
;; anything else: command line, rich client, ...
;;
(ns fnx.meta.expose
  "Get the public functions of a namespace"
  (:use [clojure.string :only [join]]))

;; 
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
 
(defn resolve-str "Wrapper around resolve to deal with string representing #'namespace/function"
  [s]
  (resolve (symbol (join "" (drop 2 s)))))
