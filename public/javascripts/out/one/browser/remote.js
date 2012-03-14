goog.provide('one.browser.remote');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrManager');
one.browser.remote.responders = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
one.browser.remote.add_responders = (function add_responders(id,success,error){
if(cljs.core.truth_((function (){var or__3548__auto____6187 = success;

if(cljs.core.truth_(or__3548__auto____6187))
{return or__3548__auto____6187;
} else
{return error;
}
})()))
{return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.assoc,id,cljs.core.ObjMap.fromObject(["﷐'success","﷐'error"],{"﷐'success":success,"﷐'error":error}));
} else
{return null;
}
});
goog.net.XhrManager.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrManager.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6188){
var vec__6189__6190 = p__6188;
var k__6191 = cljs.core.nth.call(null,vec__6189__6190,0,null);
var v__6192 = cljs.core.nth.call(null,vec__6189__6190,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6191.toLowerCase()),v__6192]);
}),cljs.core.js__GT_clj.call(null,goog.net.EventType)));
});
one.browser.remote._STAR_xhr_manager_STAR_ = (new goog.net.XhrManager(null,null,null,0,5000));
/**
* Asynchronously make a network request for the resource at url. If
* provided via the `:on-success` and `:on-error` keyword arguments, the
* appropriate one of `on-success` or `on-error` will be called on
* completion. They will be passed a map containing the keys `:id`,
* `:body`, `:status`, and `:event`. The entry for `:event` contains an
* instance of the `goog.net.XhrManager.Event`.
* 
* Other allowable keyword arguments are `:method`, `:content`, `:headers`,
* `:priority`, and `:retries`. `:method` defaults to "GET" and `:retries`
* defaults to `0`.
* @param {...*} var_args
*/
one.browser.remote.request = (function() { 
var request__delegate = function (id,url,p__6193){
var map__6194__6195 = p__6193;
var map__6194__6196 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6194__6195))?cljs.core.apply.call(null,cljs.core.hash_map,map__6194__6195):map__6194__6195);
var on_error__6197 = cljs.core.get.call(null,map__6194__6196,"﷐'on-error");
var on_success__6198 = cljs.core.get.call(null,map__6194__6196,"﷐'on-success");
var retries__6199 = cljs.core.get.call(null,map__6194__6196,"﷐'retries",0);
var priority__6200 = cljs.core.get.call(null,map__6194__6196,"﷐'priority");
var headers__6201 = cljs.core.get.call(null,map__6194__6196,"﷐'headers");
var content__6202 = cljs.core.get.call(null,map__6194__6196,"﷐'content");
var method__6203 = cljs.core.get.call(null,map__6194__6196,"﷐'method","GET");

try{one.browser.remote.add_responders.call(null,id,on_success__6198,on_error__6197);
return one.browser.remote._STAR_xhr_manager_STAR_.send(id,url,method__6203,content__6202,headers__6201,priority__6200,null,retries__6199);
}catch (e6204){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e6204)))
{var e__6205 = e6204;

return null;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e6204;
} else
{return null;
}
}
}};
var request = function (id,url,var_args){
var p__6193 = null;
if (goog.isDef(var_args)) {
  p__6193 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return request__delegate.call(this, id, url, p__6193);
};
request.cljs$lang$maxFixedArity = 2;
request.cljs$lang$applyTo = (function (arglist__6206){
var id = cljs.core.first(arglist__6206);
var url = cljs.core.first(cljs.core.next(arglist__6206));
var p__6193 = cljs.core.rest(cljs.core.next(arglist__6206));
return request__delegate.call(this, id, url, p__6193);
});
return request;
})()
;
one.browser.remote.response_success = (function response_success(e){
var temp__3698__auto____6207 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____6207))
{var map__6208__6209 = temp__3698__auto____6207;
var map__6208__6210 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6208__6209))?cljs.core.apply.call(null,cljs.core.hash_map,map__6208__6209):map__6208__6209);
var success__6211 = cljs.core.get.call(null,map__6208__6210,"﷐'success");

success__6211.call(null,e);
return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.dissoc,"﷐'id".call(null,e));
} else
{return null;
}
});
one.browser.remote.response_error = (function response_error(e){
var temp__3698__auto____6212 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____6212))
{var map__6213__6214 = temp__3698__auto____6212;
var map__6213__6215 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6213__6214))?cljs.core.apply.call(null,cljs.core.hash_map,map__6213__6214):map__6213__6214);
var error__6216 = cljs.core.get.call(null,map__6213__6215,"﷐'error");

error__6216.call(null,e);
return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.dissoc,"﷐'id".call(null,e));
} else
{return null;
}
});
one.browser.remote.response_received = (function response_received(f,e){
return f.call(null,cljs.core.ObjMap.fromObject(["﷐'id","﷐'body","﷐'status","﷐'event"],{"﷐'id":e.id,"﷐'body":e.xhrIo.getResponseText(),"﷐'status":e.xhrIo.getStatus(),"﷐'event":e}));
});
clojure.browser.event.listen.call(null,one.browser.remote._STAR_xhr_manager_STAR_,"success",cljs.core.partial.call(null,one.browser.remote.response_received,one.browser.remote.response_success));
clojure.browser.event.listen.call(null,one.browser.remote._STAR_xhr_manager_STAR_,"error",cljs.core.partial.call(null,one.browser.remote.response_received,one.browser.remote.response_error));
