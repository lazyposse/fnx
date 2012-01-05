(ns my-noir-lab.views.welcome
  (:require [my-noir-lab.views.common :as common])
  (:use [noir.core :only [defpage render]]
        [hiccup.core :only [html]]
        [hiccup.form-helpers :only [form-to submit-button]]))

(defpage "/welcome" []
  (common/layout
   [:p "Welcome to my-noir-lab"]))

(defpage "/my-page" []
  (common/site-layout
   "Welcome"
   [:h1 "Hello"]
   [:p#wrapper "Hope you like it!"]))

(defpage "/range" {:as user}
  (common/site-layout
   "Range input"
   [:h1 "range method"]
   (form-to [:post "/range"]
            (common/input-fields-range user)
            (submit-button "submit"))))

(defpage [:post "/range"] {:keys [start end] :as user}
  (common/site-layout
   "Range"
   [:h2 (str "Display range from " start " to " end)]
   [:p#wrapper (map #(str % "<br />")
                    (range (read-string start) (read-string end)))]
   (render "/range" user)))
