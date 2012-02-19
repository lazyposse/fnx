(ns fnx.views.common
  "Common functions to help in displaying ui."
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]
        [hiccup.form-helpers :only [form-to hidden-field submit-button label text-field]]
        [fnx.meta.expose :only [ns-public-fn list-ns dot2uri fun-str]]))

;; The default site layout
(defpartial layout [t & content]
  (html5
   [:head
    [:title t]
    (include-css "/css/reset.css")]
   [:body
    [:div#wrapper
     content]]))

(defn input-fields-ns "Wrapper to expose a namespace."
  [ns]
  (let [m (meta ns)]
    (form-to [:get (str "/" (dot2uri (str ns)) "/")]
             (submit-button "+")
             [:b (label "ns" ns)]
             (label "Doc :" [:i (:doc m)]))))

(defn input-fields-fn "Wrapper to expose a function."
  [fun]
  (let [m (meta fun)]
    (form-to [:get (str "/" (dot2uri (fun-str (str fun))))]
             (label "fun" fun)
             (label "Doc :" [:i (:doc m)] )
             (map #(text-field % "") (flatten (:arglists m)))
             (submit-button "run"))))

;; Display the list of namespaces
(defpartial deal-with-ns [{:keys [ns namespaces title]}]
  (layout
   title
   [:h1 title]
   [:p#wrapper
    (if namespaces
      (map input-fields-ns namespaces)
      (str "No namespace matching " ns))]))
