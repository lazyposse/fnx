(ns fnx.meta.expose
  "Get the public functions of a namespace"
  (:use [midje.sweet]))


(fact "ns-public-fn"
      (second (ns-public-fn 'fnx.meta.example)) => (resolve 'fnx.meta.example/hello-noir))

(fact "ns-public-fn: listing functions and calling them (it's more an example of usage than a true test)"
      (map (fn [f] (apply f
                         (range 0 (count (first (:arglists (meta f)))))))
           (ns-public-fn 'fnx.meta.example)) => ["arg=0", "Hello world from a function exposed!" "args=0,1"])


(fact "resolve-str"
  (resolve-str "#'fnx.meta.example/hello-noir") => (resolve 'fnx.meta.example/hello-noir)
  ((resolve-str "#'fnx.meta.example/hello-noir")) => "Hello world from a function exposed!")