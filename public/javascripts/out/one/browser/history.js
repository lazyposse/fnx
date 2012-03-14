goog.provide('one.browser.history');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.History.prototype.clojure$browser$event$EventType$ = true;
goog.History.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6217){
var vec__6218__6219 = p__6217;
var k__6220 = cljs.core.nth.call(null,vec__6218__6219,0,null);
var v__6221 = cljs.core.nth.call(null,vec__6218__6219,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6220.toLowerCase()),v__6221]);
}),cljs.core.js__GT_clj.call(null,goog.history.EventType)));
});
/**
* Create a new history object in user visible mode. This allows users
* to, for example, hit the browser's back button without leaving the
* current page. The current history state is shown in the browser
* address bar as a document location fragment (the portion of the URL
* after the '#'). These addresses can be bookmarked, copied and pasted
* into another browser, and modified directly by the user like any
* other URL.
* 
* Any changes to the location hash will call the passed callback
* function.
*/
one.browser.history.history = (function history(callback){
var h__6222 = (cljs.core.truth_(goog.history.Html5History.isSupported.call(null))?(new goog.history.Html5History()):(new goog.History()));

clojure.browser.event.listen.call(null,h__6222,"navigate",(function (e){
return callback.call(null,cljs.core.ObjMap.fromObject(["﷐'token","﷐'type","﷐'navigation?"],{"﷐'token":cljs.core.keyword.call(null,e.token),"﷐'type":e.type,"﷐'navigation?":e.isNavigation}));
}));
h__6222.setEnabled(true);
return h__6222;
});
/**
* Sets the `history` state. The URL fragment will be set to the
* provided token.
*/
one.browser.history.set_token = (function set_token(history,token){
return history.setToken(cljs.core.name.call(null,token));
});
