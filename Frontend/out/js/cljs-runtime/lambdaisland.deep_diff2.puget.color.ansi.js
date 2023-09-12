goog.provide('lambdaisland.deep_diff2.puget.color.ansi');
/**
 * Map of symbols to numeric SGR (select graphic rendition) codes.
 */
lambdaisland.deep_diff2.puget.color.ansi.sgr_code = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"blink","blink",-271985917),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"bg-red","bg-red",-1645498040),new cljs.core.Keyword(null,"bg-cyan","bg-cyan",-1582237015),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"bg-green","bg-green",-138353590),new cljs.core.Keyword(null,"fg-reset","fg-reset",1908873578),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"bg-black","bg-black",2110303851),new cljs.core.Keyword(null,"fg-256","fg-256",-255017013),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"bg-magenta","bg-magenta",2073641232),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.Keyword(null,"bg-yellow","bg-yellow",-1293468429),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"bg-white","bg-white",-1453241673),new cljs.core.Keyword(null,"bg-256","bg-256",1097886744),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"bg-blue","bg-blue",-1747478308),new cljs.core.Keyword(null,"bg-reset","bg-reset",857739453),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"reverse","reverse",-888455266),new cljs.core.Keyword(null,"black","black",1294279647)],[(1),(5),(37),(33),(41),(46),(32),(42),(39),(36),(40),(38),(3),(45),(9),(43),(8),(31),(34),(47),(48),(35),(44),(49),(0),(7),(30)]);
/**
 * Returns an ANSI escope string which will apply the given collection of SGR
 *   codes.
 */
lambdaisland.deep_diff2.puget.color.ansi.esc = (function lambdaisland$deep_diff2$puget$color$ansi$esc(codes){
var codes__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(lambdaisland.deep_diff2.puget.color.ansi.sgr_code,codes,codes);
var codes__$2 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",codes__$1);
return ["\u001B","[",codes__$2,"m"].join('');
});
/**
 * Returns an ANSI escope string which will enact the given SGR codes.
 */
lambdaisland.deep_diff2.puget.color.ansi.escape = (function lambdaisland$deep_diff2$puget$color$ansi$escape(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38168 = arguments.length;
var i__4865__auto___38169 = (0);
while(true){
if((i__4865__auto___38169 < len__4864__auto___38168)){
args__4870__auto__.push((arguments[i__4865__auto___38169]));

var G__38170 = (i__4865__auto___38169 + (1));
i__4865__auto___38169 = G__38170;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return lambdaisland.deep_diff2.puget.color.ansi.escape.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(lambdaisland.deep_diff2.puget.color.ansi.escape.cljs$core$IFn$_invoke$arity$variadic = (function (codes){
return lambdaisland.deep_diff2.puget.color.ansi.esc(codes);
}));

(lambdaisland.deep_diff2.puget.color.ansi.escape.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lambdaisland.deep_diff2.puget.color.ansi.escape.cljs$lang$applyTo = (function (seq38158){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38158));
}));

/**
 * Wraps the given string with SGR escapes to apply the given codes, then reset
 *   the graphics.
 */
lambdaisland.deep_diff2.puget.color.ansi.sgr = (function lambdaisland$deep_diff2$puget$color$ansi$sgr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38171 = arguments.length;
var i__4865__auto___38172 = (0);
while(true){
if((i__4865__auto___38172 < len__4864__auto___38171)){
args__4870__auto__.push((arguments[i__4865__auto___38172]));

var G__38173 = (i__4865__auto___38172 + (1));
i__4865__auto___38172 = G__38173;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lambdaisland.deep_diff2.puget.color.ansi.sgr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lambdaisland.deep_diff2.puget.color.ansi.sgr.cljs$core$IFn$_invoke$arity$variadic = (function (string,codes){
return [lambdaisland.deep_diff2.puget.color.ansi.esc(codes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),lambdaisland.deep_diff2.puget.color.ansi.escape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"none","none",1333468478)], 0))].join('');
}));

(lambdaisland.deep_diff2.puget.color.ansi.sgr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.deep_diff2.puget.color.ansi.sgr.cljs$lang$applyTo = (function (seq38166){
var G__38167 = cljs.core.first(seq38166);
var seq38166__$1 = cljs.core.next(seq38166);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38167,seq38166__$1);
}));

/**
 * Removes color codes from the given string.
 */
lambdaisland.deep_diff2.puget.color.ansi.strip = (function lambdaisland$deep_diff2$puget$color$ansi$strip(string){
return clojure.string.replace(string,/\u001b\[[0-9;]*[mK]/,"");
});
lambdaisland.deep_diff2.puget.color.document.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ansi","ansi",1415977390),(function (options,element,document){
var temp__5802__auto__ = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(options),element));
if(temp__5802__auto__){
var codes = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993),lambdaisland.deep_diff2.puget.color.ansi.esc(codes)], null),document,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993),lambdaisland.deep_diff2.puget.color.ansi.escape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"none","none",1333468478)], 0))], null)], null);
} else {
return document;
}
}));
lambdaisland.deep_diff2.puget.color.text.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ansi","ansi",1415977390),(function (options,element,text){
var temp__5802__auto__ = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(options),element));
if(temp__5802__auto__){
var codes = temp__5802__auto__;
return [lambdaisland.deep_diff2.puget.color.ansi.esc(codes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),lambdaisland.deep_diff2.puget.color.ansi.escape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"none","none",1333468478)], 0))].join('');
} else {
return text;
}
}));

//# sourceMappingURL=lambdaisland.deep_diff2.puget.color.ansi.js.map
