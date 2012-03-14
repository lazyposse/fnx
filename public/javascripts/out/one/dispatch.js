goog.provide('one.dispatch');
goog.require('cljs.core');
/**
* Stores the current reactions.
*/
one.dispatch.reactions = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* Cause the specified reactor to be invoked whenever an event that
* satisfies `event-pred` is fired. reactor is a function that accepts
* two arguments: `event-id` and `event-data`.
* 
* Returns the reaction.
* 
* The reactor will continue to be invoked until one of two things
* happens:
* 
* 1. `delete-reaction` is called on this reaction.
* 
* 2. The reaction occurs `max-count` times. If `max-count` is not
* specified, the reaction will continue to be invoked until deleted.
* 
* If `max-count` is specified, `delete-reaction` will be called
* automatically when the reaction has occurred the specified number of
* times.
*/
one.dispatch.react_to = (function() {
var react_to = null;
var react_to__6130 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__6131 = (function (max_count,event_pred,reactor){
var reaction__6129 = cljs.core.ObjMap.fromObject(["﷐'max-count","﷐'event-pred","﷐'reactor"],{"﷐'max-count":max_count,"﷐'event-pred":event_pred,"﷐'reactor":reactor});

cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__6129,0);
return reaction__6129;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__6130.call(this,max_count,event_pred);
case  3 :
return react_to__6131.call(this,max_count,event_pred,reactor);
}
throw('Invalid arity: ' + arguments.length);
};
return react_to;
})()
;
/**
* Delete a reaction. After calling this function, the specified
* reaction will no longer be invoked.
*/
one.dispatch.delete_reaction = (function delete_reaction(reaction){
return cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.dissoc,reaction);
});
/**
* Raise an event to any reactors whose event-pred returns true for
* `event-id`. The `event-id` and `event-data`, if specified, are passed to
* the reactor.
*/
one.dispatch.fire = (function() {
var fire = null;
var fire__6174 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__6175 = (function (event_id,event_data){
var matching_reactions__6147 = cljs.core.filter.call(null,(function (p__6139){
var vec__6140__6142 = p__6139;
var map__6141__6143 = cljs.core.nth.call(null,vec__6140__6142,0,null);
var map__6141__6144 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6141__6143))?cljs.core.apply.call(null,cljs.core.hash_map,map__6141__6143):map__6141__6143);
var event_pred__6145 = cljs.core.get.call(null,map__6141__6144,"﷐'event-pred");
var run_count__6146 = cljs.core.nth.call(null,vec__6140__6142,1,null);

return event_pred__6145.call(null,event_id);
}),cljs.core.deref.call(null,one.dispatch.reactions));

var G__6148__6149 = cljs.core.seq.call(null,matching_reactions__6147);

if(cljs.core.truth_(G__6148__6149))
{var G__6151__6153 = cljs.core.first.call(null,G__6148__6149);
var vec__6152__6154 = G__6151__6153;
var reaction__6155 = cljs.core.nth.call(null,vec__6152__6154,0,null);
var run_count__6156 = cljs.core.nth.call(null,vec__6152__6154,1,null);
var G__6148__6157 = G__6148__6149;

var G__6151__6158 = G__6151__6153;
var G__6148__6159 = G__6148__6157;

while(true){
var vec__6160__6161 = G__6151__6158;
var reaction__6162 = cljs.core.nth.call(null,vec__6160__6161,0,null);
var run_count__6163 = cljs.core.nth.call(null,vec__6160__6161,1,null);
var G__6148__6164 = G__6148__6159;

var map__6165__6166 = reaction__6162;
var map__6165__6167 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6165__6166))?cljs.core.apply.call(null,cljs.core.hash_map,map__6165__6166):map__6165__6166);
var reactor__6168 = cljs.core.get.call(null,map__6165__6167,"﷐'reactor");
var max_count__6169 = cljs.core.get.call(null,map__6165__6167,"﷐'max-count");
var run_count__6170 = (run_count__6163 + 1);

reactor__6168.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____6171 = max_count__6169;

if(cljs.core.truth_(and__3546__auto____6171))
{return (max_count__6169 <= run_count__6170);
} else
{return and__3546__auto____6171;
}
})()))
{one.dispatch.delete_reaction.call(null,reaction__6162);
} else
{cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__6162,run_count__6170);
}
var temp__3698__auto____6172 = cljs.core.next.call(null,G__6148__6164);

if(cljs.core.truth_(temp__3698__auto____6172))
{var G__6148__6173 = temp__3698__auto____6172;

{
var G__6177 = cljs.core.first.call(null,G__6148__6173);
var G__6178 = G__6148__6173;
G__6151__6158 = G__6177;
G__6148__6159 = G__6178;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
fire = function(event_id,event_data){
switch(arguments.length){
case  1 :
return fire__6174.call(this,event_id);
case  2 :
return fire__6175.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
