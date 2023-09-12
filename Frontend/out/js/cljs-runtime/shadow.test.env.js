goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__4652__auto__ = (function shadow$test$env$get_test_vars_$_iter__36647(s__36648){
return (new cljs.core.LazySeq(null,(function (){
var s__36648__$1 = s__36648;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36648__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__36667 = cljs.core.first(xs__6360__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36667,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36667,(1),null);
var iterys__4648__auto__ = ((function (s__36648__$1,vec__36667,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function shadow$test$env$get_test_vars_$_iter__36647_$_iter__36649(s__36650){
return (new cljs.core.LazySeq(null,((function (s__36648__$1,vec__36667,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__36650__$1 = s__36650;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36650__$1);
if(temp__5804__auto____$1){
var s__36650__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36650__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36650__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36652 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36651 = (0);
while(true){
if((i__36651 < size__4651__auto__)){
var var$ = cljs.core._nth(c__4650__auto__,i__36651);
cljs.core.chunk_append(b__36652,var$);

var G__36729 = (i__36651 + (1));
i__36651 = G__36729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36652),shadow$test$env$get_test_vars_$_iter__36647_$_iter__36649(cljs.core.chunk_rest(s__36650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36652),null);
}
} else {
var var$ = cljs.core.first(s__36650__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__36647_$_iter__36649(cljs.core.rest(s__36650__$2)));
}
} else {
return null;
}
break;
}
});})(s__36648__$1,vec__36667,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__36648__$1,vec__36667,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$test$env$get_test_vars_$_iter__36647(cljs.core.rest(s__36648__$1)));
} else {
var G__36735 = cljs.core.rest(s__36648__$1);
s__36648__$1 = G__36735;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4652__auto__ = (function shadow$test$env$get_test_count_$_iter__36705(s__36706){
return (new cljs.core.LazySeq(null,(function (){
var s__36706__$1 = s__36706;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36706__$1);
if(temp__5804__auto__){
var s__36706__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36706__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36706__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36708 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36707 = (0);
while(true){
if((i__36707 < size__4651__auto__)){
var map__36710 = cljs.core._nth(c__4650__auto__,i__36707);
var map__36710__$1 = cljs.core.__destructure_map(map__36710);
var test_ns = map__36710__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36710__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__36708,cljs.core.count(vars));

var G__36740 = (i__36707 + (1));
i__36707 = G__36740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36708),shadow$test$env$get_test_count_$_iter__36705(cljs.core.chunk_rest(s__36706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36708),null);
}
} else {
var map__36716 = cljs.core.first(s__36706__$2);
var map__36716__$1 = cljs.core.__destructure_map(map__36716);
var test_ns = map__36716__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36716__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__36705(cljs.core.rest(s__36706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
