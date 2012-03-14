goog.provide('one.sample.logging');
goog.require('cljs.core');
goog.require('one.dispatch');
goog.require('one.logging');
/**
* The logger that receives all application-specific events.
*/
one.sample.logging.logger = one.logging.get_logger.call(null,"events");
one.dispatch.react_to.call(null,cljs.core.constantly.call(null,true),(function (t,d){
return one.logging.info.call(null,one.sample.logging.logger,cljs.core.str.call(null,cljs.core.pr_str.call(null,t)," - ",cljs.core.pr_str.call(null,d)));
}));
