(ns ^{:doc "When this library is loaded, a listener function is added
  which will be run when a :form or :greeting event is fired. This
  allows the use of the back button to navigate between views. This is
  accomplished by using library.browser.history to keep track of views
  that have previously been visited, and traversing them when
  navigation events are detected."}
  one.sample.history
  (:use [clojure.string :only [join]])
  (:require [one.dispatch :as dispatch]
            [one.browser.history :as history]))

;; Utilities functions to manipulate strings

(defn- rm-colon "Given a string with keyword, remove the : character"
  [s]
  (join "" (replace {":" ""} s)))

(defn- split "Split a string according to a sep (returns a seq)."
  [s sep]
  (seq (.split s sep)))

;; Utilities functions to manipulate extract token and map from the uri

(defn- attr-2-map "Given a string representing the rest of the uri, returns a map."
  [s]
  (when s
    (let [v (split s "&")]
      (reduce (fn [m e]
                (let [[key val] (split e "=")]
                  (assoc m (keyword key) val))) {} v))))

(defn- token-2-map
  "Given a token, returns a vector containing a token a map:
  - token represents the event to fire
  - the map represents the attributes key-value (key=value&) contained in the url (after the ?)"
  [token]
  (let [[t v] (split (rm-colon token) "?")]
    [t (attr-2-map v)]))

(defn nav-handler
  "Handle navigation events by firing the appropriate view token."
  [{:keys [token navigation?]}]
  (let [[t m] (token-2-map token)]
    (when navigation?
      (dispatch/fire t m))))

(def ^{:doc "The global history object for this application."}
  history (history/history nav-handler))

;; Utilities function to update the nav bar according to the events triggered!

(defn- attr-2-uri "Given a first degree (only one level) map, returns a uri"
  [e]
  (join "&" (map (fn [k] (join "=" [k (e k)])) (keys e))))

(defn- map-2-uri "Given a token and a map, returns a uri."
  [t e]
  (if e (str t "?" (attr-2-uri e)) t))

(defn- which-token "Given a token event and a map, complete the uri nav bar."
  [t e]
  (cond (#{:init} t) :form
        (#{:ns-clicked} t) (map-2-uri t e)
        :else t))

(dispatch/react-to
 #{:init :form :greeting :ns-clicked}
 (fn [t e]
   (history/set-token history (which-token t e))))

