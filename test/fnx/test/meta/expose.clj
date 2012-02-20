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

(fact "list-ns"
  (let [ns1 (find-ns 'fnx.meta.expose)
        ns2 (find-ns 'fnx.views.welcome)]
    (list-ns "fnx") => (contains [ns1 ns2] :in-any-order)
    (list-ns "fnx.views") => (contains [ns2] :in-any-order)))

(fact "fn-name"
  (fn-name "fnx" "meta" "expose" "function") => "#'fnx.meta.expose/function")
