(ns fnx.test.server
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
  (apply-fun :fun :args) => {:fn :fn
                             :args :args
                             :out :res}
  (provided
    (resolve-str :fun) => :fn
    (apply-fn :fn :args) => :res))
