goog.provide('lambdaisland.deep_diff2.puget.color.html');
/**
 * Map from keywords usable in a color-scheme value to vectors
 *   representing css style attributes
 */
lambdaisland.deep_diff2.puget.color.html.style_attribute = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"blink","blink",-271985917),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"bg-red","bg-red",-1645498040),new cljs.core.Keyword(null,"bg-cyan","bg-cyan",-1582237015),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"bg-green","bg-green",-138353590),new cljs.core.Keyword(null,"fg-reset","fg-reset",1908873578),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"bg-black","bg-black",2110303851),new cljs.core.Keyword(null,"fg-256","fg-256",-255017013),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"bg-magenta","bg-magenta",2073641232),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.Keyword(null,"bg-yellow","bg-yellow",-1293468429),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"bg-white","bg-white",-1453241673),new cljs.core.Keyword(null,"bg-256","bg-256",1097886744),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"bg-blue","bg-blue",-1747478308),new cljs.core.Keyword(null,"bg-reset","bg-reset",857739453),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"reverse","reverse",-888455266),new cljs.core.Keyword(null,"black","black",1294279647)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"blink"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"cyan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"green"], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),"cyan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"magenta"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"yellow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),"magenta"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue"], null),null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)]);
/**
 * Returns a formatted style attribute for a span given a seq of
 *   keywords usable in a :color-scheme value
 */
lambdaisland.deep_diff2.puget.color.html.style = (function lambdaisland$deep_diff2$puget$color$html$style(codes){
var attributes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38195_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(lambdaisland.deep_diff2.puget.color.html.style_attribute,p1__38195_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.name(p1__38195_SHARP_)], null));
}),codes);
return ["style=\"",clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38203){
var vec__38204 = p__38203;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(1),null);
return [cljs.core.name(k),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),attributes)),"\""].join('');
});
/**
 * Escapes special characters into HTML entities.
 */
lambdaisland.deep_diff2.puget.color.html.escape_html_text = (function lambdaisland$deep_diff2$puget$color$html$escape_html_text(text){
return clojure.string.escape(text,new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null));
});
/**
 * Applies HTML escaping to the node if it is a string. Returns a print
 *   document representing the escaped string, or the original node if not.
 */
lambdaisland.deep_diff2.puget.color.html.escape_html_node = (function lambdaisland$deep_diff2$puget$color$html$escape_html_node(node){
if(typeof node === 'string'){
var escaped_text = lambdaisland.deep_diff2.puget.color.html.escape_html_text(node);
var spans = clojure.string.split.cljs$core$IFn$_invoke$arity$2(escaped_text,/(?=&)/);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,span){
var G__38210 = cljs.core.first(span);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38210)){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",G__38210)){
var semicolon_pos = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(span,";"));
var escaped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(span,(0),semicolon_pos);
var span__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(span,semicolon_pos);
var acc__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"escaped","escaped",-1007929769),escaped], null));
if(cljs.core.seq(span__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$1,span__$1);
} else {
return acc__$1;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,span);

}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),spans);
} else {
return node;
}
});
/**
 * Escapes special characters into fipp :span/:escaped nodes
 */
lambdaisland.deep_diff2.puget.color.html.escape_html_document = (function lambdaisland$deep_diff2$puget$color$html$escape_html_document(document){
return clojure.walk.postwalk(lambdaisland.deep_diff2.puget.color.html.escape_html_node,document);
});
lambdaisland.deep_diff2.puget.color.document.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"html-inline","html-inline",1677224886),(function (options,element,document){
var temp__5802__auto__ = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(options),element));
if(temp__5802__auto__){
var codes = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993),"<span ",lambdaisland.deep_diff2.puget.color.html.style(codes),">"], null),lambdaisland.deep_diff2.puget.color.html.escape_html_document(document),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993),"</span>"], null)], null);
} else {
return lambdaisland.deep_diff2.puget.color.html.escape_html_document(document);
}
}));
lambdaisland.deep_diff2.puget.color.text.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"html-inline","html-inline",1677224886),(function (options,element,text){
var temp__5802__auto__ = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(options),element));
if(temp__5802__auto__){
var codes = temp__5802__auto__;
return ["<span ",lambdaisland.deep_diff2.puget.color.html.style(codes),">",lambdaisland.deep_diff2.puget.color.html.escape_html_text(text),"</span>"].join('');
} else {
return lambdaisland.deep_diff2.puget.color.html.escape_html_text(text);
}
}));
lambdaisland.deep_diff2.puget.color.document.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"html-classes","html-classes",988605214),(function (options,element,document){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993),"<span class=\"",cljs.core.name(element),"\">"], null),lambdaisland.deep_diff2.puget.color.html.escape_html_document(document),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993),"</span>"], null)], null);
}));
lambdaisland.deep_diff2.puget.color.text.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"html-classes","html-classes",988605214),(function (options,element,text){
return ["<span class=\"",cljs.core.name(element),"\">",lambdaisland.deep_diff2.puget.color.html.escape_html_text(text),"</span>"].join('');
}));

//# sourceMappingURL=lambdaisland.deep_diff2.puget.color.html.js.map
