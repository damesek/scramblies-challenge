goog.provide('lambdaisland.deep_diff2.puget.printer');
goog.scope(function(){
  lambdaisland.deep_diff2.puget.printer.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Get the type of the given object as a string. For Clojure, gets the name of
 *   the class of the object. For ClojureScript, gets either the `name` attribute
 *   or the protocol name if the `name` attribute doesn't exist.
 */
lambdaisland.deep_diff2.puget.printer.get_type_name = (function lambdaisland$deep_diff2$puget$printer$get_type_name(x){
var t = cljs.core.type(x);
var n = t.name;
if(cljs.core.empty_QMARK_(n)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0));
} else {
return n;
}
});
/**
 * Get the hashcode for a given object o
 */
lambdaisland.deep_diff2.puget.printer.get_identity_hashcode = (function lambdaisland$deep_diff2$puget$printer$get_identity_hashcode(o){
return cljs.core.hash(o);
});
/**
 * Returns a hex representation of input-string
 */
lambdaisland.deep_diff2.puget.printer.to_hex_string = (function lambdaisland$deep_diff2$puget$printer$to_hex_string(input_string){
return input_string.toString((16));
});
/**
 * Default options to use when constructing new printers.
 */
lambdaisland.deep_diff2.puget.printer._STAR_options_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"color-markup","color-markup",266742518),new cljs.core.Keyword(null,"print-color","print-color",722462614),new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092)],[" ",false,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"class-delimiter","class-delimiter",2013485793),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),new cljs.core.Keyword(null,"function-symbol","function-symbol",-1336068270),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"character","character",380652989)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyan","cyan",1118839274)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null)]),new cljs.core.Keyword(null,"pretty","pretty",-1916372486),(80),new cljs.core.Keyword(null,"ansi","ansi",1415977390),false,(80),","]);
/**
 * Merges maps of printer options, taking care to combine the color scheme
 *   correctly.
 */
lambdaisland.deep_diff2.puget.printer.merge_options = (function lambdaisland$deep_diff2$puget$printer$merge_options(a,b){
var colors = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(b)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0)),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),colors);
});
/**
 * Produces text colored according to the active color scheme. This is mostly
 *   useful to clients which want to produce output which matches data printed by
 *   Puget, but which is not directly printed by the library. Note that this
 *   function still obeys the `:print-color` option.
 */
lambdaisland.deep_diff2.puget.printer.color_text = (function lambdaisland$deep_diff2$puget$printer$color_text(var_args){
var G__38541 = arguments.length;
switch (G__38541) {
case 2:
return lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$2 = (function (element,text){
return lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$3(lambdaisland.deep_diff2.puget.printer._STAR_options_STAR_,element,text);
}));

(lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$3 = (function (options,element,text){
return lambdaisland.deep_diff2.puget.color.text.cljs$core$IFn$_invoke$arity$3(options,element,text);
}));

(lambdaisland.deep_diff2.puget.printer.color_text.cljs$lang$maxFixedArity = 3);

/**
 * Takes a sequence of entries and checks the mode to determine whether to sort
 *   them. Returns an appropriately ordered sequence.
 */
lambdaisland.deep_diff2.puget.printer.order_collection = (function lambdaisland$deep_diff2$puget$printer$order_collection(mode,coll,sort_fn){
if((((!(cljs.core.sorted_QMARK_(coll)))) && (((mode === true) || (((typeof mode === 'number') && (((cljs.core.counted_QMARK_(coll)) && ((mode >= cljs.core.count(coll))))))))))){
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(coll) : sort_fn.call(null,coll));
} else {
return cljs.core.seq(coll);
}
});
/**
 * Extract a common namespace from the keys in the map. Returns a tuple of the
 *   ns string and the stripped map, or nil if the keys are not keywords or there
 *   is no sufficiently common namespace.
 */
lambdaisland.deep_diff2.puget.printer.common_key_ns = (function lambdaisland$deep_diff2$puget$printer$common_key_ns(m){
if(cljs.core.every_QMARK_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.namespace),cljs.core.keys(m))){
var nsf = cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.keys(m)));
var vec__38545 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.val,nsf);
var common = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38545,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38545,(1),null);
if(((cljs.core.count(m) / (2)) < n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function lambdaisland$deep_diff2$puget$printer$common_key_ns_$_strip_common(p__38549){
var vec__38550 = p__38549;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38550,(1),null);
var e = vec__38550;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(common,cljs.core.namespace(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v], null);
} else {
return e;
}
})),m)], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Renders common syntax doc for an unknown representation of a value.
 */
lambdaisland.deep_diff2.puget.printer.format_unknown = (function lambdaisland$deep_diff2$puget$printer$format_unknown(var_args){
var G__38555 = arguments.length;
switch (G__38555) {
case 2:
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$2 = (function (printer,value){
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$3(printer,value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

(lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$3 = (function (printer,value,repr){
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4(printer,value,lambdaisland.deep_diff2.puget.printer.get_type_name(value),repr);
}));

(lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4 = (function (printer,value,tag,repr){
var sys_id = lambdaisland.deep_diff2.puget.printer.to_hex_string(lambdaisland.deep_diff2.puget.printer.get_identity_hashcode(value));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"class-delimiter","class-delimiter",2013485793),"#<"),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"class-name","class-name",945142584),tag),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"class-delimiter","class-delimiter",2013485793),"@"),sys_id,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(repr,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sys_id)].join('')))?(new cljs.core.List(null," ",(new cljs.core.List(null,repr,null,(1),null)),(2),null)):null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"class-delimiter","class-delimiter",2013485793),">")], null);
}));

(lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$lang$maxFixedArity = 4);

/**
 * Formats a document without considering metadata.
 */
lambdaisland.deep_diff2.puget.printer.format_doc_STAR_ = (function lambdaisland$deep_diff2$puget$printer$format_doc_STAR_(printer,value){
var lookup = new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901).cljs$core$IFn$_invoke$arity$1(printer);
var handler = (function (){var and__4251__auto__ = lookup;
if(cljs.core.truth_(and__4251__auto__)){
return (lookup.cljs$core$IFn$_invoke$arity$1 ? lookup.cljs$core$IFn$_invoke$arity$1(value) : lookup.call(null,value));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(handler)){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(printer,value) : handler.call(null,printer,value));
} else {
return fipp.visit.visit_STAR_(printer,value);
}
});
/**
 * Recursively renders a print document for the given value.
 */
lambdaisland.deep_diff2.puget.printer.format_doc = (function lambdaisland$deep_diff2$puget$printer$format_doc(printer,value){
var temp__5802__auto__ = cljs.core.meta(value);
if(cljs.core.truth_(temp__5802__auto__)){
var metadata = temp__5802__auto__;
return fipp.visit.visit_meta(printer,metadata,value);
} else {
return lambdaisland.deep_diff2.puget.printer.format_doc_STAR_(printer,value);
}
});
/**
 * Print handler which renders the value with `pr-str`.
 */
lambdaisland.deep_diff2.puget.printer.pr_handler = (function lambdaisland$deep_diff2$puget$printer$pr_handler(printer,value){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
});
/**
 * Print handler which renders the value using the printer's unknown type logic.
 */
lambdaisland.deep_diff2.puget.printer.unknown_handler = (function lambdaisland$deep_diff2$puget$printer$unknown_handler(printer,value){
return fipp.visit.visit_unknown(printer,value);
});
/**
 * Generates a print handler function which renders a tagged-literal with the
 *   given tag and a value produced by calling the function.
 */
lambdaisland.deep_diff2.puget.printer.tagged_handler = (function lambdaisland$deep_diff2$puget$printer$tagged_handler(tag,value_fn){
if((tag instanceof cljs.core.Symbol)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot create tagged handler with non-symbol tag ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"value-fn","value-fn",544624790),value_fn], null));
}

if(cljs.core.ifn_QMARK_(value_fn)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot create tagged handler for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," with non-function value transform"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"value-fn","value-fn",544624790),value_fn], null));
}

return (function lambdaisland$deep_diff2$puget$printer$tagged_handler_$_handler(printer,value){
return lambdaisland.deep_diff2.puget.printer.format_doc(printer,cljs.core.tagged_literal(tag,(value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(value) : value_fn.call(null,value))));
});
});
lambdaisland.deep_diff2.puget.printer.inst_pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS-00:00";
lambdaisland.deep_diff2.puget.printer.utc_date = (function lambdaisland$deep_diff2$puget$printer$utc_date(date){
return (new Date(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds()));
});
/**
 * Map of print handlers for Java/JavaScript types. This supports syntax for regular
 *   expressions, dates, UUIDs, and futures.
 */
lambdaisland.deep_diff2.puget.printer.platform_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.inst_QMARK_,lambdaisland.deep_diff2.puget.printer.tagged_handler(new cljs.core.Symbol(null,"inst","inst",-2008473268,null),(function (p1__38559_SHARP_){
return (new goog.i18n.DateTimeFormat(lambdaisland.deep_diff2.puget.printer.inst_pattern)).format(lambdaisland.deep_diff2.puget.printer.utc_date(p1__38559_SHARP_));
})),cljs.core.uuid_QMARK_,lambdaisland.deep_diff2.puget.printer.tagged_handler(new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.core.str),cljs.core.object_QMARK_,lambdaisland.deep_diff2.puget.printer.tagged_handler(new cljs.core.Symbol(null,"js","js",-886355190,null),(function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,lambdaisland.deep_diff2.puget.printer.goog$module$goog$object.get(x,k));
}),cljs.core.PersistentArrayMap.EMPTY,Object.keys(x));
}))]);
/**
 * Map of print handlers for 'primary' Clojure types. These should take
 *   precedence over the handlers in `clojure-interface-handlers`.
 */
lambdaisland.deep_diff2.puget.printer.clojure_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (p1__38560_SHARP_){
if((!((p1__38560_SHARP_ == null)))){
if((((p1__38560_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__38560_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}),(function lambdaisland$deep_diff2$puget$printer$atom_handler(printer,value){
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4(printer,value,"Atom",lambdaisland.deep_diff2.puget.printer.format_doc(printer,cljs.core.deref(value)));
}),(function (p1__38561_SHARP_){
if((!((p1__38561_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__38561_SHARP_.cljs$core$Delay$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}),(function lambdaisland$deep_diff2$puget$printer$delay_handler(printer,value){
var doc = ((cljs.core.realized_QMARK_(value))?lambdaisland.deep_diff2.puget.printer.format_doc(printer,cljs.core.deref(value)):lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"nil","nil",99600501),"pending"));
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4(printer,value,"Delay",doc);
}),cljs.core.seq_QMARK_,(function lambdaisland$deep_diff2$puget$printer$iseq_handler(printer,value){
return fipp.visit.visit_seq(printer,value);
})]);
/**
 * Fallback print handlers for other Clojure interfaces.
 */
lambdaisland.deep_diff2.puget.printer.clojure_interface_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (p1__38564_SHARP_){
if((!((p1__38564_SHARP_ == null)))){
if((((p1__38564_SHARP_.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === p1__38564_SHARP_.cljs$core$IPending$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}),(function lambdaisland$deep_diff2$puget$printer$pending_handler(printer,value){
var doc = ((cljs.core.realized_QMARK_(value))?lambdaisland.deep_diff2.puget.printer.format_doc(printer,cljs.core.deref(value)):lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"nil","nil",99600501),"pending"));
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$3(printer,value,doc);
}),cljs.core.fn_QMARK_,(function lambdaisland$deep_diff2$puget$printer$fn_handler(printer,value){
var doc = (function (){var vec__38567 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(lambdaisland.deep_diff2.puget.printer.get_type_name(value),"$","/"),/\$/);
var seq__38568 = cljs.core.seq(vec__38567);
var first__38569 = cljs.core.first(seq__38568);
var seq__38568__$1 = cljs.core.next(seq__38568);
var vname = first__38569;
var tail = seq__38568__$1;
if(cljs.core.seq(tail)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(vname),"[",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38565_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__38565_SHARP_,/__/));
}),tail)),"]"].join('');
} else {
return vname;
}
})();
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4(printer,value,"Fn",doc);
})]);
/**
 * Print handler dispatch combining Java and Clojure handlers with inheritance
 *   lookups. Provides a similar experience as the standard Clojure
 *   pretty-printer.
 */
lambdaisland.deep_diff2.puget.printer.common_handlers = lambdaisland.deep_diff2.puget.dispatch.chained_lookup.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.deep_diff2.puget.dispatch.predicate_lookup(lambdaisland.deep_diff2.puget.printer.platform_handlers),lambdaisland.deep_diff2.puget.dispatch.predicate_lookup(lambdaisland.deep_diff2.puget.printer.clojure_handlers),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lambdaisland.deep_diff2.puget.dispatch.predicate_lookup(lambdaisland.deep_diff2.puget.printer.clojure_interface_handlers)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fipp.visit.IVisitor}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.deep_diff2.puget.printer.CanonicalPrinter = (function (print_handlers,__meta,__extmap,__hash){
this.print_handlers = print_handlers;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k38572,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__38576 = k38572;
var G__38576__$1 = (((G__38576 instanceof cljs.core.Keyword))?G__38576.fqn:null);
switch (G__38576__$1) {
case "print-handlers":
return self__.print_handlers;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38572,else__4505__auto__);

}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__38577){
var vec__38578 = p__38577;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38578,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38578,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#lambdaisland.deep-diff2.puget.printer.CanonicalPrinter{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),self__.print_handlers],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38571){
var self__ = this;
var G__38571__$1 = this;
return (new cljs.core.RecordIter((0),G__38571__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(self__.print_handlers,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1240507582 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38573,other38574){
var self__ = this;
var this38573__$1 = this;
return (((!((other38574 == null)))) && ((((this38573__$1.constructor === other38574.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38573__$1.print_handlers,other38574.print_handlers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38573__$1.__extmap,other38574.__extmap)))))));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(self__.print_handlers,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k38572){
var self__ = this;
var this__4509__auto____$1 = this;
var G__38581 = k38572;
var G__38581__$1 = (((G__38581 instanceof cljs.core.Keyword))?G__38581.fqn:null);
switch (G__38581__$1) {
case "print-handlers":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38572);

}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__38571){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__38582 = cljs.core.keyword_identical_QMARK_;
var expr__38583 = k__4511__auto__;
if(cljs.core.truth_((pred__38582.cljs$core$IFn$_invoke$arity$2 ? pred__38582.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),expr__38583) : pred__38582.call(null,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),expr__38583)))){
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(G__38571,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(self__.print_handlers,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__38571),null));
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),self__.print_handlers,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_record$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.fipp$visit$IVisitor$visit_unknown$arity$2(null,value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_meta$arity$3 = (function (this$,metadata,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.printer.format_doc_STAR_(this$__$1,value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_number$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_pattern$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.fipp$visit$IVisitor$visit_unknown$arity$2(null,value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_unknown$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
var not_defined_representation_message = ["No defined representation for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.deep_diff2.puget.printer.get_type_name(value)),": ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(not_defined_representation_message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"causes","causes",320696351),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undefined-representation","undefined-representation",-1395497281),null], null), null)], null));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_symbol$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_seq$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),value);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",entries)], null),")"], null);
} else {
return "()";
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_boolean$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_tagged$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(value))].join('')," ",lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(value))], null);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_keyword$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_map$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38570_SHARP_){
return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,cljs.core.key(p1__38570_SHARP_))," ",lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,cljs.core.val(p1__38570_SHARP_))],null));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,arrangement.core.rank,value));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"{",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",entries)], null),"}"], null);
} else {
return "{}";
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_nil$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return "nil";
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_character$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_string$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_var$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.fipp$visit$IVisitor$visit_unknown$arity$2(null,value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_set$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),cljs.core.sort.cljs$core$IFn$_invoke$arity$2(arrangement.core.rank,value));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#{",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",entries)], null),"}"], null);
} else {
return "#{}";
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_vector$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),value);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",entries)], null),"]"], null);
} else {
return "[]";
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__38571){
var self__ = this;
var this__4501__auto____$1 = this;
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(self__.print_handlers,G__38571,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"print-handlers","print-handlers",-127526374,null)], null);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.cljs$lang$type = true);

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.puget.printer/CanonicalPrinter",null,(1),null));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"lambdaisland.deep-diff2.puget.printer/CanonicalPrinter");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.puget.printer/CanonicalPrinter.
 */
lambdaisland.deep_diff2.puget.printer.__GT_CanonicalPrinter = (function lambdaisland$deep_diff2$puget$printer$__GT_CanonicalPrinter(print_handlers){
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(print_handlers,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.puget.printer/CanonicalPrinter, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.puget.printer.map__GT_CanonicalPrinter = (function lambdaisland$deep_diff2$puget$printer$map__GT_CanonicalPrinter(G__38575){
var extmap__4542__auto__ = (function (){var G__38585 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38575,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901));
if(cljs.core.record_QMARK_(G__38575)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38585);
} else {
return G__38585;
}
})();
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901).cljs$core$IFn$_invoke$arity$1(G__38575),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * Constructs a new canonical printer with the given handler dispatch.
 */
lambdaisland.deep_diff2.puget.printer.canonical_printer = (function lambdaisland$deep_diff2$puget$printer$canonical_printer(var_args){
var G__38587 = arguments.length;
switch (G__38587) {
case 0:
return lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$0 = (function (){
return lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$1(null);
}));

(lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$1 = (function (handlers){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(handlers,null,null,null)),new cljs.core.Keyword(null,"width","width",-384071477),(0));
}));

(lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$lang$maxFixedArity = 1);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fipp.visit.IVisitor}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.deep_diff2.puget.printer.PrettyPrinter = (function (width,print_meta,sort_keys,map_delimiter,map_coll_separator,namespace_maps,seq_limit,print_color,color_markup,color_scheme,print_handlers,print_fallback,__meta,__extmap,__hash){
this.width = width;
this.print_meta = print_meta;
this.sort_keys = sort_keys;
this.map_delimiter = map_delimiter;
this.map_coll_separator = map_coll_separator;
this.namespace_maps = namespace_maps;
this.seq_limit = seq_limit;
this.print_color = print_color;
this.color_markup = color_markup;
this.color_scheme = color_scheme;
this.print_handlers = print_handlers;
this.print_fallback = print_fallback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k38589,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__38593 = k38589;
var G__38593__$1 = (((G__38593 instanceof cljs.core.Keyword))?G__38593.fqn:null);
switch (G__38593__$1) {
case "width":
return self__.width;

break;
case "print-meta":
return self__.print_meta;

break;
case "sort-keys":
return self__.sort_keys;

break;
case "map-delimiter":
return self__.map_delimiter;

break;
case "map-coll-separator":
return self__.map_coll_separator;

break;
case "namespace-maps":
return self__.namespace_maps;

break;
case "seq-limit":
return self__.seq_limit;

break;
case "print-color":
return self__.print_color;

break;
case "color-markup":
return self__.color_markup;

break;
case "color-scheme":
return self__.color_scheme;

break;
case "print-handlers":
return self__.print_handlers;

break;
case "print-fallback":
return self__.print_fallback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38589,else__4505__auto__);

}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__38594){
var vec__38595 = p__38594;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38595,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38595,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#lambdaisland.deep-diff2.puget.printer.PrettyPrinter{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),self__.sort_keys],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),self__.map_delimiter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),self__.map_coll_separator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),self__.namespace_maps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),self__.seq_limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-color","print-color",722462614),self__.print_color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color-markup","color-markup",266742518),self__.color_markup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),self__.color_scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),self__.print_handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),self__.print_fallback],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38588){
var self__ = this;
var G__38588__$1 = this;
return (new cljs.core.RecordIter((0),G__38588__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),new cljs.core.Keyword(null,"print-color","print-color",722462614),new cljs.core.Keyword(null,"color-markup","color-markup",266742518),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-310152131 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38590,other38591){
var self__ = this;
var this38590__$1 = this;
return (((!((other38591 == null)))) && ((((this38590__$1.constructor === other38591.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.width,other38591.width)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.print_meta,other38591.print_meta)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.sort_keys,other38591.sort_keys)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.map_delimiter,other38591.map_delimiter)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.map_coll_separator,other38591.map_coll_separator)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.namespace_maps,other38591.namespace_maps)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.seq_limit,other38591.seq_limit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.print_color,other38591.print_color)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.color_markup,other38591.color_markup)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.color_scheme,other38591.color_scheme)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.print_handlers,other38591.print_handlers)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.print_fallback,other38591.print_fallback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38590__$1.__extmap,other38591.__extmap)))))))))))))))))))))))))))));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),null,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),null,new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),null,new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),null,new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),null,new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),null,new cljs.core.Keyword(null,"color-markup","color-markup",266742518),null,new cljs.core.Keyword(null,"print-color","print-color",722462614),null,new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),null,new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k38589){
var self__ = this;
var this__4509__auto____$1 = this;
var G__38598 = k38589;
var G__38598__$1 = (((G__38598 instanceof cljs.core.Keyword))?G__38598.fqn:null);
switch (G__38598__$1) {
case "width":
case "print-meta":
case "sort-keys":
case "map-delimiter":
case "map-coll-separator":
case "namespace-maps":
case "seq-limit":
case "print-color":
case "color-markup":
case "color-scheme":
case "print-handlers":
case "print-fallback":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38589);

}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__38588){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__38599 = cljs.core.keyword_identical_QMARK_;
var expr__38600 = k__4511__auto__;
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(G__38588,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,G__38588,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,G__38588,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,G__38588,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,G__38588,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,G__38588,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,G__38588,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-color","print-color",722462614),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"print-color","print-color",722462614),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,G__38588,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-markup","color-markup",266742518),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"color-markup","color-markup",266742518),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,G__38588,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,G__38588,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,G__38588,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38599.cljs$core$IFn$_invoke$arity$2 ? pred__38599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),expr__38600) : pred__38599.call(null,new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),expr__38600)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,G__38588,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__38588),null));
}
}
}
}
}
}
}
}
}
}
}
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),self__.sort_keys,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),self__.map_delimiter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),self__.map_coll_separator,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),self__.namespace_maps,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),self__.seq_limit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-color","print-color",722462614),self__.print_color,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color-markup","color-markup",266742518),self__.color_markup,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),self__.color_scheme,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),self__.print_handlers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),self__.print_fallback,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_record$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.fipp$visit$IVisitor$visit_tagged$arity$2(null,cljs.core.tagged_literal(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lambdaisland.deep_diff2.puget.printer.get_type_name(value)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,value)));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_meta$arity$3 = (function (this$,metadata,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.print_meta)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"^"),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,metadata)], null),new cljs.core.Keyword(null,"line","line",212345235),lambdaisland.deep_diff2.puget.printer.format_doc_STAR_(this$__$1,value)], null);
} else {
return lambdaisland.deep_diff2.puget.printer.format_doc_STAR_(this$__$1,value);
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_number$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_pattern$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"#"),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"string","string",-1989541586),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\""].join(''))], null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_unknown$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
var G__38602 = self__.print_fallback;
var G__38602__$1 = (((G__38602 instanceof cljs.core.Keyword))?G__38602.fqn:null);
switch (G__38602__$1) {
case "pretty":
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$2(this$__$1,value);

break;
case "print":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))], null);

break;
case "error":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No defined representation for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.deep_diff2.puget.printer.get_type_name(value)),": ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"causes","causes",320696351),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undefined-representation","undefined-representation",-1395497281),null], null), null)], null));

break;
default:
if(cljs.core.ifn_QMARK_(self__.print_fallback)){
return (self__.print_fallback.cljs$core$IFn$_invoke$arity$2 ? self__.print_fallback.cljs$core$IFn$_invoke$arity$2(this$__$1,value) : self__.print_fallback.call(null,this$__$1,value));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unsupported value for print-fallback: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.print_fallback], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"causes","causes",320696351),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsupported-value","unsupported-value",394963777),null], null), null)], null));
}

}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_symbol$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_seq$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var vec__38603 = (cljs.core.truth_((function (){var and__4251__auto__ = self__.seq_limit;
if(cljs.core.truth_(and__4251__auto__)){
return (self__.seq_limit > (0));
} else {
return and__4251__auto__;
}
})())?(function (){var head = cljs.core.take.cljs$core$IFn$_invoke$arity$2(self__.seq_limit,value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,(self__.seq_limit <= cljs.core.count(head))], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(value),false], null));
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38603,(0),null);
var trimmed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38603,(1),null);
var elements = (function (){var G__38606 = (((cljs.core.first(values) instanceof cljs.core.Symbol))?cljs.core.cons(lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"function-symbol","function-symbol",-1336068270),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(values))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),cljs.core.rest(values))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),values));
if(cljs.core.truth_(trimmed_QMARK_)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__38606,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"nil","nil",99600501),"...")], null));
} else {
return G__38606;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"("),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),elements)], null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),")")], null);
} else {
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"()");
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_boolean$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_tagged$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
var map__38607 = value;
var map__38607__$1 = cljs.core.__destructure_map(map__38607);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38607__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38607__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(value))].join('')),((cljs.core.coll_QMARK_(form))?new cljs.core.Keyword(null,"line","line",212345235):" "),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(value))], null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_keyword$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"keyword","keyword",811389747),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_map$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var vec__38608 = (cljs.core.truth_(self__.namespace_maps)?lambdaisland.deep_diff2.puget.printer.common_key_ns(value):null);
var common_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38608,(0),null);
var stripped = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38608,(1),null);
var kvs = lambdaisland.deep_diff2.puget.printer.order_collection(self__.sort_keys,(function (){var or__4253__auto__ = stripped;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return value;
}
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.sort_by,cljs.core.first,arrangement.core.rank));
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38611){
var vec__38612 = p__38611;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38612,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,k),((cljs.core.coll_QMARK_(v))?self__.map_coll_separator:" "),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,v)], null);
}),kvs);
var map_doc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"{"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),self__.map_delimiter,new cljs.core.Keyword(null,"line","line",212345235)], null),entries)], null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"}")], null);
if(cljs.core.truth_(common_ns)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(common_ns)].join('')),new cljs.core.Keyword(null,"line","line",212345235),map_doc], null);
} else {
return map_doc;
}
} else {
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"{}");
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_nil$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"nil","nil",99600501),"nil");
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_character$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"character","character",380652989),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_string$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_var$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"#'"),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),(2)))], null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_set$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = lambdaisland.deep_diff2.puget.printer.order_collection(self__.sort_keys,value,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.sort,arrangement.core.rank));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"#{"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),entries))], null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"}")], null);
} else {
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"#{}");
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_vector$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"["),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),value))], null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"]")], null);
} else {
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"[]");
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__38588){
var self__ = this;
var this__4501__auto____$1 = this;
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,G__38588,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"print-meta","print-meta",-1620321171,null),new cljs.core.Symbol(null,"sort-keys","sort-keys",-1342923776,null),new cljs.core.Symbol(null,"map-delimiter","map-delimiter",968790435,null),new cljs.core.Symbol(null,"map-coll-separator","map-coll-separator",-2044774454,null),new cljs.core.Symbol(null,"namespace-maps","namespace-maps",-396495601,null),new cljs.core.Symbol(null,"seq-limit","seq-limit",474615035,null),new cljs.core.Symbol(null,"print-color","print-color",-1931973155,null),new cljs.core.Symbol(null,"color-markup","color-markup",1907274045,null),new cljs.core.Symbol(null,"color-scheme","color-scheme",736689232,null),new cljs.core.Symbol(null,"print-handlers","print-handlers",-127526374,null),new cljs.core.Symbol(null,"print-fallback","print-fallback",411319633,null)], null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.cljs$lang$type = true);

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.puget.printer/PrettyPrinter",null,(1),null));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"lambdaisland.deep-diff2.puget.printer/PrettyPrinter");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.puget.printer/PrettyPrinter.
 */
lambdaisland.deep_diff2.puget.printer.__GT_PrettyPrinter = (function lambdaisland$deep_diff2$puget$printer$__GT_PrettyPrinter(width,print_meta,sort_keys,map_delimiter,map_coll_separator,namespace_maps,seq_limit,print_color,color_markup,color_scheme,print_handlers,print_fallback){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(width,print_meta,sort_keys,map_delimiter,map_coll_separator,namespace_maps,seq_limit,print_color,color_markup,color_scheme,print_handlers,print_fallback,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.puget.printer/PrettyPrinter, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.puget.printer.map__GT_PrettyPrinter = (function lambdaisland$deep_diff2$puget$printer$map__GT_PrettyPrinter(G__38592){
var extmap__4542__auto__ = (function (){var G__38615 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38592,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),new cljs.core.Keyword(null,"print-color","print-color",722462614),new cljs.core.Keyword(null,"color-markup","color-markup",266742518),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894)], 0));
if(cljs.core.record_QMARK_(G__38592)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38615);
} else {
return G__38615;
}
})();
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"print-color","print-color",722462614).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"color-markup","color-markup",266742518).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901).cljs$core$IFn$_invoke$arity$1(G__38592),new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894).cljs$core$IFn$_invoke$arity$1(G__38592),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * Constructs a new printer from the given configuration.
 */
lambdaisland.deep_diff2.puget.printer.pretty_printer = (function lambdaisland$deep_diff2$puget$printer$pretty_printer(opts){
return lambdaisland.deep_diff2.puget.printer.map__GT_PrettyPrinter(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.merge_options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),lambdaisland.deep_diff2.puget.printer.common_handlers], null),lambdaisland.deep_diff2.puget.printer._STAR_options_STAR_,opts], null)));
});
/**
 * Prints a value using the given printer.
 */
lambdaisland.deep_diff2.puget.printer.render_out = (function lambdaisland$deep_diff2$puget$printer$render_out(var_args){
var G__38617 = arguments.length;
switch (G__38617) {
case 2:
return lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$2 = (function (printer,value){
return lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$3(printer,value,null);
}));

(lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$3 = (function (printer,value,opts){
var _STAR_print_meta_STAR__orig_val__38618 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__38619 = false;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__38619);

try{return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc(printer,value),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(printer)], null),opts], 0)));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__38618);
}}));

(lambdaisland.deep_diff2.puget.printer.render_out.cljs$lang$maxFixedArity = 3);

/**
 * Renders a value to a string using the given printer.
 */
lambdaisland.deep_diff2.puget.printer.render_str = (function lambdaisland$deep_diff2$puget$printer$render_str(printer,value){
return clojure.string.trim_newline((function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38620_38689 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38621_38690 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38622_38691 = true;
var _STAR_print_fn_STAR__temp_val__38623_38692 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38622_38691);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38623_38692);

try{lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$2(printer,value);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38621_38690);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38620_38689);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
});
/**
 * Pretty-prints a value to *out*. Options may be passed to override the
 *   default *options* map.
 */
lambdaisland.deep_diff2.puget.printer.pprint = (function lambdaisland$deep_diff2$puget$printer$pprint(var_args){
var G__38625 = arguments.length;
switch (G__38625) {
case 1:
return lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$3(lambdaisland.deep_diff2.puget.printer.pretty_printer(opts),value,opts);
}));

(lambdaisland.deep_diff2.puget.printer.pprint.cljs$lang$maxFixedArity = 2);

/**
 * Pretty-print a value to a string.
 */
lambdaisland.deep_diff2.puget.printer.pprint_str = (function lambdaisland$deep_diff2$puget$printer$pprint_str(var_args){
var G__38627 = arguments.length;
switch (G__38627) {
case 1:
return lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return lambdaisland.deep_diff2.puget.printer.render_str(lambdaisland.deep_diff2.puget.printer.pretty_printer(opts),value);
}));

(lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$lang$maxFixedArity = 2);

/**
 * Like pprint, but turns on colored output.
 */
lambdaisland.deep_diff2.puget.printer.cprint = (function lambdaisland$deep_diff2$puget$printer$cprint(var_args){
var G__38629 = arguments.length;
switch (G__38629) {
case 1:
return lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$2(value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"print-color","print-color",722462614),true));
}));

(lambdaisland.deep_diff2.puget.printer.cprint.cljs$lang$maxFixedArity = 2);

/**
 * Pretty-prints a value to a colored string.
 */
lambdaisland.deep_diff2.puget.printer.cprint_str = (function lambdaisland$deep_diff2$puget$printer$cprint_str(var_args){
var G__38631 = arguments.length;
switch (G__38631) {
case 1:
return lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$2(value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"print-color","print-color",722462614),true));
}));

(lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=lambdaisland.deep_diff2.puget.printer.js.map
