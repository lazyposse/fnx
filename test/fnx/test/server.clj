(ns fnx.test.server
  (:require [clj-http.client :as client])
  (:use [fnx.server]
        [fnx.meta.expose]
        [midje.sweet]))

(fact "ls-ns"
  (ls-ns :some-ns) => {:ns :list-of-ns :fn nil}
  (provided (list-ns :some-ns) => :list-of-ns))

(fact "docu"
  (docu (symbol "fnx.server")) => "Main entry point to launch fnx.")

(fact "ls-fn-from-ns"
  (ls-fn-from-ns :some-ns) => {:ns :some-ns
                               :doc-ns :doc
                               :fn :list-of-fns}
  (provided
    (docu :some-ns) => :doc
    (ns-public-fn :some-ns) => :list-of-fns))

(fact "apply-fun"
  (apply-fun :fun :args) => {:fn :fun
                             :args :args
                             :out :res}
  (provided
    (apply-fn :fun :args) => :res))

;; IT - need a running server to validate (cli: 'foreman start' or 'lein ring server 5000')

(future-fact "Passing cases"
  (:status (client/get "http://localhost:5000/fnx/")) => 200
  (:status (client/get "http://localhost:5000/fnx/meta/")) => 200
  (:status (client/get "http://localhost:5000/fnx/meta/expose/")) => 200
  (:status (client/get "http://localhost:5000/fnx/meta/expose/fun-str?s=somefunctionname")) => 200)
