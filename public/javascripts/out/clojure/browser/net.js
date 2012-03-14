goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7507){
var vec__7508__7509 = p__7507;
var k__7510 = cljs.core.nth.call(null,vec__7508__7509,0,null);
var v__7511 = cljs.core.nth.call(null,vec__7508__7509,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7510.toLowerCase()),v__7511]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__7542 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7512 = this$;

if(cljs.core.truth_(and__3546__auto____7512))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7512;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____7513 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7513))
{return or__3548__auto____7513;
} else
{var or__3548__auto____7514 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____7514))
{return or__3548__auto____7514;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__7543 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____7515 = this$;

if(cljs.core.truth_(and__3546__auto____7515))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7515;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____7516 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
} else
{var or__3548__auto____7517 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__7544 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____7518 = this$;

if(cljs.core.truth_(and__3546__auto____7518))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7518;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____7519 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7519))
{return or__3548__auto____7519;
} else
{var or__3548__auto____7520 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____7520))
{return or__3548__auto____7520;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__7545 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____7521 = this$;

if(cljs.core.truth_(and__3546__auto____7521))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7521;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____7522 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7522))
{return or__3548__auto____7522;
} else
{var or__3548__auto____7523 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____7523))
{return or__3548__auto____7523;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__7542.call(this,this$);
case  2 :
return connect__7543.call(this,this$,opt1);
case  3 :
return connect__7544.call(this,this$,opt1,opt2);
case  4 :
return connect__7545.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__7547 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____7524 = this$;

if(cljs.core.truth_(and__3546__auto____7524))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7524;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____7525 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7525))
{return or__3548__auto____7525;
} else
{var or__3548__auto____7526 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7526))
{return or__3548__auto____7526;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__7548 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____7527 = this$;

if(cljs.core.truth_(and__3546__auto____7527))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7527;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____7528 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7528))
{return or__3548__auto____7528;
} else
{var or__3548__auto____7529 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7529))
{return or__3548__auto____7529;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__7549 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____7530 = this$;

if(cljs.core.truth_(and__3546__auto____7530))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7530;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____7531 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{var or__3548__auto____7532 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__7550 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____7533 = this$;

if(cljs.core.truth_(and__3546__auto____7533))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7533;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____7534 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7534))
{return or__3548__auto____7534;
} else
{var or__3548__auto____7535 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7535))
{return or__3548__auto____7535;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__7551 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____7536 = this$;

if(cljs.core.truth_(and__3546__auto____7536))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7536;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____7537 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
} else
{var or__3548__auto____7538 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7538))
{return or__3548__auto____7538;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__7547.call(this,this$,opt);
case  3 :
return transmit__7548.call(this,this$,opt,opt2);
case  4 :
return transmit__7549.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__7550.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__7551.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____7539 = this$;

if(cljs.core.truth_(and__3546__auto____7539))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____7539;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____7540 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7540))
{return or__3548__auto____7540;
} else
{var or__3548__auto____7541 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____7541))
{return or__3548__auto____7541;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7553){
var vec__7554__7555 = p__7553;
var k__7556 = cljs.core.nth.call(null,vec__7554__7555,0,null);
var v__7557 = cljs.core.nth.call(null,vec__7554__7555,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7556.toLowerCase()),v__7557]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__7558 = null;
var G__7558__7559 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7558__7560 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7558__7561 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7558__7562 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7558__7563 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__7558 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__7558__7559.call(this,this$,uri);
case  3 :
return G__7558__7560.call(this,this$,uri,method);
case  4 :
return G__7558__7561.call(this,this$,uri,method,content);
case  5 :
return G__7558__7562.call(this,this$,uri,method,content,headers);
case  6 :
return G__7558__7563.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7558;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7565){
var vec__7566__7567 = p__7565;
var k__7568 = cljs.core.nth.call(null,vec__7566__7567,0,null);
var v__7569 = cljs.core.nth.call(null,vec__7566__7567,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7568.toLowerCase()),v__7569]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__7576 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____7570 = this$;

if(cljs.core.truth_(and__3546__auto____7570))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____7570;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____7571 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7571))
{return or__3548__auto____7571;
} else
{var or__3548__auto____7572 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____7572))
{return or__3548__auto____7572;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__7577 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____7573 = this$;

if(cljs.core.truth_(and__3546__auto____7573))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____7573;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____7574 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7574))
{return or__3548__auto____7574;
} else
{var or__3548__auto____7575 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____7575))
{return or__3548__auto____7575;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__7576.call(this,this$,service_name,fn);
case  4 :
return register_service__7577.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__7579 = null;
var G__7579__7580 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__7579__7581 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__7579__7582 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__7579__7583 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__7579 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__7579__7580.call(this,this$);
case  2 :
return G__7579__7581.call(this,this$,on_connect_fn);
case  3 :
return G__7579__7582.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__7579__7583.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7579;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__7585 = null;
var G__7585__7586 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__7585__7587 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__7585 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__7585__7586.call(this,this$,service_name,fn);
case  4 :
return G__7585__7587.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7585;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__7598 = (function (){
var temp__3698__auto____7589 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____7589))
{var config__7590 = temp__3698__auto____7589;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__7590)));
} else
{return null;
}
});
var xpc_connection__7599 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__7591){
var vec__7592__7593 = p__7591;
var k__7594 = cljs.core.nth.call(null,vec__7592__7593,0,null);
var v__7595 = cljs.core.nth.call(null,vec__7592__7593,1,null);

var temp__3695__auto____7596 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__7594);

if(cljs.core.truth_(temp__3695__auto____7596))
{var field__7597 = temp__3695__auto____7596;

return cljs.core.assoc.call(null,sum,field__7597,v__7595);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__7598.call(this);
case  1 :
return xpc_connection__7599.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
