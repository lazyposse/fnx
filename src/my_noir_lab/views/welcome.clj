(ns my-noir-lab.views.welcome
  (:require [my-noir-lab.views.common :as common]
            [noir.content.getting-started])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/welcome" []
         (common/layout
           [:p "Welcome to my-noir-lab"]))

(defpage "/my-page" []
  (common/site-layout
   [:h1 "Welcome to my site!"]
   [:p#wrapper "Hope you like it!"]))

(defpage "/range" []
  (common/site-layout
   [:h1 "range 1 100"]
   [:p#wrapper (map #(str "<i>" % "</i>&nbsp;") (range 1 100))]))