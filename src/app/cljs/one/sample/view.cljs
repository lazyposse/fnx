(ns ^{:doc "Render the views for the application."}
  one.sample.view
  (:use [domina :only (set-html! append! set-styles! styles by-id set-style!
                                 by-class value set-value! set-text! nodes single-node destroy-children!)]
        [domina.xpath :only (xpath)]
        [one.browser.animation :only (play)]
        [one.sample.view-helper :only [ls-curr-ns parent-ns]])
  (:require-macros [one.sample.snippets :as snippets])
  (:require [goog.events.KeyCodes :as key-codes]
            [goog.events.KeyHandler :as key-handler]
            [clojure.browser.event :as event]
            [one.dispatch :as dispatch]
            [one.sample.animation :as fx]))

(def ^{:doc "A map which contains chunks of HTML which may be used
  when rendering views."}
  snippets (snippets/snippets))

(defmulti render-button
  "Render the submit button based on the current state of the
  form. The button is disabled while the user is editing the form and
  becomes enabled when the form is complete."
  identity)

(defmethod render-button :default [_])

(defmethod render-button [:finished :editing] [_]
  (fx/disable-button "greet-button"))

(defmethod render-button [:editing :finished] [_]
  (fx/enable-button "greet-button"))

(defmulti render-form-field
  "Render a form field based on the current state transition. Form
  fields are validated as soon as they lose focus. There are six
  transitions and each one has its own animation."
  :transition)

(defmethod render-form-field :default [_])

(defn- label-xpath
  "Accepts an element id for an input field and return the xpath
  string to the label for that field."
  [id]
  (str "//label[@id='" id "-label']/span"))

(defmethod render-form-field [:empty :editing] [{:keys [id]}]
  (fx/label-move-up (label-xpath id)))

(defmethod render-form-field [:editing :empty] [{:keys [id]}]
  (fx/label-move-down (label-xpath id)))

(defmethod render-form-field [:editing-valid :valid] [{:keys [id]}]
  (fx/label-fade-out (label-xpath id)))

(defmethod render-form-field [:valid :editing-valid] [{:keys [id]}]
  (play (label-xpath id) fx/fade-in))

(defmethod render-form-field [:editing :error] [{:keys [id error]}]
  (let [error-element (by-id (str id "-error"))]
    (set-style! error-element "opacity" "0")
    (set-html! error-element error)
    (play error-element fx/fade-in)))

(defn- swap-error-messages
  "Accepts an id and an error message and fades the old error message
  out and the new one in."
  [id error]
  (let [error-element (by-id (str id "-error"))]
    (play error-element fx/fade-out
             {:name "fade out error"})
    (play error-element fx/fade-in {:before #(set-html! error-element error)})))

(defmethod render-form-field [:error :editing-error] [{:keys [id error]}]
  (swap-error-messages id error))

(defmethod render-form-field [:editing-error :error] [{:keys [id error]}]
  (swap-error-messages id error))

(defmethod render-form-field [:editing-error :editing-valid] [{:keys [id]}]
  (let [error-element (by-id (str id "-error"))]
    (play error-element (assoc fx/fade-out :time 200))))

(defmethod render-form-field [:editing-error :empty] [{:keys [id]}]
  (let [error-element (by-id (str id "-error"))]
    (play error-element (assoc fx/fade-out :time 200))
    (fx/label-move-down (label-xpath id))))

(defn- add-input-event-listeners
  "Accepts a field-id and creates listeners for blur and focus events which will then fire
  `:field-changed` and `:editing-field` events."
  [field-id]
  (let [field (by-id field-id)
        keyboard (goog.events.KeyHandler. (by-id "form"))]
    (event/listen field
                  "blur"
                  #(dispatch/fire [:field-finished field-id] (value field)))
    (event/listen field
                  "focus"
                  #(dispatch/fire [:editing-field field-id]))
    (event/listen field
                  "keyup"
                  #(dispatch/fire [:field-changed field-id] (value field)))
    (event/listen keyboard
                  "key"
                  (fn [e] (when (= (.-keyCode e) key-codes/ENTER)
                           (do (.blur (by-id "name-input") ())
                               (dispatch/fire :form-submit)))))))

(defmulti render
  "Accepts a map which represents the current state of the application
  and renders a view based on the value of the `:state` key."
  :state)

(defmethod render :init [_]
  (comment
    (fx/initialize-views (:form snippets) (:greeting snippets))
    (add-input-event-listeners "name-input")
    (event/listen (by-id "greet-button")
                  "click"
                  #(dispatch/fire :greeting
                                  {:name (value (by-id "name-input"))}))))

(defmethod render :form [{:keys [state error name]}]
  (fx/show-form)
  (set-value! (by-id "name-input") "")
  (dispatch/fire [:field-finished "name-input"] ""))

(defmethod render :greeting [{:keys [state name exists]}]
  (set-text! (single-node (by-class "name")) name)
  (set-text! (single-node (by-class "again")) (if exists "again" ""))
  (fx/show-greeting))

(dispatch/react-to #{:state-change} (fn [_ m] (render m)))

;; ------------- fnx ------------- 

(defmulti render-fnx
  "Accepts a map which represents the current state of the application
  and renders a view based on the value of the `:state` key."
  :state)

(defmethod render-fnx :init [_]
  (fx/initialize-views-fnx
   (:ns-nav snippets)
   (:fn-display snippets)
   (:spinner snippets)
   (:prev snippets)))

(defn- hide "Hide the element with id id"
  [id]
  ;; hide the spinner
  (set-styles! (by-id id) {:display "none"}))

(defn- previous-ns-block "Display or not the prev block depending on the current namespace."
  [all-ns ns-nav]
  ;; Deal with ..
  (let [prev (by-id "prev")]
    (if ns-nav
      (do
        (set-styles! prev {:display "block"})
        (event/listen prev "click"
                      #(dispatch/fire :ns-clicked {:ns (parent-ns all-ns ns-nav)})))
      (set-styles! prev {:display "none"}))))

(defn- display-lns "Display namespaces"
  [lns]
  (let [nsn (by-id "ns-nav")]
    (when lns
      ;; show the namespace block
      (set-styles! nsn {:display "block" :color "red"})
      ;; destroy the content on this block
      (destroy-children! nsn)
      ;; display the list of namespaces
      (dorun (map #(append! nsn (str "<div id='ns-" % "'>"  % "</div>")) lns))
      ;; event when click on one of the ns
      (dorun (map (fn [n] (event/listen
                           (by-id (str "ns-" n))
                           "click"
                           #(dispatch/fire :ns-clicked {:ns n}))) lns)))))

(defn- display-fns "Display functions list"
  [fns]
  (let [fnd (by-id "fn-display")]
    (when fns
      ;; show the function block
      (set-styles! fnd {:display "block" :color "blue"})
      ;; destroy the content on this block
      (destroy-children! fnd)
      ;; display the list of functions
      (dorun (map #(append! fnd (str "<div id='fn-" % "'>"  % "</div>")) fns))
      ;; event when click on one of the fn
      (dorun (map (fn [f] (event/listen
                           (by-id (str "fn-" f))
                           "click"
                           #(dispatch/fire :fn-clicked {:fn f}))) fns)))))

(defn- reset-ids "Reset the content of a div with id id"
  [& ids]
  (dorun (map #(destroy-children! (by-id %)) ids)))

(defmethod render-fnx :ns-navigating [{:keys [all-ns ns-nav]}]
  (let [lns-fns (ls-curr-ns all-ns ns-nav)]
    ;; reset or hide things part
    (hide "spinner")
    (reset-ids "ns-nav" "fn-display")

    ;; display part
    (previous-ns-block all-ns ns-nav)
    (display-lns (first lns-fns))
    (display-fns (second lns-fns))))

(dispatch/react-to #{:state-change-fnx} (fn [_ m] (render-fnx m)))

;; ------------- fnx -------------

(defn- form-fields-status
  "Given a map of old and new form states, generate a map with `:id`,
  `:transition` and `:error` keys which can be passed to
  `render-form-field`."
  [m]
  (map #(hash-map :id %
                  :transition [(or (-> m :old :fields % :status) :empty)
                               (-> m :new :fields % :status)]
                  :error (-> m :new :fields % :error))
       (keys (-> m :new :fields))))

(dispatch/react-to #{:form-change}
                   (fn [_ m]
                     (doseq [s (form-fields-status m)]
                       (render-form-field s))
                     (render-button [(-> m :old :status)
                                     (-> m :new :status)] )))
