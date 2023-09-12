goog.provide('lambdaisland.deep_diff2.puget.color');
/**
 * Dispatches to coloring multimethods. Element should be a key from
 *   the color-scheme map.
 */
lambdaisland.deep_diff2.puget.color.dispatch = (function lambdaisland$deep_diff2$puget$color$dispatch(options,element,text){
if(cljs.core.truth_(new cljs.core.Keyword(null,"print-color","print-color",722462614).cljs$core$IFn$_invoke$arity$1(options))){
return new cljs.core.Keyword(null,"color-markup","color-markup",266742518).cljs$core$IFn$_invoke$arity$1(options);
} else {
return null;
}
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.deep_diff2 !== 'undefined') && (typeof lambdaisland.deep_diff2.puget !== 'undefined') && (typeof lambdaisland.deep_diff2.puget.color !== 'undefined') && (typeof lambdaisland.deep_diff2.puget.color.document !== 'undefined')){
} else {
/**
 * Constructs a pretty print document, which may be colored if
 *   `:print-color` is true.
 */
lambdaisland.deep_diff2.puget.color.document = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37685 = cljs.core.get_global_hierarchy;
return (fexpr__37685.cljs$core$IFn$_invoke$arity$0 ? fexpr__37685.cljs$core$IFn$_invoke$arity$0() : fexpr__37685.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.deep-diff2.puget.color","document"),new cljs.core.Var(function(){return lambdaisland.deep_diff2.puget.color.dispatch;},new cljs.core.Symbol("lambdaisland.deep-diff2.puget.color","dispatch","lambdaisland.deep-diff2.puget.color/dispatch",-1885039710,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"lambdaisland.deep-diff2.puget.color","lambdaisland.deep-diff2.puget.color",650349091,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Coloring multimethods to format text by adding markup.\n\n  #### Color Options\n\n  `:print-color`\n\n  When true, ouptut colored text from print functions.\n\n  `:color-markup`\n\n  - `:ansi` for color terminal text (default)\n  - `:html-inline` for inline-styled html\n  - `:html-classes` for html with semantic classes\n\n  `:color-scheme`\n\n  Map of syntax element keywords to color codes.\n  "], null)),new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),"lambdaisland/deep_diff2/puget/color.cljc",15,1,22,22,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"text","text",-150030170,null)], null)),"Dispatches to coloring multimethods. Element should be a key from\n  the color-scheme map.",(cljs.core.truth_(lambdaisland.deep_diff2.puget.color.dispatch)?lambdaisland.deep_diff2.puget.color.dispatch.cljs$lang$test:null)])),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.deep_diff2 !== 'undefined') && (typeof lambdaisland.deep_diff2.puget !== 'undefined') && (typeof lambdaisland.deep_diff2.puget.color !== 'undefined') && (typeof lambdaisland.deep_diff2.puget.color.text !== 'undefined')){
} else {
/**
 * Produces text colored according to the active color scheme. This is mostly
 *   useful to clients which want to produce output which matches data printed by
 *   Puget, but which is not directly printed by the library. Note that this
 *   function still obeys the `:print-color` option.
 */
lambdaisland.deep_diff2.puget.color.text = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37690 = cljs.core.get_global_hierarchy;
return (fexpr__37690.cljs$core$IFn$_invoke$arity$0 ? fexpr__37690.cljs$core$IFn$_invoke$arity$0() : fexpr__37690.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.deep-diff2.puget.color","text"),new cljs.core.Var(function(){return lambdaisland.deep_diff2.puget.color.dispatch;},new cljs.core.Symbol("lambdaisland.deep-diff2.puget.color","dispatch","lambdaisland.deep-diff2.puget.color/dispatch",-1885039710,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"lambdaisland.deep-diff2.puget.color","lambdaisland.deep-diff2.puget.color",650349091,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Coloring multimethods to format text by adding markup.\n\n  #### Color Options\n\n  `:print-color`\n\n  When true, ouptut colored text from print functions.\n\n  `:color-markup`\n\n  - `:ansi` for color terminal text (default)\n  - `:html-inline` for inline-styled html\n  - `:html-classes` for html with semantic classes\n\n  `:color-scheme`\n\n  Map of syntax element keywords to color codes.\n  "], null)),new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),"lambdaisland/deep_diff2/puget/color.cljc",15,1,22,22,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"text","text",-150030170,null)], null)),"Dispatches to coloring multimethods. Element should be a key from\n  the color-scheme map.",(cljs.core.truth_(lambdaisland.deep_diff2.puget.color.dispatch)?lambdaisland.deep_diff2.puget.color.dispatch.cljs$lang$test:null)])),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
lambdaisland.deep_diff2.puget.color.document.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (options,element,text){
return text;
}));
lambdaisland.deep_diff2.puget.color.text.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (options,element,text){
return text;
}));

//# sourceMappingURL=lambdaisland.deep_diff2.puget.color.js.map
