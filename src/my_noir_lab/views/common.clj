(ns my-noir-lab.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]))

(defpartial layout [& content]
  (html5
   [:head
    [:title "my-noir-lab"]
    (include-css "/css/reset.css")]
   [:body
    [:div#wrapper
     content]]))

(defpartial site-layout [& content]
  (html5
    [:head
     [:title "my site"]
     (include-css "/css/reset.css")]
    [:body
      [:div#wrapper
       content]]))
