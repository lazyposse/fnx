(ns fnx.views.welcome
  "Main routes from the fnx."
  (:use [noir.core :only [defpage render]]
        [hiccup.core :only [html]]
        [hiccup.form-helpers :only [text-field label form-to submit-button hidden-field]]
        [fnx.meta.expose :only [ns-public-fn list-ns fn-name resolve-str]]
        [fnx.views.common]))

;; A page to expose the namespaces of the application
;; GET /fnx will display the 'fnx' namespaces
(defpage "/:ns/" {ns :ns}
  (let [m {:ns ns
           :namespaces (list-ns ns)
           :title (str "Exposed namespaces - '" ns "'")}]
    (deal-with-ns m)))

;; If no special route is given, will reroute to /fnx
(defpage "/" []
  (render "/:ns/" {:ns "fnx"}))

;; A page to expose the namespaces of the application
;; GET /fnx/meta will display the 'fnx.meta' namespaces
(defpage "/:ns0/:ns1/" {:keys [ns0 ns1]}
  (let [ns (str ns0 "." ns1)
        m {:ns ns
           :namespaces (list-ns ns)
           :title (str "Exposed namespaces - '" ns "'")}]
    (deal-with-ns m)))

;; A page to expose some functions from a namespace.
(defpage "/:ns0/:ns1/:ns2/" {:keys [ns0 ns1 ns2]}
  (let [n (symbol (clojure.string/join "." [ns0 ns1 ns2]))
        dn (:doc (meta (find-ns n)))
        title n]
    (layout
     title
     [:h1 title]
     [:p#wrapper
      [:i dn]
      (let [f (ns-public-fn n)]
        (if f
          (map input-fields-fn f)
          (str "WARNING - Empty namespace!? " n)))])))

;; A page to execute a function
;; GET /fnx/meta/expose/test will execute the function fnx.meta.expose/test
(defpage"/:ns0/:ns1/:ns2/:fun" {:keys [ns0 ns1 ns2 fun] :as data}
  (let [g (resolve-str (fn-name ns0 ns1 ns2 fun))
        k (dissoc data :ns0 :ns1 :ns2 :fun)]
    (layout
     "run"
     [:h1 (str "run " g " vals " k)]
     [:p#wrapper (apply g (vals k))])))
