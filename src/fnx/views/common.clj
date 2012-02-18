(ns fnx.views.common
  "Common functions to help in displaying ui."
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]
        [hiccup.form-helpers :only [label text-field]]))

;; A noir example to use the layout
(defpartial layout [& content]
  (html5
   [:head
    [:title "fnx"]
    (include-css "/css/reset.css")]
  [:body
   [:div#wrapper
    content]]))

;; A naive elaboration around the default layout
(defpartial site-layout [t & content]
  (html5
    [:head
     [:title t]
    (include-css "/css/reset.css")]
    [:body
      [:div#wrapper
       content]]))

;; A function to display the first input test with the range function.
(defpartial input-fields-range [{:keys [start end]}]
  (label "start" "start: ")
  (text-field "start" start)
  (label "end" "end: ")
  (text-field "end" end))

;; a bullet point in a todo list
(defpartial todo-item [{:keys [id title due]}]
  [:li {:id id} ;; maps define HTML attributes
   [:h3 title]
   [:span.due due]]) ;; add a class

;; the map represented as a todo list
(defpartial todos-list [items]
  [:ul#todoItems ;; set the id attribute
   (map todo-item items)])

