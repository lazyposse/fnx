goog.provide('one.logging');
goog.require('cljs.core');
goog.require('goog.debug.Console');
goog.require('goog.debug.FancyWindow');
goog.require('goog.debug.Logger');
one.logging.ILogViewer = {};
one.logging.start_display = (function start_display(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6179 = this$;

if(cljs.core.truth_(and__3546__auto____6179))
{return this$.one$logging$ILogViewer$start_display;
} else
{return and__3546__auto____6179;
}
})()))
{return this$.one$logging$ILogViewer$start_display(this$);
} else
{return (function (){var or__3548__auto____6180 = (one.logging.start_display[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6180))
{return or__3548__auto____6180;
} else
{var or__3548__auto____6181 = (one.logging.start_display["_"]);

if(cljs.core.truth_(or__3548__auto____6181))
{return or__3548__auto____6181;
} else
{throw cljs.core.missing_protocol.call(null,"ILogViewer.start-display",this$);
}
}
})().call(null,this$);
}
});
one.logging.stop_display = (function stop_display(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6182 = this$;

if(cljs.core.truth_(and__3546__auto____6182))
{return this$.one$logging$ILogViewer$stop_display;
} else
{return and__3546__auto____6182;
}
})()))
{return this$.one$logging$ILogViewer$stop_display(this$);
} else
{return (function (){var or__3548__auto____6183 = (one.logging.stop_display[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6183))
{return or__3548__auto____6183;
} else
{var or__3548__auto____6184 = (one.logging.stop_display["_"]);

if(cljs.core.truth_(or__3548__auto____6184))
{return or__3548__auto____6184;
} else
{throw cljs.core.missing_protocol.call(null,"ILogViewer.stop-display",this$);
}
}
})().call(null,this$);
}
});
/**
* Maps log level keywords to `goog.debug.Logger.Levels`.
*/
one.logging.levels = cljs.core.ObjMap.fromObject(["﷐'severe","﷐'warning","﷐'info","﷐'config","﷐'fine","﷐'finer","﷐'finest"],{"﷐'severe":goog.debug.Logger.Level.SEVERE,"﷐'warning":goog.debug.Logger.Level.WARNING,"﷐'info":goog.debug.Logger.Level.INFO,"﷐'config":goog.debug.Logger.Level.CONFIG,"﷐'fine":goog.debug.Logger.Level.FINE,"﷐'finer":goog.debug.Logger.Level.FINER,"﷐'finest":goog.debug.Logger.Level.FINEST});
/**
* Given a name, return an existing logger if one exists or create a
* new logger.
*/
one.logging.get_logger = (function get_logger(name){
return goog.debug.Logger.getLogger.call(null,name);
});
/**
* Given a logger and a message, write the message to the log with a
* logging level of `severe`.
*/
one.logging.severe = (function severe(logger,s){
return logger.severe(s);
});
/**
* Given a logger and a message, write the message to the log with a
* logging level of `warning`.
*/
one.logging.warning = (function warning(logger,s){
return logger.warning(s);
});
/**
* Given a logger and a message, write the message to the log with a
* logging level of `info`.
*/
one.logging.info = (function info(logger,s){
return logger.info(s);
});
/**
* Given a logger and a message, write the message to the log with a
* logging level of `config`.
*/
one.logging.config = (function config(logger,s){
return logger.config(s);
});
/**
* Given a logger and a message, write the message to the log with a
* logging level of `fine`.
*/
one.logging.fine = (function fine(logger,s){
return logger.fine(s);
});
/**
* Given a logger and a message, write the message to the log with a
* logging level of `finer`.
*/
one.logging.finer = (function finer(logger,s){
return logger.finer(s);
});
/**
* Given a logger and a message, write the message to the log with a
* logging level of `finest`.
*/
one.logging.finest = (function finest(logger,s){
return logger.finest(s);
});
/**
* Set the logging level of `logger` to `level`.
* 
* The `level` argument must be a keyword.
*/
one.logging.set_level = (function set_level(logger,level){
return logger.setLevel(cljs.core.get.call(null,one.logging.levels,level,goog.debug.Logger.Level.INFO));
});
goog.debug.FancyWindow.prototype.one$logging$ILogViewer$ = true;
goog.debug.FancyWindow.prototype.one$logging$ILogViewer$start_display = (function (this$){
var G__6185__6186 = this$;

G__6185__6186.setEnabled(true);
G__6185__6186.init(cljs.core.List.EMPTY);
return G__6185__6186;
});
goog.debug.FancyWindow.prototype.one$logging$ILogViewer$stop_display = (function (this$){
return this$.setCapturing(false);
});
goog.debug.Console.prototype.one$logging$ILogViewer$ = true;
goog.debug.Console.prototype.one$logging$ILogViewer$start_display = (function (this$){
return this$.setCapturing(true);
});
goog.debug.Console.prototype.one$logging$ILogViewer$stop_display = (function (this$){
return this$.setCapturing(false);
});
/**
* Returns a log viewer which will direct log messages to the
* browser's `console` window. Use the `start-display` and
* `stop-display` functions to start and stop printing log messages to
* the console.
*/
one.logging.console_output = (function console_output(){
return (new goog.debug.Console());
});
/**
* Returns a log viewer which will open a fancy logging window and
* direct log messages to it. Use the `start-display` and
* `stop-display` functions to start and stop printing log messages in
* this window.
*/
one.logging.fancy_output = (function fancy_output(name){
return (new goog.debug.FancyWindow(name));
});
