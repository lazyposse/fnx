goog.provide('one.sample.history');
goog.require('cljs.core');
goog.require('one.dispatch');
goog.require('one.browser.history');
/**
* Handle navigation events by firing the appropriate view token.
*/
one.sample.history.nav_handler = (function nav_handler(p__5602){
var map__5603__5604 = p__5602;
var map__5603__5605 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5603__5604))?cljs.core.apply.call(null,cljs.core.hash_map,map__5603__5604):map__5603__5604);
var navigation_QMARK___5606 = cljs.core.get.call(null,map__5603__5605,"﷐'navigation?");
var token__5607 = cljs.core.get.call(null,map__5603__5605,"﷐'token");

if(cljs.core.truth_(navigation_QMARK___5606))
{return one.dispatch.fire.call(null,token__5607);
} else
{return null;
}
});
/**
* The global history object for this application.
*/
one.sample.history.history = one.browser.history.history.call(null,one.sample.history.nav_handler);
one.dispatch.react_to.call(null,cljs.core.set(["﷐'init","﷐'form","﷐'greeting"]),(function (t,_){
return one.browser.history.set_token.call(null,one.sample.history.history,(cljs.core.truth_(cljs.core.set(["﷐'init"]).call(null,t))?"﷐'form":t));
}));
