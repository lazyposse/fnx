;; This is usefull to display the functions, ask the user for the
;; input parameters, and then execute them, presenting the result to
;; the user.
;; Intended to expose the functions in a Browser, but it could be
;; anything else: command line, rich client, ...
;;
(ns fnx.meta.expose
  "Get the public functions of a namespace"
  (:use [midje.sweet]))

;; 
;; * First we load the ns with `require`
;; * Then we get the public functions (read from bottom to top):
;; * We want only functions, not the other vars: We can spot them because they have an `:arglists` in their meta.
;; * Don't really know why, but we need to `ns-resolve` the symbols(?)
;; * Get the public vars with `ns-publics`
;;
(defn ns-public-fn
  "Given a ns symbol, returns all the public fns of this ns."
  [ns] (do (require ns)
           (filter #(:arglists (meta %))
                   (map #(ns-resolve ns %)
                        (keys (ns-publics (find-ns ns)))))))
 
(fact "ns-public-fn"
      (second (ns-public-fn 'fnx.meta.example)) => (resolve 'fnx.meta.example/hello-noir))

(fact "ns-public-fn: listing functions and calling them (it's more an example of usage than a true test)"
      (map (fn [f] (apply f
                         (range 0 (count (first (:arglists (meta f)))))))
           (ns-public-fn 'fnx.meta.example)) => ["arg=0", "Hello noir" "args=0,1"])
