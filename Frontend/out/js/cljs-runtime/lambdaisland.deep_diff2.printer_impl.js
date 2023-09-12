goog.provide('lambdaisland.deep_diff2.printer_impl');
lambdaisland.deep_diff2.printer_impl.print_deletion = (function lambdaisland$deep_diff2$printer_impl$print_deletion(printer,expr){
var no_color = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"print-color","print-color",722462614),false);
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword("lambdaisland.deep-diff2.printer-impl","deletion","lambdaisland.deep-diff2.printer-impl/deletion",-1706264305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"-",lambdaisland.deep_diff2.puget.printer.format_doc(no_color,new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(expr))], null));
});
lambdaisland.deep_diff2.printer_impl.print_insertion = (function lambdaisland$deep_diff2$printer_impl$print_insertion(printer,expr){
var no_color = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"print-color","print-color",722462614),false);
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword("lambdaisland.deep-diff2.printer-impl","insertion","lambdaisland.deep-diff2.printer-impl/insertion",375791349),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+",lambdaisland.deep_diff2.puget.printer.format_doc(no_color,new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(expr))], null));
});
lambdaisland.deep_diff2.printer_impl.print_mismatch = (function lambdaisland$deep_diff2$printer_impl$print_mismatch(printer,expr){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),lambdaisland.deep_diff2.printer_impl.print_deletion(printer,expr),new cljs.core.Keyword(null,"line","line",212345235),lambdaisland.deep_diff2.printer_impl.print_insertion(printer,expr)], null)], null);
});
lambdaisland.deep_diff2.printer_impl.print_other = (function lambdaisland$deep_diff2$printer_impl$print_other(printer,expr){
var no_color = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"print-color","print-color",722462614),false);
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword("lambdaisland.deep-diff2.printer-impl","other","lambdaisland.deep-diff2.printer-impl/other",-1211495135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"-",lambdaisland.deep_diff2.puget.printer.format_doc(no_color,expr)], null));
});
lambdaisland.deep_diff2.printer_impl.map_handler = (function lambdaisland$deep_diff2$printer_impl$map_handler(this$,value){
var ks = (function (){var G__38635 = new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993).cljs$core$IFn$_invoke$arity$1(this$);
var G__38636 = value;
var G__38637 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.sort_by,cljs.core.first,arrangement.core.rank);
var fexpr__38634 = new cljs.core.Var(function(){return lambdaisland.deep_diff2.puget.printer.order_collection;},new cljs.core.Symbol("lambdaisland.deep-diff2.puget.printer","order-collection","lambdaisland.deep-diff2.puget.printer/order-collection",-1316125123,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"lambdaisland.deep-diff2.puget.printer","lambdaisland.deep-diff2.puget.printer",-297228284,null),new cljs.core.Symbol(null,"order-collection","order-collection",-1309293496,null),"lambdaisland/deep_diff2/puget/printer.cljc",24,1,186,186,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mode","mode",-2000032078,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"sort-fn","sort-fn",-1676620758,null)], null)),"Takes a sequence of entries and checks the mode to determine whether to sort\n  them. Returns an appropriately ordered sequence.",(cljs.core.truth_(lambdaisland.deep_diff2.puget.printer.order_collection)?lambdaisland.deep_diff2.puget.printer.order_collection.cljs$lang$test:null)]));
return (fexpr__38634.cljs$core$IFn$_invoke$arity$3 ? fexpr__38634.cljs$core$IFn$_invoke$arity$3(G__38635,G__38636,G__38637) : fexpr__38634.call(null,G__38635,G__38636,G__38637));
})();
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$),ks);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"{"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"line","line",212345235)], null),entries)], null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"}")], null);
});
lambdaisland.deep_diff2.printer_impl.map_entry_handler = (function lambdaisland$deep_diff2$printer_impl$map_entry_handler(printer,value){
var k = cljs.core.key(value);
var v = cljs.core.val(value);
var no_color = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"print-color","print-color",722462614),false);
if((k instanceof lambdaisland.deep_diff2.diff_impl.Insertion)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.printer_impl.print_insertion(printer,k),((cljs.core.coll_QMARK_(v))?new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315).cljs$core$IFn$_invoke$arity$1(printer):" "),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword("lambdaisland.deep-diff2.printer-impl","insertion","lambdaisland.deep-diff2.printer-impl/insertion",375791349),lambdaisland.deep_diff2.puget.printer.format_doc(no_color,v))], null);
} else {
if((k instanceof lambdaisland.deep_diff2.diff_impl.Deletion)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.printer_impl.print_deletion(printer,k),((cljs.core.coll_QMARK_(v))?new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315).cljs$core$IFn$_invoke$arity$1(printer):" "),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword("lambdaisland.deep-diff2.printer-impl","deletion","lambdaisland.deep-diff2.printer-impl/deletion",-1706264305),lambdaisland.deep_diff2.puget.printer.format_doc(no_color,v))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.printer.format_doc(printer,k),((cljs.core.coll_QMARK_(v))?new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315).cljs$core$IFn$_invoke$arity$1(printer):" "),lambdaisland.deep_diff2.puget.printer.format_doc(printer,v)], null);

}
}
});
lambdaisland.deep_diff2.printer_impl.print_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("lambdaisland.deep-diff2.diff-impl","Deletion","lambdaisland.deep-diff2.diff-impl/Deletion",1353359218,null),lambdaisland.deep_diff2.printer_impl.print_deletion,new cljs.core.Symbol("lambdaisland.deep-diff2.diff-impl","Insertion","lambdaisland.deep-diff2.diff-impl/Insertion",-347325639,null),lambdaisland.deep_diff2.printer_impl.print_insertion,new cljs.core.Symbol("lambdaisland.deep-diff2.diff-impl","Mismatch","lambdaisland.deep-diff2.diff-impl/Mismatch",-795858170,null),lambdaisland.deep_diff2.printer_impl.print_mismatch,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null),lambdaisland.deep_diff2.printer_impl.map_handler,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),lambdaisland.deep_diff2.printer_impl.map_handler,new cljs.core.Symbol("cljs.core","MapEntry","cljs.core/MapEntry",-858280599,null),lambdaisland.deep_diff2.printer_impl.map_entry_handler], null));
/**
 * Get the type of the given object as a string. For Clojure, gets the name of
 *   the class of the object. For ClojureScript, gets either the `name` attribute
 *   or the protocol name if the `name` attribute doesn't exist.
 */
lambdaisland.deep_diff2.printer_impl.type_name = (function lambdaisland$deep_diff2$printer_impl$type_name(x){
var t = cljs.core.type(x);
var n = t.name;
if(cljs.core.empty_QMARK_(n)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0)));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);
}
});
lambdaisland.deep_diff2.printer_impl.print_handler_resolver = (function lambdaisland$deep_diff2$printer_impl$print_handler_resolver(extra_handlers){
return (function (obj){
var and__4251__auto__ = obj;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(lambdaisland.deep_diff2.printer_impl.print_handlers),extra_handlers], 0)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lambdaisland.deep_diff2.printer_impl.type_name(obj)));
} else {
return and__4251__auto__;
}
});
});
/**
 * Register an extra print handler.
 * 
 *   `type` must be a symbol of the fully qualified class name. `handler` is a
 *   Puget handler function of two arguments, `printer` and `value`.
 */
lambdaisland.deep_diff2.printer_impl.register_print_handler_BANG_ = (function lambdaisland$deep_diff2$printer_impl$register_print_handler_BANG_(type,handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lambdaisland.deep_diff2.printer_impl.print_handlers,cljs.core.assoc,type,handler);
});
lambdaisland.deep_diff2.printer_impl.puget_printer = (function lambdaisland$deep_diff2$printer_impl$puget_printer(var_args){
var G__38640 = arguments.length;
switch (G__38640) {
case 0:
return lambdaisland.deep_diff2.printer_impl.puget_printer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lambdaisland.deep_diff2.printer_impl.puget_printer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.printer_impl.puget_printer.cljs$core$IFn$_invoke$arity$0 = (function (){
return lambdaisland.deep_diff2.printer_impl.puget_printer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(lambdaisland.deep_diff2.printer_impl.puget_printer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var extra_handlers = new cljs.core.Keyword(null,"extra-handlers","extra-handlers",1279781850).cljs$core$IFn$_invoke$arity$1(opts);
return lambdaisland.deep_diff2.puget.printer.pretty_printer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4253__auto__ = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (100);
}
})(),new cljs.core.Keyword(null,"print-color","print-color",722462614),true,new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("lambdaisland.deep-diff2.printer-impl","deletion","lambdaisland.deep-diff2.printer-impl/deletion",-1706264305),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.Keyword("lambdaisland.deep-diff2.printer-impl","insertion","lambdaisland.deep-diff2.printer-impl/insertion",375791349),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.Keyword("lambdaisland.deep-diff2.printer-impl","other","lambdaisland.deep-diff2.printer-impl/other",-1211495135),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"cyan","cyan",1118839274)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null)], null),new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),lambdaisland.deep_diff2.puget.dispatch.chained_lookup(lambdaisland.deep_diff2.printer_impl.print_handler_resolver(extra_handlers),lambdaisland.deep_diff2.puget.printer.common_handlers)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"extra-handlers","extra-handlers",1279781850))], 0)));
}));

(lambdaisland.deep_diff2.printer_impl.puget_printer.cljs$lang$maxFixedArity = 1);

lambdaisland.deep_diff2.printer_impl.format_doc = (function lambdaisland$deep_diff2$printer_impl$format_doc(expr,printer){
return lambdaisland.deep_diff2.puget.printer.format_doc(printer,expr);
});
lambdaisland.deep_diff2.printer_impl.print_doc = (function lambdaisland$deep_diff2$printer_impl$print_doc(doc,printer){
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(printer)], null));
});

//# sourceMappingURL=lambdaisland.deep_diff2.printer_impl.js.map
