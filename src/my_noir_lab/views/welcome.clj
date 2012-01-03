(ns my-noir-lab.views.welcome
  (:require [my-noir-lab.views.common :as common]
            [noir.content.getting-started])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/welcome" []
         (common/layout
           [:p "Welcome to my-noir-lab"]))
