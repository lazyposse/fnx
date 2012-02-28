(ns fnx.server
  "Main entry point to launch fnx."
  (:use [compojure.core :only [defroutes GET]]
        [fnx.meta.expose :only [ns-public-fn list-ns fn-name resolve-str apply-fn]]
        [clojure.string :only [join]])
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]))

(defn ls-ns "Map that contains in the key :ns the list of namespaces currently loaded in fnx."
  [namespace]
  {:ns (list-ns namespace) :fn nil})

(defn docu "Documentation on the namespace ns."
  [ns]
  (:doc (meta (find-ns ns))))

(defn ls-fn-from-ns "Return a map which contains data on functions from the namespace ns"
  [ns]
  {:ns ns
   :doc-ns (docu ns)
   :fn (ns-public-fn ns)})

(defn apply-fun "Apply the function to the args and returns a map of result."
  [f args]
  {:fn   f
   :args args
   :out  (apply-fn f args)})

(defn ls-namespaces "Given a namespace, returns the list of namespaces matching ns"
  [ns]
       (let [res (ls-ns ns)]
         (if res
           (map str res)
           {:status 404})))

(defroutes main-routes
  ;; If no special route is given, will reroute to /fnx
  (GET "/" [] (ls-namespaces "fnx"))

  ;; A page to expose the namespaces of the application
  ;; GET /fnx will return the namespaces which matches the /:ns pattern.
  (GET "/:ns/" [ns] (ls-namespaces ns))

  ;; A page to expose the namespaces of the application
  ;; GET /fnx/meta will return the map of namespaces mapping the :ns0.:ns1 pattern
  (GET "/:ns0/:ns1/" [ns0 ns1] (ls-namespaces (str ns0 "." ns1)))

  ;; Return the map of  A page to expose some functions from a namespace.
  (GET "/:ns0/:ns1/:ns2/" [ns0 ns1 ns2]
       (let [ns (symbol (join "." [ns0 ns1 ns2]))]
         (if ns
           (map str (ls-fn-from-ns ns))
           {:status 404})))

  ;; A page to execute a function
  ;; GET /fnx/meta/expose/test - Will return the map of results for the function
  (GET "/:ns0/:ns1/:ns2/:fun" [ns0 ns1 ns2 fun & arg]
       (let [f (resolve-str (fn-name ns0 ns1 ns2 fun))]
         (if f
           (map str (apply-fun f arg))
           {:status 404}))))

(def app
  (handler/site main-routes))
