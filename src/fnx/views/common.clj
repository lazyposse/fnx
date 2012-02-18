(ns fnx.views.common
  "Common functions to help in displaying ui."
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]
        [hiccup.form-helpers :only [label text-field]]))

;; The default site layout
(defpartial layout [t & content]
  (html5
    [:head
     [:title t]
    (include-css "/css/reset.css")]
    [:body
      [:div#wrapper
       content]]))

