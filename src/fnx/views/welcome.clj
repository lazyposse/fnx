(ns fnx.views.welcome
  (:require [fnx.views.common :as common])
  (:use [noir.core :only [defpage render]]
        [hiccup.core :only [html]]
        [hiccup.form-helpers :only [form-to submit-button]]))

(defpage "/welcome" []
  (common/layout
   [:p "Welcome to fnx"]))

;; Hello world
(defpage "/my-page" []
  (common/site-layout
   "Welcome"
   [:h1 "Hello"]
   [:p#wrapper "Hope you like it!"]))

;; A page to display the input
(defpage "/range" {:as user}
  (common/site-layout
   "Range input"
   [:h1 "range method"]
   (form-to [:post "/range"]
            (common/input-fields-range user)
            (submit-button "submit"))))

;; A page to display the range
(defpage [:post "/range"] {:keys [start end] :as user}
  (common/site-layout
   "Range"
   [:h2 (str "Display range from " start " to " end)]
   [:p#wrapper (map #(str % "<br />")
                    (range (read-string start) (read-string end)))]))

;; A page to expose some functions from a fixed namespace fnx.meta.example
(defpage "/expose" {:keys [ns] :as user}
  (let [n (if (empty? ns) 'fnx.meta.example (symbol ns))
        title (str "Exposed functions in " n)]
    (common/site-layout
     title
     [:h1 title]
     [:p#wrapper (let [f (fnx.meta.expose/ns-public-fn n)]
                   (if f
                     (map #(str "<i>" % "</i><br />") f)
                     (str "No function exposed in " n)))])))
