(ns fnx.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]
        [hiccup.form-helpers :only [label text-field]]))

(defpartial layout [& content]
  (html5
   [:head
    [:title "fnx"]
    (include-css "/css/reset.css")]
  [:body
   [:div#wrapper
    content]]))

(defpartial site-layout [t & content]
  (html5
    [:head
     [:title t]
    (include-css "/css/reset.css")]
    [:body
      [:div#wrapper
       content]]))

(defpartial input-fields-range [{:keys [start end]}]
  (label "start" "start: ")
  (text-field "start" start)
  (label "end" "end: ")
  (text-field "end" end))