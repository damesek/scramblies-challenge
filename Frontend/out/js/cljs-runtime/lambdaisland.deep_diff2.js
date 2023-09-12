goog.provide('lambdaisland.deep_diff2');
/**
 * Compare two values recursively.
 * 
 *   The result is a data structure similar to the ones passed in, but with
 *   Insertion, Deletion, and Mismatch objects to mark differences.
 * 
 *   When two collections are considered to be in the same type class then their
 *   contents are compared.
 * 
 *   Vectors, sequences, arrays and Java lists are all considered a single type
 *   class, as are Clojure and Java maps.
 * 
 *   Insertions/Deletions in maps are marked by wrapping the key, even though the
 *   change applies to the whole map entry.
 */
lambdaisland.deep_diff2.diff = (function lambdaisland$deep_diff2$diff(expected,actual){
return lambdaisland.deep_diff2.diff_impl.diff(expected,actual);
});
/**
 * Construct a Puget printer instance suitable for printing diffs.
 * 
 *   Extra options are passed on to Puget. Extra type handlers can be provides as
 *   `:extra-handlers` (a map from symbol to function), or by
 *   using [[lambdaisland.deep-diff.printer/register-print-handler!]]
 */
lambdaisland.deep_diff2.printer = (function lambdaisland$deep_diff2$printer(var_args){
var G__38646 = arguments.length;
switch (G__38646) {
case 0:
return lambdaisland.deep_diff2.printer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lambdaisland.deep_diff2.printer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.printer.cljs$core$IFn$_invoke$arity$0 = (function (){
return lambdaisland.deep_diff2.printer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(lambdaisland.deep_diff2.printer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return lambdaisland.deep_diff2.printer_impl.puget_printer.cljs$core$IFn$_invoke$arity$1(opts);
}));

(lambdaisland.deep_diff2.printer.cljs$lang$maxFixedArity = 1);

/**
 * Pretty print a diff.
 * 
 *   Pretty print a diffed data structure, as obtained from [[diff]]. Optionally
 *   takes a Puget printer instance, see [[printer]].
 */
lambdaisland.deep_diff2.pretty_print = (function lambdaisland$deep_diff2$pretty_print(var_args){
var G__38648 = arguments.length;
switch (G__38648) {
case 1:
return lambdaisland.deep_diff2.pretty_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.deep_diff2.pretty_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.pretty_print.cljs$core$IFn$_invoke$arity$1 = (function (diff){
return lambdaisland.deep_diff2.pretty_print.cljs$core$IFn$_invoke$arity$2(diff,lambdaisland.deep_diff2.printer.cljs$core$IFn$_invoke$arity$0());
}));

(lambdaisland.deep_diff2.pretty_print.cljs$core$IFn$_invoke$arity$2 = (function (diff,printer){
return lambdaisland.deep_diff2.printer_impl.print_doc(lambdaisland.deep_diff2.printer_impl.format_doc(diff,printer),printer);
}));

(lambdaisland.deep_diff2.pretty_print.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=lambdaisland.deep_diff2.js.map
