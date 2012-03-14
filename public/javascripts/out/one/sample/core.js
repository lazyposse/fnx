goog.provide('one.sample.core');
goog.require('cljs.core');
goog.require('goog.uri.utils');
goog.require('clojure.browser.repl');
goog.require('one.dispatch');
goog.require('one.sample.view');
/**
* Return a string which is the scheme and domain portion of the URL
* for the server from which this code was served.
*/
one.sample.core.server = (function server(){
var location__5601 = window.location.toString(cljs.core.List.EMPTY);

return cljs.core.str.call(null,goog.uri.utils.getScheme.call(null,location__5601),"://",goog.uri.utils.getDomain.call(null,location__5601));
});
/**
* Connects to a ClojureScript REPL running on localhost port 9000.
* 
* This allows a browser-connected REPL to send JavaScript to the
* browser for evaluation. This function should be called from a script
* in the development host HTML page.
*/
one.sample.core.repl = (function repl(){
return clojure.browser.repl.connect.call(null,cljs.core.str.call(null,one.sample.core.server.call(null),":9000/repl"));
});
goog.exportSymbol('one.sample.core.repl', one.sample.core.repl);
/**
* Start the application by firing a `:init` event which will cause the
* form view to be displayed.
* 
* This function must be called from the host HTML page to start the
* application.
*/
one.sample.core.start = (function start(){
return one.dispatch.fire.call(null,"﷐'init");
});
goog.exportSymbol('one.sample.core.start', one.sample.core.start);
