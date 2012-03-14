goog.provide('one.sample.animation');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('one.core');
goog.require('domina');
goog.require('one.browser.animation');
goog.require('goog.dom.forms');
goog.require('goog.style');
one.sample.animation.form = "//div[@id='form']";
one.sample.animation.cloud = "//div[@id='greeting']";
one.sample.animation.label = "//label[@id='name-input-label']/span";
one.sample.animation.form_in = cljs.core.ObjMap.fromObject(["﷐'effect","﷐'start","﷐'end","﷐'time"],{"﷐'effect":"﷐'fade","﷐'start":0,"﷐'end":1,"﷐'time":800});
/**
* Accepts the form and greeting view HTML and adds them to the
* page. Animates the form sliding in from above. This function must be
* run before any other view functions. It may be called from any state
* to reset the UI.
*/
one.sample.animation.initialize_views = (function initialize_views(form_html,greeting_html){
var content__5608 = domina.xpath.xpath.call(null,"//div[@id='content']");

domina.destroy_children_BANG_.call(null,content__5608);
domina.set_html_BANG_.call(null,content__5608,form_html);
domina.append_BANG_.call(null,content__5608,greeting_html);
goog.style.setOpacity.call(null,domina.single_node.call(null,domina.xpath.xpath.call(null,one.sample.animation.label)),1);
domina.set_styles_BANG_.call(null,domina.xpath.xpath.call(null,one.sample.animation.cloud),cljs.core.ObjMap.fromObject(["﷐'opacity","﷐'display","﷐'margin-top"],{"﷐'opacity":"0","﷐'display":"none","﷐'margin-top":"-500px"}));
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"greet-button"),cljs.core.ObjMap.fromObject(["﷐'opacity","﷐'disabled"],{"﷐'opacity":"0.2","﷐'disabled":true}));
return one.browser.animation.play.call(null,one.sample.animation.form,one.sample.animation.form_in,cljs.core.ObjMap.fromObject(["﷐'after"],{"﷐'after":(function (){
return domina.by_id.call(null,"name-input").focus(cljs.core.List.EMPTY);
})}));
});
/**
* Move the passed input field label above the input field. Run when
* the field gets focus and is empty.
*/
one.sample.animation.label_move_up = (function label_move_up(label){
return one.browser.animation.play.call(null,label,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'effect","﷐'end","﷐'time"],{"﷐'effect":"﷐'color","﷐'end":"#53607b","﷐'time":200}),cljs.core.ObjMap.fromObject(["﷐'effect","﷐'up","﷐'time"],{"﷐'effect":"﷐'slide","﷐'up":40,"﷐'time":200})]));
});
/**
* Make the passed input field label invisible. Run when the input
* field loses focus and contains a valid input value.
*/
one.sample.animation.label_fade_out = (function label_fade_out(label){
return one.browser.animation.play.call(null,label,cljs.core.ObjMap.fromObject(["﷐'effect","﷐'end","﷐'time"],{"﷐'effect":"﷐'fade","﷐'end":0,"﷐'time":200}));
});
one.sample.animation.move_down = cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'effect","﷐'end","﷐'time"],{"﷐'effect":"﷐'fade","﷐'end":1,"﷐'time":200}),cljs.core.ObjMap.fromObject(["﷐'effect","﷐'end","﷐'time"],{"﷐'effect":"﷐'color","﷐'end":"#BBC4D7","﷐'time":200}),cljs.core.ObjMap.fromObject(["﷐'effect","﷐'down","﷐'time"],{"﷐'effect":"﷐'slide","﷐'down":40,"﷐'time":200})]);
one.sample.animation.fade_in = cljs.core.ObjMap.fromObject(["﷐'effect","﷐'end","﷐'time"],{"﷐'effect":"﷐'fade","﷐'end":1,"﷐'time":400});
one.sample.animation.fade_out = cljs.core.ObjMap.fromObject(["﷐'effect","﷐'end","﷐'time"],{"﷐'effect":"﷐'fade","﷐'end":0,"﷐'time":400});
/**
* Make the passed input field label visible and move it down into the
* input field. Run when an input field loses focus and is empty.
*/
one.sample.animation.label_move_down = (function label_move_down(label){
return one.browser.animation.play.call(null,label,one.sample.animation.move_down);
});
/**
* Move the form out of view and the greeting into view. Run when the
* submit button is clicked and the form has valid input.
*/
one.sample.animation.show_greeting = (function show_greeting(){
var e__5609 = cljs.core.ObjMap.fromObject(["﷐'effect","﷐'end","﷐'time"],{"﷐'effect":"﷐'fade","﷐'end":0,"﷐'time":500});

return one.browser.animation.play_animation.call(null,(function (){
return one.browser.animation.parallel.call(null,one.browser.animation.bind.call(null,one.sample.animation.form,e__5609),one.browser.animation.bind.call(null,one.sample.animation.label,e__5609),one.browser.animation.bind.call(null,one.sample.animation.cloud,cljs.core.ObjMap.fromObject(["﷐'effect","﷐'time"],{"﷐'effect":"﷐'color","﷐'time":500}),cljs.core.ObjMap.fromObject(["﷐'effect","﷐'time"],{"﷐'effect":"﷐'fade-in-and-show","﷐'time":600})));
}),cljs.core.ObjMap.fromObject(["﷐'before","﷐'after"],{"﷐'before":(function (){
return goog.dom.forms.setDisabled.call(null,domina.by_id.call(null,"name-input"),true);
}),"﷐'after":(function (){
return domina.set_styles_BANG_.call(null,domina.by_id.call(null,"greet-button"),cljs.core.ObjMap.fromObject(["﷐'display"],{"﷐'display":"none"}));
})}));
});
/**
* Move the greeting cloud out of view and show the form. Run when the
* back button is clicked from the greeting view.
*/
one.sample.animation.show_form = (function show_form(){
return one.browser.animation.play_animation.call(null,one.browser.animation.serial.call(null,one.browser.animation.parallel.call(null,one.browser.animation.bind.call(null,one.sample.animation.cloud,cljs.core.ObjMap.fromObject(["﷐'effect","﷐'time"],{"﷐'effect":"﷐'fade-out-and-hide","﷐'time":500})),one.browser.animation.bind.call(null,one.sample.animation.form,cljs.core.ObjMap.fromObject(["﷐'effect","﷐'time"],{"﷐'effect":"﷐'color","﷐'time":300}),one.sample.animation.form_in),one.browser.animation.bind.call(null,one.sample.animation.label,one.sample.animation.fade_in,one.sample.animation.move_down))),cljs.core.ObjMap.fromObject(["﷐'before","﷐'after"],{"﷐'before":(function (){
return domina.set_styles_BANG_.call(null,domina.by_id.call(null,"greet-button"),cljs.core.ObjMap.fromObject(["﷐'display"],{"﷐'display":"inline"}));
}),"﷐'after":(function (){
goog.dom.forms.setDisabled.call(null,domina.by_id.call(null,"name-input"),false);
return domina.by_id.call(null,"name-input").focus(cljs.core.List.EMPTY);
})}));
});
/**
* Accepts an element id for a button and disables it. Fades the
* button to 0.2 opacity.
*/
one.sample.animation.disable_button = (function disable_button(id){
var button__5610 = domina.by_id.call(null,id);

goog.dom.forms.setDisabled.call(null,button__5610,true);
return one.browser.animation.play.call(null,button__5610,cljs.core.ObjMap.fromObject(["﷐'effect","﷐'end","﷐'time"],{"﷐'effect":"﷐'fade","﷐'end":0.2,"﷐'time":400}));
});
/**
* Accepts an element id for a button and enables it. Fades the button
* to an opactiy of 1.
*/
one.sample.animation.enable_button = (function enable_button(id){
var button__5611 = domina.by_id.call(null,id);

goog.dom.forms.setDisabled.call(null,button__5611,false);
return one.browser.animation.play.call(null,button__5611,one.sample.animation.fade_in);
});
