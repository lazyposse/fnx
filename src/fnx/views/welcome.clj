(ns fnx.views.welcome
  "Main routes from the fnx."
  (:use [noir.core :only [defpage render]]
        [hiccup.core :only [html]]
        [hiccup.form-helpers :only [text-field label form-to submit-button hidden-field]]
        [fnx.meta.expose :only [ns-public-fn list-ns]]
        [fnx.views.common]))

;; A page to execute function
(defpage [:post "/xfn"] {:keys [fun] :as data}
  (let [g (fnx.meta.expose/resolve-str fun)
        k (dissoc data :fun)]
    (layout
     "run"
     [:h1 (str "run " g " vals " k)]
     [:p#wrapper (apply g (vals k))])))

(defn input-fields-fn "Wrapper to expose a function."
  [fun]
  (let [m (meta fun)]
    (form-to [:post "/xfn"]
             (label "fun" fun)
             (hidden-field "fun" fun)
             (label "Doc :" (str "<i>" (:doc m) "</i>"))
             (map #(text-field % "") (flatten (:arglists m)))
             (submit-button "run"))))

(defn input-fields-ns "Wrapper to expose a namespace."
  [ns]
  (let [m (meta ns)]
    (form-to [:post "/expose"]
             (submit-button "+")
             (hidden-field "ns" ns)
             (label "ns" ns)
             (label "Doc :" (str "<i>" (:doc m) "</i>")))))

;; A page to expose some functions from a namespace.
;; fnx.meta.example is the default one is no other is supplied.
(defpage [:post "/expose"] {:keys [ns]}
  (let [n (symbol ns)
        dn (:doc (meta (find-ns n)))
        title n]
    (layout
     title
     [:h1 title]
     [:p#wrapper
      (str "<i>" dn "</i>") 
      (let [f (ns-public-fn n)]
        (if f
          (map input-fields-fn f)
          (str "Huh? No function exposed in " n)))])))

;; A page to expose the namespace of the applications
;; http://localhost/fnx will display all the namespaces of fnx
(defpage "/:ns" {ns :ns}
  (let [namespaces (list-ns ns)
        title (str "Exposed namespaces - '" ns "'")]
    (layout
     title
     [:h1 title]
     [:p#wrapper
      (if namespaces
        (map input-fields-ns namespaces)
        (str "No namespace with " ns))])))

;; Routing by default on fnx
(defpage "/" []
  (render "/:ns" {:ns "fnx"}))

