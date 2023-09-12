goog.provide('lambdaisland.chui.report');
lambdaisland.chui.report.html_printer = lambdaisland.deep_diff2.printer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-markup","color-markup",266742518),new cljs.core.Keyword(null,"html-classes","html-classes",988605214)], null));
lambdaisland.chui.report.pprint_str = (function lambdaisland$chui$report$pprint_str(fipp_doc){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38652_38739 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38653_38740 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38654_38741 = true;
var _STAR_print_fn_STAR__temp_val__38655_38742 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38654_38741);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38655_38742);

try{lambdaisland.deep_diff2.printer_impl.print_doc(fipp_doc,lambdaisland.chui.report.html_printer);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38653_38740);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38652_38739);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
});
lambdaisland.chui.report.pprint_doc = (function lambdaisland$chui$report$pprint_doc(doc,wrap_lines_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(cljs.core.truth_(wrap_lines_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"wrap"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),lambdaisland.chui.report.pprint_str(doc)], null)], null)], null)], null);
});
/**
 * Given a clojure.test event, return the first symbol in the expression inside (is).
 */
lambdaisland.chui.report.assertion_type = (function lambdaisland$chui$report$assertion_type(m,_){
var temp__5802__auto__ = ((cljs.core.seq_QMARK_(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core.seq(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m))));
if(temp__5802__auto__){
var s = temp__5802__auto__;
return cljs.core.first(s);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.chui !== 'undefined') && (typeof lambdaisland.chui.report !== 'undefined') && (typeof lambdaisland.chui.report.print_expr !== 'undefined')){
} else {
lambdaisland.chui.report.print_expr = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38657 = cljs.core.get_global_hierarchy;
return (fexpr__38657.cljs$core$IFn$_invoke$arity$0 ? fexpr__38657.cljs$core$IFn$_invoke$arity$0() : fexpr__38657.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.chui.report","print-expr"),lambdaisland.chui.report.assertion_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
lambdaisland.chui.report.print_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m,wrap_lines_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"expected","expected",1583670997)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Expected:",new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m))], null)], null):null),((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"expected","expected",1583670997)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"break","break",126570225),"Actual:",new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))], null)], null):null)], null),wrap_lines_QMARK_], null);
}));
lambdaisland.chui.report.print_expr__EQ_ = (function lambdaisland$chui$report$print_expr__EQ_(m,wrap_lines_QMARK_){
if(((cljs.core.seq_QMARK_(cljs.core.second(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)))) && ((cljs.core.count(cljs.core.second(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))) > (2))))){
var vec__38658 = cljs.core.second(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));
var seq__38659 = cljs.core.seq(vec__38658);
var first__38660 = cljs.core.first(seq__38659);
var seq__38659__$1 = cljs.core.next(seq__38659);
var _ = first__38660;
var first__38660__$1 = cljs.core.first(seq__38659__$1);
var seq__38659__$2 = cljs.core.next(seq__38659__$1);
var expected = first__38660__$1;
var actuals = seq__38659__$2;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scroll","div.scroll",-1226611099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Expected"], null),(function (){var iter__4652__auto__ = (function lambdaisland$chui$report$print_expr__EQ__$_iter__38661(s__38662){
return (new cljs.core.LazySeq(null,(function (){
var s__38662__$1 = s__38662;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38662__$1);
if(temp__5804__auto__){
var s__38662__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38662__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38662__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38664 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38663 = (0);
while(true){
if((i__38663 < size__4651__auto__)){
var vec__38665 = cljs.core._nth(c__4650__auto__,i__38663);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38665,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38665,(1),null);
cljs.core.chunk_append(b__38664,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,form),wrap_lines_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)));

var G__38749 = (i__38663 + (1));
i__38663 = G__38749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38664),lambdaisland$chui$report$print_expr__EQ__$_iter__38661(cljs.core.chunk_rest(s__38662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38664),null);
}
} else {
var vec__38668 = cljs.core.first(s__38662__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38668,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38668,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,form),wrap_lines_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)),lambdaisland$chui$report$print_expr__EQ__$_iter__38661(cljs.core.rest(s__38662__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m))));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"To equal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,expected),wrap_lines_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Actual value"], null),(function (){var iter__4652__auto__ = (function lambdaisland$chui$report$print_expr__EQ__$_iter__38671(s__38672){
return (new cljs.core.LazySeq(null,(function (){
var s__38672__$1 = s__38672;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38672__$1);
if(temp__5804__auto__){
var s__38672__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38672__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38672__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38674 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38673 = (0);
while(true){
if((i__38673 < size__4651__auto__)){
var vec__38675 = cljs.core._nth(c__4650__auto__,i__38673);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38675,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38675,(1),null);
cljs.core.chunk_append(b__38674,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,actual),wrap_lines_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)));

var G__38757 = (i__38673 + (1));
i__38673 = G__38757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38674),lambdaisland$chui$report$print_expr__EQ__$_iter__38671(cljs.core.chunk_rest(s__38672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38674),null);
}
} else {
var vec__38678 = cljs.core.first(s__38672__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38678,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38678,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,actual),wrap_lines_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)),lambdaisland$chui$report$print_expr__EQ__$_iter__38671(cljs.core.rest(s__38672__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),actuals));
})(),((((cljs.core.coll_QMARK_(expected)) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,actuals))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Diff"], null),(function (){var iter__4652__auto__ = (function lambdaisland$chui$report$print_expr__EQ__$_iter__38681(s__38682){
return (new cljs.core.LazySeq(null,(function (){
var s__38682__$1 = s__38682;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38682__$1);
if(temp__5804__auto__){
var s__38682__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38682__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38682__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38684 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38683 = (0);
while(true){
if((i__38683 < size__4651__auto__)){
var vec__38686 = cljs.core._nth(c__4650__auto__,i__38683);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38686,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38686,(1),null);
cljs.core.chunk_append(b__38684,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,lambdaisland.deep_diff2.diff(expected,actual)),wrap_lines_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)));

var G__38760 = (i__38683 + (1));
i__38683 = G__38760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38684),lambdaisland$chui$report$print_expr__EQ__$_iter__38681(cljs.core.chunk_rest(s__38682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38684),null);
}
} else {
var vec__38694 = cljs.core.first(s__38682__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38694,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38694,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,lambdaisland.deep_diff2.diff(expected,actual)),wrap_lines_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)),lambdaisland$chui$report$print_expr__EQ__$_iter__38681(cljs.core.rest(s__38682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),actuals));
})()], null):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scroll","div.scroll",-1226611099),((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"expected","expected",1583670997)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Expected"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)),wrap_lines_QMARK_], null)], null):null),((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"actual","actual",107306363)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Actual"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)),wrap_lines_QMARK_], null)], null):null)], null);
}
});
lambdaisland.chui.report.print_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(function (m,wrap_lines_QMARK_){
return lambdaisland.chui.report.print_expr__EQ_(m,wrap_lines_QMARK_);
}));
lambdaisland.chui.report.print_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"=?","=?",1582288992,null),(function (m,wrap_lines_QMARK_){
return lambdaisland.chui.report.print_expr__EQ_(m,wrap_lines_QMARK_);
}));
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.chui !== 'undefined') && (typeof lambdaisland.chui.report !== 'undefined') && (typeof lambdaisland.chui.report.fail_summary !== 'undefined')){
} else {
lambdaisland.chui.report.fail_summary = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38700 = cljs.core.get_global_hierarchy;
return (fexpr__38700.cljs$core$IFn$_invoke$arity$0 ? fexpr__38700.cljs$core$IFn$_invoke$arity$0() : fexpr__38700.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.chui.report","fail-summary"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
lambdaisland.chui.report.fail_summary.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
/**
 * Returns a string representation of the current test. Renders names
 *   in :testing-vars as a list, then the source file and line of current
 *   assertion.
 */
lambdaisland.chui.report.testing_vars_str = (function lambdaisland$chui$report$testing_vars_str(p__38702){
var map__38703 = p__38702;
var map__38703__$1 = cljs.core.__destructure_map(map__38703);
var m = map__38703__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38703__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38703__$1,new cljs.core.Keyword(null,"line","line",212345235));
var testing_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38703__$1,new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__4251__auto__ = cljs.core.seq(testing_vars);
if(and__4251__auto__){
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38701_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__38701_SHARP_));
}),testing_vars));
} else {
return and__4251__auto__;
}
})()),(cljs.core.truth_(file)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),(cljs.core.truth_(line)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null),")"].join(''):null)].join('');
});
lambdaisland.chui.report.message_context = (function lambdaisland$chui$report$message_context(p__38704){
var map__38705 = p__38704;
var map__38705__$1 = cljs.core.__destructure_map(map__38705);
var m = map__38705__$1;
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38705__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var testing_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38705__$1,new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38705__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38705__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((cljs.core.seq(testing_contexts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",212836670),(function (){var iter__4652__auto__ = (function lambdaisland$chui$report$message_context_$_iter__38706(s__38707){
return (new cljs.core.LazySeq(null,(function (){
var s__38707__$1 = s__38707;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38707__$1);
if(temp__5804__auto__){
var s__38707__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38707__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38707__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38709 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38708 = (0);
while(true){
if((i__38708 < size__4651__auto__)){
var vec__38710 = cljs.core._nth(c__4650__auto__,i__38708);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38710,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38710,(1),null);
cljs.core.chunk_append(b__38709,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",212836670),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(i,"\u00A0\u00A0")),ctx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)));

var G__38764 = (i__38708 + (1));
i__38708 = G__38764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38709),lambdaisland$chui$report$message_context_$_iter__38706(cljs.core.chunk_rest(s__38707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38709),null);
}
} else {
var vec__38713 = cljs.core.first(s__38707__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38713,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38713,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",212836670),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(i,"\u00A0\u00A0")),ctx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)),lambdaisland$chui$report$message_context_$_iter__38706(cljs.core.rest(s__38707__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.reverse(testing_contexts)));
})()], null):null),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),message], null):null)], null);
});
lambdaisland.chui.report.fail_summary.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__38716,wrap_lines_QMARK_){
var map__38717 = p__38716;
var map__38717__$1 = cljs.core.__destructure_map(map__38717);
var m = map__38717__$1;
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var testing_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fail-summary","div.fail-summary",-1210688588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),"PASS"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.message_context,m], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.pprint_doc,lambdaisland.deep_diff2.puget.printer.format_doc(lambdaisland.chui.report.html_printer,expected),wrap_lines_QMARK_], null)], null);
}));
lambdaisland.chui.report.fail_summary.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (p__38718,wrap_lines_QMARK_){
var map__38719 = p__38718;
var map__38719__$1 = cljs.core.__destructure_map(map__38719);
var m = map__38719__$1;
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38719__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var testing_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38719__$1,new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38719__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fail-summary","div.fail-summary",-1210688588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),"FAIL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.message_context,m], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.print_expr,m,wrap_lines_QMARK_], null)], null);
}));
lambdaisland.chui.report.fail_summary.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__38721,wrap_lines_QMARK_){
var map__38722 = p__38721;
var map__38722__$1 = cljs.core.__destructure_map(map__38722);
var m = map__38722__$1;
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38722__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38722__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var testing_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38722__$1,new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38722__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var with_let38723 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let38723","with-let38723",1147389728));
var temp__5808__auto___38768 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___38768 == null)){
} else {
var c__27613__auto___38769 = temp__5808__auto___38768;
if((with_let38723.generation === c__27613__auto___38769.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let38723.generation = c__27613__auto___38769.ratomGeneration);
}

var init38724 = (with_let38723.length === (0));
var trace_p = ((((init38724) || (cljs.core.not(with_let38723.hasOwnProperty((0))))))?(with_let38723[(0)] = lambdaisland.chui.stacktrace.from_error(exception)):(with_let38723[(0)]));
var trace = ((((init38724) || (cljs.core.not(with_let38723.hasOwnProperty((1))))))?(with_let38723[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let38723[(1)]));
var res38725 = (function (){
try{kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(trace_p,(function (t){
return cljs.core.reset_BANG_(trace,t);
})));
}catch (e38726){var e__26264__auto___38770 = e38726;
kitchen_async.promise.reject(e__26264__auto___38770);
}
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fail-summary","div.fail-summary",-1210688588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),"ERROR"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.message_context,m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(cljs.core.truth_(wrap_lines_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"wrap"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"scroll"], null)),(function (){var temp__5802__auto__ = cljs.core.deref(trace);
if(cljs.core.truth_(temp__5802__auto__)){
var trace__$1 = temp__5802__auto__;
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function lambdaisland$chui$report$iter__38727(s__38728){
return (new cljs.core.LazySeq(null,(function (){
var s__38728__$1 = s__38728;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38728__$1);
if(temp__5804__auto__){
var s__38728__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38728__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38728__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38730 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38729 = (0);
while(true){
if((i__38729 < size__4651__auto__)){
var vec__38731 = cljs.core._nth(c__4650__auto__,i__38729);
var map__38734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38731,(0),null);
var map__38734__$1 = cljs.core.__destructure_map(map__38734);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38734__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38734__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38734__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38734__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38731,(1),null);
cljs.core.chunk_append(b__38730,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),function$," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),file], null),file], null),":",line,":",column,")\n"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__38773 = (i__38729 + (1));
i__38729 = G__38773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38730),lambdaisland$chui$report$iter__38727(cljs.core.chunk_rest(s__38728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38730),null);
}
} else {
var vec__38735 = cljs.core.first(s__38728__$2);
var map__38738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38735,(0),null);
var map__38738__$1 = cljs.core.__destructure_map(map__38738);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38738__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38738__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38738__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38738__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38735,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),function$," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),file], null),file], null),":",line,":",column,")\n"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),lambdaisland$chui$report$iter__38727(cljs.core.rest(s__38728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,trace__$1,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})());
} else {
return exception.stack;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.bottom-link","a.bottom-link",-1855459787),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__38720_SHARP_){
console.log(exception);

return p1__38720_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Log error"], null)], null);
})()
;
return res38725;
}));

//# sourceMappingURL=lambdaisland.chui.report.js.map
