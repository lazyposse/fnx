(ns fnx.test.meta.expose
  "Get the public functions of a namespace"
  (:use [midje.sweet])
  (:use [fnx.meta.expose]))

(fact "ns-public-fn"
      (second (ns-public-fn 'fnx.meta.example)) => (resolve 'fnx.meta.example/hello-noir))

(fact "ns-public-fn: listing functions and calling them (it's more an example of usage than a true test)"
      (map (fn [f] (apply f
                         (range 0 (count (first (:arglists (meta f)))))))
           (ns-public-fn 'fnx.meta.example)) => ["arg=0", "Hello world from a function exposed!" "args=0,1"])

(fact "fun-str"
  (fun-str "#'foo.bar.meta/function") => "foo.bar.meta/function")

(fact "resolve-str"
  (resolve-str "#'fnx.meta.example/hello-noir") => (resolve 'fnx.meta.example/hello-noir)
  ((resolve-str "#'fnx.meta.example/hello-noir")) => "Hello world from a function exposed!")

(future-fact "list-ns"
  (let [ns0 (find-ns 'fnx.meta.example)
        ns1 (find-ns 'fnx.meta.expose)
        ns2 (find-ns 'fnx.views.welcome)
        ns3 (find-ns 'fnx.views.common)]
    (list-ns "fnx") => (just [ns0 ns1 ns2 ns3] :in-any-order)
    (list-ns "fnx.views") => (just [ns2 ns3] :in-any-order)))

(fact "dot2uri"
  (dot2uri "fnx.meta.function") => "fnx/meta/function")

(fact "fn-name"
  (fn-name "fnx" "meta" "expose" "function") => "#'fnx.meta.expose/function")
