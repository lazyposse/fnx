(ns fnx.views.welcome
  (:require [fnx.views.common :as common])
  (:use [noir.core :only [defpage render]]
        [hiccup.core :only [html]]
        [hiccup.form-helpers :only [text-field label form-to submit-button]]
        [fnx.meta.expose :only [ns-public-fn]]))

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

;; A page to execute function
(defpage "/xfn" {:keys [fun] :as user}
  (let [g (fnx.meta.expose/resolve-str fun)]
    (common/site-layout
     "eXecute"
     [:h1 (str "eXecute " g)]
     [:p:#wrapper (str (g))])))

(defn input-fields-fn "Wrapper to expose an execute function button."
  [fun]
  (form-to [:get "/xfn"]
           (text-field "fun" fun)
           (submit-button (str fun))))

;; A page to expose some functions from a namespace.
;; fnx.meta.example is the default one is no other is supplied.
(defpage "/expose" {:keys [ns] :as user}
  (let [n (if (empty? ns) 'fnx.meta.example (symbol ns))
        title (str "Exposed functions in " n)]
    (common/site-layout
     title
     [:h1 title]
     [:p#wrapper (let [f (ns-public-fn n)]
                   (if f
                     (map input-fields-fn f)
                     (str "Huh? No function exposed in " n)))])))
