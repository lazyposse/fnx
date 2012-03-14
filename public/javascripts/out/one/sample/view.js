goog.provide('one.sample.view');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('one.browser.animation');
goog.require('domina');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('clojure.browser.event');
goog.require('one.dispatch');
goog.require('one.sample.animation');
/**
* A map which contains chunks of HTML which may be used
* when rendering views.
*/
one.sample.view.snippets = cljs.core.ObjMap.fromObject(["﷐'form","﷐'greeting"],{"﷐'form":"<div id=\"form\">\n      <h1 id=\"header\">My form</h1>\n      <div class=\"input\">\n        <label id=\"name-input-label\">\n          <span>Enter your name</span>\n          <input type=\"text\" size=\"30\" id=\"name-input\" />\n        </label>\n        <div class=\"small error\" id=\"name-input-error\"> </div>\n      </div>\n      <input value=\"Done!\" type=\"button\" class=\"button green\" id=\"greet-button\" />\n    </div>","﷐'greeting":"<div id=\"greeting\">\n      <h2>Hello</h2>\n      <div class=\"break\"></div>\n      <h3><span class=\"again\">again</span> <span class=\"name\">Person</span></h3>\n    </div>"});
/**
* Render the submit button based on the current state of the
* form. The button is disabled while the user is editing the form and
* becomes enabled when the form is complete.
*/
one.sample.view.render_button = (function (){var method_table__513__auto____5661 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5662 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5663 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5664 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5665 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-button",cljs.core.identity,"﷐'default",hierarchy__517__auto____5665,method_table__513__auto____5661,prefer_table__514__auto____5662,method_cache__515__auto____5663,cached_hierarchy__516__auto____5664));
})();
cljs.core._add_method.call(null,one.sample.view.render_button,"﷐'default",(function (_){
return null;
}));
cljs.core._add_method.call(null,one.sample.view.render_button,cljs.core.Vector.fromArray(["﷐'finished","﷐'editing"]),(function (_){
return one.sample.animation.disable_button.call(null,"greet-button");
}));
cljs.core._add_method.call(null,one.sample.view.render_button,cljs.core.Vector.fromArray(["﷐'editing","﷐'finished"]),(function (_){
return one.sample.animation.enable_button.call(null,"greet-button");
}));
/**
* Render a form field based on the current state transition. Form
* fields are validated as soon as they lose focus. There are six
* transitions and each one has its own animation.
*/
one.sample.view.render_form_field = (function (){var method_table__513__auto____5666 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5667 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5668 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5669 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5670 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-form-field","﷐'transition","﷐'default",hierarchy__517__auto____5670,method_table__513__auto____5666,prefer_table__514__auto____5667,method_cache__515__auto____5668,cached_hierarchy__516__auto____5669));
})();
cljs.core._add_method.call(null,one.sample.view.render_form_field,"﷐'default",(function (_){
return null;
}));
/**
* Accepts an element id for an input field and return the xpath
* string to the label for that field.
*/
one.sample.view.label_xpath = (function label_xpath(id){
return cljs.core.str.call(null,"//label[@id='",id,"-label']/span");
});
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'empty","﷐'editing"]),(function (p__5671){
var map__5672__5673 = p__5671;
var map__5672__5674 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5672__5673))?cljs.core.apply.call(null,cljs.core.hash_map,map__5672__5673):map__5672__5673);
var id__5675 = cljs.core.get.call(null,map__5672__5674,"﷐'id");

return one.sample.animation.label_move_up.call(null,one.sample.view.label_xpath.call(null,id__5675));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'empty"]),(function (p__5676){
var map__5677__5678 = p__5676;
var map__5677__5679 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5677__5678))?cljs.core.apply.call(null,cljs.core.hash_map,map__5677__5678):map__5677__5678);
var id__5680 = cljs.core.get.call(null,map__5677__5679,"﷐'id");

return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__5680));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-valid","﷐'valid"]),(function (p__5681){
var map__5682__5683 = p__5681;
var map__5682__5684 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5682__5683))?cljs.core.apply.call(null,cljs.core.hash_map,map__5682__5683):map__5682__5683);
var id__5685 = cljs.core.get.call(null,map__5682__5684,"﷐'id");

return one.sample.animation.label_fade_out.call(null,one.sample.view.label_xpath.call(null,id__5685));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'valid","﷐'editing-valid"]),(function (p__5686){
var map__5687__5688 = p__5686;
var map__5687__5689 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5687__5688))?cljs.core.apply.call(null,cljs.core.hash_map,map__5687__5688):map__5687__5688);
var id__5690 = cljs.core.get.call(null,map__5687__5689,"﷐'id");

return one.browser.animation.play.call(null,one.sample.view.label_xpath.call(null,id__5690),one.sample.animation.fade_in);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'error"]),(function (p__5691){
var map__5692__5693 = p__5691;
var map__5692__5694 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5692__5693))?cljs.core.apply.call(null,cljs.core.hash_map,map__5692__5693):map__5692__5693);
var error__5695 = cljs.core.get.call(null,map__5692__5694,"﷐'error");
var id__5696 = cljs.core.get.call(null,map__5692__5694,"﷐'id");

var error_element__5697 = domina.by_id.call(null,cljs.core.str.call(null,id__5696,"-error"));

domina.set_style_BANG_.call(null,error_element__5697,"opacity","0");
domina.set_html_BANG_.call(null,error_element__5697,error__5695);
return one.browser.animation.play.call(null,error_element__5697,one.sample.animation.fade_in);
}));
/**
* Accepts an id and an error message and fades the old error message
* out and the new one in.
*/
one.sample.view.swap_error_messages = (function swap_error_messages(id,error){
var error_element__5698 = domina.by_id.call(null,cljs.core.str.call(null,id,"-error"));

one.browser.animation.play.call(null,error_element__5698,one.sample.animation.fade_out,cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":"fade out error"}));
return one.browser.animation.play.call(null,error_element__5698,one.sample.animation.fade_in,cljs.core.ObjMap.fromObject(["﷐'before"],{"﷐'before":(function (){
return domina.set_html_BANG_.call(null,error_element__5698,error);
})}));
});
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'error","﷐'editing-error"]),(function (p__5699){
var map__5700__5701 = p__5699;
var map__5700__5702 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5700__5701))?cljs.core.apply.call(null,cljs.core.hash_map,map__5700__5701):map__5700__5701);
var error__5703 = cljs.core.get.call(null,map__5700__5702,"﷐'error");
var id__5704 = cljs.core.get.call(null,map__5700__5702,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__5704,error__5703);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'error"]),(function (p__5705){
var map__5706__5707 = p__5705;
var map__5706__5708 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5706__5707))?cljs.core.apply.call(null,cljs.core.hash_map,map__5706__5707):map__5706__5707);
var error__5709 = cljs.core.get.call(null,map__5706__5708,"﷐'error");
var id__5710 = cljs.core.get.call(null,map__5706__5708,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__5710,error__5709);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'editing-valid"]),(function (p__5711){
var map__5712__5713 = p__5711;
var map__5712__5714 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5712__5713))?cljs.core.apply.call(null,cljs.core.hash_map,map__5712__5713):map__5712__5713);
var id__5715 = cljs.core.get.call(null,map__5712__5714,"﷐'id");

var error_element__5716 = domina.by_id.call(null,cljs.core.str.call(null,id__5715,"-error"));

return one.browser.animation.play.call(null,error_element__5716,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'empty"]),(function (p__5717){
var map__5718__5719 = p__5717;
var map__5718__5720 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5718__5719))?cljs.core.apply.call(null,cljs.core.hash_map,map__5718__5719):map__5718__5719);
var id__5721 = cljs.core.get.call(null,map__5718__5720,"﷐'id");

var error_element__5722 = domina.by_id.call(null,cljs.core.str.call(null,id__5721,"-error"));

one.browser.animation.play.call(null,error_element__5722,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__5721));
}));
/**
* Accepts a field-id and creates listeners for blur and focus events which will then fire
* `:field-changed` and `:editing-field` events.
*/
one.sample.view.add_input_event_listeners = (function add_input_event_listeners(field_id){
var field__5723 = domina.by_id.call(null,field_id);
var keyboard__5724 = (new goog.events.KeyHandler(domina.by_id.call(null,"form")));

clojure.browser.event.listen.call(null,field__5723,"blur",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished",field_id]),domina.value.call(null,field__5723));
}));
clojure.browser.event.listen.call(null,field__5723,"focus",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'editing-field",field_id]));
}));
clojure.browser.event.listen.call(null,field__5723,"keyup",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-changed",field_id]),domina.value.call(null,field__5723));
}));
return clojure.browser.event.listen.call(null,keyboard__5724,"key",(function (e){
if(cljs.core.truth_(cljs.core._EQ_.call(null,e.keyCode,goog.events.KeyCodes.ENTER)))
{domina.by_id.call(null,"name-input").blur(cljs.core.List.EMPTY);
return one.dispatch.fire.call(null,"﷐'form-submit");
} else
{return null;
}
}));
});
/**
* Accepts a map which represents the current state of the application
* and renders a view based on the value of the `:state` key.
*/
one.sample.view.render = (function (){var method_table__513__auto____5725 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5726 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5727 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5728 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5729 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","﷐'state","﷐'default",hierarchy__517__auto____5729,method_table__513__auto____5725,prefer_table__514__auto____5726,method_cache__515__auto____5727,cached_hierarchy__516__auto____5728));
})();
cljs.core._add_method.call(null,one.sample.view.render,"﷐'init",(function (_){
one.sample.animation.initialize_views.call(null,"﷐'form".call(null,one.sample.view.snippets),"﷐'greeting".call(null,one.sample.view.snippets));
one.sample.view.add_input_event_listeners.call(null,"name-input");
return clojure.browser.event.listen.call(null,domina.by_id.call(null,"greet-button"),"click",(function (){
return one.dispatch.fire.call(null,"﷐'greeting",cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":domina.value.call(null,domina.by_id.call(null,"name-input"))}));
}));
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'form",(function (p__5730){
var map__5731__5732 = p__5730;
var map__5731__5733 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5731__5732))?cljs.core.apply.call(null,cljs.core.hash_map,map__5731__5732):map__5731__5732);
var name__5734 = cljs.core.get.call(null,map__5731__5733,"﷐'name");
var error__5735 = cljs.core.get.call(null,map__5731__5733,"﷐'error");
var state__5736 = cljs.core.get.call(null,map__5731__5733,"﷐'state");

one.sample.animation.show_form.call(null);
domina.set_value_BANG_.call(null,domina.by_id.call(null,"name-input"),"");
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished","name-input"]),"");
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'greeting",(function (p__5737){
var map__5738__5739 = p__5737;
var map__5738__5740 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5738__5739))?cljs.core.apply.call(null,cljs.core.hash_map,map__5738__5739):map__5738__5739);
var exists__5741 = cljs.core.get.call(null,map__5738__5740,"﷐'exists");
var name__5742 = cljs.core.get.call(null,map__5738__5740,"﷐'name");
var state__5743 = cljs.core.get.call(null,map__5738__5740,"﷐'state");

domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"name")),name__5742);
domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"again")),(cljs.core.truth_(exists__5741)?"again":""));
return one.sample.animation.show_greeting.call(null);
}));
one.dispatch.react_to.call(null,cljs.core.set(["﷐'state-change"]),(function (_,m){
return one.sample.view.render.call(null,m);
}));
/**
* Given a map of old and new form states, generate a map with `:id`,
* `:transition` and `:error` keys which can be passed to
* `render-form-field`.
*/
one.sample.view.form_fields_status = (function form_fields_status(m){
return cljs.core.map.call(null,(function (p1__5744_SHARP_){
return cljs.core.hash_map.call(null,"﷐'id",p1__5744_SHARP_,"﷐'transition",cljs.core.Vector.fromArray([(function (){var or__3548__auto____5745 = "﷐'status".call(null,p1__5744_SHARP_.call(null,"﷐'fields".call(null,"﷐'old".call(null,m))));

if(cljs.core.truth_(or__3548__auto____5745))
{return or__3548__auto____5745;
} else
{return "﷐'empty";
}
})(),"﷐'status".call(null,p1__5744_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))))]),"﷐'error","﷐'error".call(null,p1__5744_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m)))));
}),cljs.core.keys.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))));
});
one.dispatch.react_to.call(null,cljs.core.set(["﷐'form-change"]),(function (_,m){
var G__5746__5747 = cljs.core.seq.call(null,one.sample.view.form_fields_status.call(null,m));

if(cljs.core.truth_(G__5746__5747))
{var s__5748 = cljs.core.first.call(null,G__5746__5747);
var G__5746__5749 = G__5746__5747;

while(true){
one.sample.view.render_form_field.call(null,s__5748);
var temp__3698__auto____5750 = cljs.core.next.call(null,G__5746__5749);

if(cljs.core.truth_(temp__3698__auto____5750))
{var G__5746__5751 = temp__3698__auto____5750;

{
var G__5752 = cljs.core.first.call(null,G__5746__5751);
var G__5753 = G__5746__5751;
s__5748 = G__5752;
G__5746__5749 = G__5753;
continue;
}
} else
{}
break;
}
} else
{}
return one.sample.view.render_button.call(null,cljs.core.Vector.fromArray(["﷐'status".call(null,"﷐'old".call(null,m)),"﷐'status".call(null,"﷐'new".call(null,m))]));
}));
