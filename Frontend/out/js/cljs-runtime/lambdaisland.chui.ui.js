goog.provide('lambdaisland.chui.ui');
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.chui !== 'undefined') && (typeof lambdaisland.chui.ui !== 'undefined') && (typeof lambdaisland.chui.ui.ui_state !== 'undefined')){
} else {
lambdaisland.chui.ui.ui_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-passing?","hide-passing?",257437324),false], null));
}
(lambdaisland.chui.runner.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.runner.state)));
(lambdaisland.chui.test_data.test_ns_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.test_data.test_ns_data)));
lambdaisland.chui.ui.set_ns_select = (function lambdaisland$chui$ui$set_ns_select(ns_names){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lambdaisland.chui.runner.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.set(ns_names));
});
lambdaisland.chui.ui.toggle_ns_select = (function lambdaisland$chui$ui$toggle_ns_select(namespace_name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lambdaisland.chui.runner.state,cljs.core.update,new cljs.core.Keyword(null,"selected","selected",574897764),(function (selected){
var selected__$1 = cljs.core.set(selected);
if(cljs.core.contains_QMARK_(selected__$1,namespace_name)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected__$1,namespace_name);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected__$1,namespace_name);
}
}));
});
lambdaisland.chui.ui.filtered_nss = (function lambdaisland$chui$ui$filtered_nss(){
var map__38763 = cljs.core.deref(lambdaisland.chui.ui.ui_state);
var map__38763__$1 = cljs.core.__destructure_map(map__38763);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38763__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var regexp_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38763__$1,new cljs.core.Keyword(null,"regexp?","regexp?",1639033075));
var query__$1 = ((typeof query === 'string')?clojure.string.trim(query):"");
var nss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.deref(lambdaisland.chui.test_data.test_ns_data)));
if(clojure.string.blank_QMARK_(query__$1)){
return nss;
} else {
if(cljs.core.truth_(regexp_QMARK_)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38761_SHARP_){
return cljs.core.re_find((new RegExp(query__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38761_SHARP_)));
}),nss);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38762_SHARP_){
return clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38762_SHARP_)),query__$1);
}),nss);

}
}
});
lambdaisland.chui.ui.test_plan = (function lambdaisland$chui$ui$test_plan(){
var tests = cljs.core.deref(lambdaisland.chui.test_data.test_ns_data);
if(cljs.core.seq(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.runner.state)))){
return cljs.core.select_keys(tests,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.runner.state)));
} else {
if((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.ui.ui_state)))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.identity)),lambdaisland.chui.ui.filtered_nss());
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test","skip","test/skip",596009069),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.val)),tests);

}
}
});
lambdaisland.chui.ui.selected_run = (function lambdaisland$chui$ui$selected_run(){
var or__4253__auto__ = new cljs.core.Keyword(null,"selected-run","selected-run",1107119239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.ui.ui_state));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.last(new cljs.core.Keyword(null,"runs","runs",-1553997798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.runner.state)));
}
});
lambdaisland.chui.ui.failing_tests = (function lambdaisland$chui$ui$failing_tests(){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38765_SHARP_){
return lambdaisland.chui.runner.fail_QMARK_(lambdaisland.chui.runner.var_summary(p1__38765_SHARP_));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nss","nss",338450727).cljs$core$IFn$_invoke$arity$1(lambdaisland.chui.ui.selected_run())], 0)));
});
lambdaisland.chui.ui.selected_tests = (function lambdaisland$chui$ui$selected_tests(){
var map__38767 = cljs.core.deref(lambdaisland.chui.ui.ui_state);
var map__38767__$1 = cljs.core.__destructure_map(map__38767);
var selected_tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38767__$1,new cljs.core.Keyword(null,"selected-tests","selected-tests",-701300271));
return cljs.core.set(((cljs.core.seq(selected_tests))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38766_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38766_SHARP_)]),selected_tests);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nss","nss",338450727).cljs$core$IFn$_invoke$arity$1(lambdaisland.chui.ui.selected_run())], 0))):lambdaisland.chui.ui.failing_tests()));
});
lambdaisland.chui.ui.set_state_from_location = (function lambdaisland$chui$ui$set_state_from_location(){
var params = (new URLSearchParams(location.search));
var match = params.get("match");
var include = params.get("include");
if(cljs.core.truth_(match)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.chui.ui.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"query","query",-1288509510),match,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"regexp?","regexp?",1639033075),true], 0));
} else {
if(cljs.core.truth_(include)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.chui.ui.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"query","query",-1288509510),include,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"regexp?","regexp?",1639033075),false], 0));
} else {
return null;
}
}
});
lambdaisland.chui.ui.push_state_to_location = (function lambdaisland$chui$ui$push_state_to_location(){
var map__38771 = cljs.core.deref(lambdaisland.chui.ui.ui_state);
var map__38771__$1 = cljs.core.__destructure_map(map__38771);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38771__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var regexp_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38771__$1,new cljs.core.Keyword(null,"regexp?","regexp?",1639033075));
var params = (new URLSearchParams());
if((!(clojure.string.blank_QMARK_(query)))){
params.set((cljs.core.truth_(regexp_QMARK_)?"match":"include"),query);
} else {
}

return window.history.pushState(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"regexp?","regexp?",1639033075),regexp_QMARK_], null),"lambdaisland.chui",["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)].join(''));
});
lambdaisland.chui.ui.set_query_BANG_ = (function lambdaisland$chui$ui$set_query_BANG_(query){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.ui.ui_state,(function (p1__38772_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38772_SHARP_,new cljs.core.Keyword(null,"query","query",-1288509510),query);
}));

lambdaisland.chui.ui.set_ns_select(((clojure.string.blank_QMARK_(clojure.string.trim(query)))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),lambdaisland.chui.ui.filtered_nss())));

return lambdaisland.chui.ui.push_state_to_location();
});
lambdaisland.chui.ui.iso_time_pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS-00:00";
lambdaisland.chui.ui.human_time_pattern = "yyyy-MM-dd HH:mm:ss";
lambdaisland.chui.ui.reltime_str = (function lambdaisland$chui$ui$reltime_str(date){
return goog.date.relative.format(date.getTime());
});
lambdaisland.chui.ui.iso_time_str = (function lambdaisland$chui$ui$iso_time_str(date){
return (new goog.i18n.DateTimeFormat(lambdaisland.chui.ui.iso_time_pattern)).format(date);
});
lambdaisland.chui.ui.human_time_str = (function lambdaisland$chui$ui$human_time_str(date){
return (new goog.i18n.DateTimeFormat(lambdaisland.chui.ui.human_time_pattern)).format(date);
});
lambdaisland.chui.ui.reltime = (function lambdaisland$chui$ui$reltime(date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dateTime","dateTime",-2108171151),lambdaisland.chui.ui.iso_time_str(date)], null),lambdaisland.chui.ui.reltime_str(date)], null);
});
lambdaisland.chui.ui.summary = (function lambdaisland$chui$ui$summary(sum){
var map__38774 = sum;
var map__38774__$1 = cljs.core.__destructure_map(map__38774);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38774__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38774__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38774__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38774__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tests)," tests, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((pass + error) + fail))," assertions",((cljs.core.pos_int_QMARK_(error))?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," errors"].join(''):null),((cljs.core.pos_int_QMARK_(fail))?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," failures"].join(''):null)].join('');
});
lambdaisland.chui.ui.result_class = (function lambdaisland$chui$ui$result_class(summary){
if(lambdaisland.chui.runner.error_QMARK_(summary)){
return "error";
} else {
if(lambdaisland.chui.runner.fail_QMARK_(summary)){
return "fail";
} else {
return "pass";

}
}
});
lambdaisland.chui.ui.result_viz_var = (function lambdaisland$chui$ui$result_viz_var(p__38775){
var map__38776 = p__38775;
var map__38776__$1 = cljs.core.__destructure_map(map__38776);
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38776__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var assertions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38776__$1,new cljs.core.Keyword(null,"assertions","assertions",-971608611));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output.var","output.var",1151544284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)], null),(function (){var iter__4652__auto__ = (function lambdaisland$chui$ui$result_viz_var_$_iter__38777(s__38778){
return (new cljs.core.LazySeq(null,(function (){
var s__38778__$1 = s__38778;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38778__$1);
if(temp__5804__auto__){
var s__38778__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38778__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38778__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38780 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38779 = (0);
while(true){
if((i__38779 < size__4651__auto__)){
var vec__38781 = cljs.core._nth(c__4650__auto__,i__38779);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38781,(0),null);
var map__38784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38781,(1),null);
var map__38784__$1 = cljs.core.__destructure_map(map__38784);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38784__$1,new cljs.core.Keyword(null,"type","type",1174270348));
cljs.core.chunk_append(b__38780,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output.assertion","output.assertion",1477394414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(type)], null),"\u00A0\u200B"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)));

var G__38850 = (i__38779 + (1));
i__38779 = G__38850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38780),lambdaisland$chui$ui$result_viz_var_$_iter__38777(cljs.core.chunk_rest(s__38778__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38780),null);
}
} else {
var vec__38785 = cljs.core.first(s__38778__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38785,(0),null);
var map__38788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38785,(1),null);
var map__38788__$1 = cljs.core.__destructure_map(map__38788);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38788__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output.assertion","output.assertion",1477394414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(type)], null),"\u00A0\u200B"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)),lambdaisland$chui$ui$result_viz_var_$_iter__38777(cljs.core.rest(s__38778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),assertions));
})()], null);
});
lambdaisland.chui.ui.result_viz = (function lambdaisland$chui$ui$result_viz(nss,selected){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.test-results","section.test-results",882329),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__4652__auto__ = (function lambdaisland$chui$ui$result_viz_$_iter__38789(s__38790){
return (new cljs.core.LazySeq(null,(function (){
var s__38790__$1 = s__38790;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38790__$1);
if(temp__5804__auto__){
var s__38790__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38790__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38790__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38792 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38791 = (0);
while(true){
if((i__38791 < size__4651__auto__)){
var map__38793 = cljs.core._nth(c__4650__auto__,i__38791);
var map__38793__$1 = cljs.core.__destructure_map(map__38793);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__38792,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ns","span.ns",-1501938009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ns,new cljs.core.Keyword(null,"class","class",-2030961996),((((cljs.core.empty_QMARK_(selected)) || (cljs.core.contains_QMARK_(selected,ns))))?"selected-ns":null)], null),(function (){var iter__4652__auto__ = ((function (i__38791,map__38793,map__38793__$1,ns,vars,c__4650__auto__,size__4651__auto__,b__38792,s__38790__$2,temp__5804__auto__){
return (function lambdaisland$chui$ui$result_viz_$_iter__38789_$_iter__38794(s__38795){
return (new cljs.core.LazySeq(null,((function (i__38791,map__38793,map__38793__$1,ns,vars,c__4650__auto__,size__4651__auto__,b__38792,s__38790__$2,temp__5804__auto__){
return (function (){
var s__38795__$1 = s__38795;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38795__$1);
if(temp__5804__auto____$1){
var s__38795__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38795__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__38795__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__38797 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__38796 = (0);
while(true){
if((i__38796 < size__4651__auto____$1)){
var var_info = cljs.core._nth(c__4650__auto____$1,i__38796);
cljs.core.chunk_append(b__38797,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.result_viz_var,var_info], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var_info))], null)));

var G__38851 = (i__38796 + (1));
i__38796 = G__38851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38797),lambdaisland$chui$ui$result_viz_$_iter__38789_$_iter__38794(cljs.core.chunk_rest(s__38795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38797),null);
}
} else {
var var_info = cljs.core.first(s__38795__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.result_viz_var,var_info], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var_info))], null)),lambdaisland$chui$ui$result_viz_$_iter__38789_$_iter__38794(cljs.core.rest(s__38795__$2)));
}
} else {
return null;
}
break;
}
});})(i__38791,map__38793,map__38793__$1,ns,vars,c__4650__auto__,size__4651__auto__,b__38792,s__38790__$2,temp__5804__auto__))
,null,null));
});})(i__38791,map__38793,map__38793__$1,ns,vars,c__4650__auto__,size__4651__auto__,b__38792,s__38790__$2,temp__5804__auto__))
;
return iter__4652__auto__(vars);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null)));

var G__38852 = (i__38791 + (1));
i__38791 = G__38852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38792),lambdaisland$chui$ui$result_viz_$_iter__38789(cljs.core.chunk_rest(s__38790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38792),null);
}
} else {
var map__38798 = cljs.core.first(s__38790__$2);
var map__38798__$1 = cljs.core.__destructure_map(map__38798);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38798__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38798__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ns","span.ns",-1501938009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ns,new cljs.core.Keyword(null,"class","class",-2030961996),((((cljs.core.empty_QMARK_(selected)) || (cljs.core.contains_QMARK_(selected,ns))))?"selected-ns":null)], null),(function (){var iter__4652__auto__ = ((function (map__38798,map__38798__$1,ns,vars,s__38790__$2,temp__5804__auto__){
return (function lambdaisland$chui$ui$result_viz_$_iter__38789_$_iter__38799(s__38800){
return (new cljs.core.LazySeq(null,(function (){
var s__38800__$1 = s__38800;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38800__$1);
if(temp__5804__auto____$1){
var s__38800__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38800__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38800__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38802 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38801 = (0);
while(true){
if((i__38801 < size__4651__auto__)){
var var_info = cljs.core._nth(c__4650__auto__,i__38801);
cljs.core.chunk_append(b__38802,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.result_viz_var,var_info], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var_info))], null)));

var G__38853 = (i__38801 + (1));
i__38801 = G__38853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38802),lambdaisland$chui$ui$result_viz_$_iter__38789_$_iter__38799(cljs.core.chunk_rest(s__38800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38802),null);
}
} else {
var var_info = cljs.core.first(s__38800__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.result_viz_var,var_info], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var_info))], null)),lambdaisland$chui$ui$result_viz_$_iter__38789_$_iter__38799(cljs.core.rest(s__38800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__38798,map__38798__$1,ns,vars,s__38790__$2,temp__5804__auto__))
;
return iter__4652__auto__(vars);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null)),lambdaisland$chui$ui$result_viz_$_iter__38789(cljs.core.rest(s__38790__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nss);
})())], null);
});
lambdaisland.chui.ui.run_results = (function lambdaisland$chui$ui$run_results(p__38803){
var map__38804 = p__38803;
var map__38804__$1 = cljs.core.__destructure_map(map__38804);
var the_ns = map__38804__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38804__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38804__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var map__38805 = cljs.core.deref(lambdaisland.chui.ui.ui_state);
var map__38805__$1 = cljs.core.__destructure_map(map__38805);
var hide_passing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38805__$1,new cljs.core.Keyword(null,"hide-passing?","hide-passing?",257437324));
var selected_tests = lambdaisland.chui.ui.selected_tests();
var sum = lambdaisland.chui.runner.ns_summary(the_ns);
var success_QMARK_ = (!(lambdaisland.chui.runner.fail_QMARK_(sum)));
if(cljs.core.truth_((function (){var and__4251__auto__ = hide_passing_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return success_QMARK_;
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.ns-run.card","article.ns-run.card",-378314307),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.ns-run--header","header.ns-run--header",525836898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.filename","small.filename",-1138908037),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.first(vars)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4652__auto__ = (function lambdaisland$chui$ui$run_results_$_iter__38806(s__38807){
return (new cljs.core.LazySeq(null,(function (){
var s__38807__$1 = s__38807;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38807__$1);
if(temp__5804__auto__){
var s__38807__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38807__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38807__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38809 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38808 = (0);
while(true){
if((i__38808 < size__4651__auto__)){
var map__38810 = cljs.core._nth(c__4650__auto__,i__38808);
var map__38810__$1 = cljs.core.__destructure_map(map__38810);
var var_info = map__38810__$1;
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38810__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var assertions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38810__$1,new cljs.core.Keyword(null,"assertions","assertions",-971608611));
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(hide_passing_QMARK_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),assertions);
}
})())){
var selected_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([var_name]),new cljs.core.Keyword(null,"name","name",1843675177)),selected_tests);
var sum__$1 = lambdaisland.chui.runner.var_summary(var_info);
var error_QMARK_ = lambdaisland.chui.runner.error_QMARK_(sum__$1);
var fail_QMARK_ = lambdaisland.chui.runner.fail_QMARK_(sum__$1);
cljs.core.chunk_append(b__38809,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.ns-run-var.selection-target.inner-card","article.ns-run-var.selection-target.inner-card",-1617811194),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selected_QMARK_)?"selected":null),((error_QMARK_)?"ns-error":((fail_QMARK_)?"ns-fail":"ns-pass"
))], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38808,s__38807__$1,selected_QMARK_,sum__$1,error_QMARK_,fail_QMARK_,map__38810,map__38810__$1,var_info,var_name,assertions,c__4650__auto__,size__4651__auto__,b__38809,s__38807__$2,temp__5804__auto__,map__38805,map__38805__$1,hide_passing_QMARK_,selected_tests,sum,success_QMARK_,map__38804,map__38804__$1,the_ns,ns,vars){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.ui.ui_state,((function (i__38808,s__38807__$1,selected_QMARK_,sum__$1,error_QMARK_,fail_QMARK_,map__38810,map__38810__$1,var_info,var_name,assertions,c__4650__auto__,size__4651__auto__,b__38809,s__38807__$2,temp__5804__auto__,map__38805,map__38805__$1,hide_passing_QMARK_,selected_tests,sum,success_QMARK_,map__38804,map__38804__$1,the_ns,ns,vars){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"selected-tests","selected-tests",-701300271),cljs.core.PersistentHashSet.createAsIfByAssoc([var_name]));
});})(i__38808,s__38807__$1,selected_QMARK_,sum__$1,error_QMARK_,fail_QMARK_,map__38810,map__38810__$1,var_info,var_name,assertions,c__4650__auto__,size__4651__auto__,b__38809,s__38807__$2,temp__5804__auto__,map__38805,map__38805__$1,hide_passing_QMARK_,selected_tests,sum,success_QMARK_,map__38804,map__38804__$1,the_ns,ns,vars))
);
});})(i__38808,s__38807__$1,selected_QMARK_,sum__$1,error_QMARK_,fail_QMARK_,map__38810,map__38810__$1,var_info,var_name,assertions,c__4650__auto__,size__4651__auto__,b__38809,s__38807__$2,temp__5804__auto__,map__38805,map__38805__$1,hide_passing_QMARK_,selected_tests,sum,success_QMARK_,map__38804,map__38804__$1,the_ns,ns,vars))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.result-var-card","header.result-var-card",-1793026485),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.var-name-result","div.var-name-result",-1699655471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.ns-run--assertion","h3.ns-run--assertion",80182977),cljs.core.name(var_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output.test-results","output.test-results",-895454208),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ns","span.ns",-1501938009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.result_viz_var,var_info], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.ns-run--result","p.ns-run--result",-1803719050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),((error_QMARK_)?"Error":((fail_QMARK_)?"Fail":"Pass"
))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)], null)));

var G__38855 = (i__38808 + (1));
i__38808 = G__38855;
continue;
} else {
var G__38856 = (i__38808 + (1));
i__38808 = G__38856;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38809),lambdaisland$chui$ui$run_results_$_iter__38806(cljs.core.chunk_rest(s__38807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38809),null);
}
} else {
var map__38811 = cljs.core.first(s__38807__$2);
var map__38811__$1 = cljs.core.__destructure_map(map__38811);
var var_info = map__38811__$1;
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38811__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var assertions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38811__$1,new cljs.core.Keyword(null,"assertions","assertions",-971608611));
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(hide_passing_QMARK_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),assertions);
}
})())){
var selected_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([var_name]),new cljs.core.Keyword(null,"name","name",1843675177)),selected_tests);
var sum__$1 = lambdaisland.chui.runner.var_summary(var_info);
var error_QMARK_ = lambdaisland.chui.runner.error_QMARK_(sum__$1);
var fail_QMARK_ = lambdaisland.chui.runner.fail_QMARK_(sum__$1);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.ns-run-var.selection-target.inner-card","article.ns-run-var.selection-target.inner-card",-1617811194),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selected_QMARK_)?"selected":null),((error_QMARK_)?"ns-error":((fail_QMARK_)?"ns-fail":"ns-pass"
))], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__38807__$1,selected_QMARK_,sum__$1,error_QMARK_,fail_QMARK_,map__38811,map__38811__$1,var_info,var_name,assertions,s__38807__$2,temp__5804__auto__,map__38805,map__38805__$1,hide_passing_QMARK_,selected_tests,sum,success_QMARK_,map__38804,map__38804__$1,the_ns,ns,vars){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.ui.ui_state,((function (s__38807__$1,selected_QMARK_,sum__$1,error_QMARK_,fail_QMARK_,map__38811,map__38811__$1,var_info,var_name,assertions,s__38807__$2,temp__5804__auto__,map__38805,map__38805__$1,hide_passing_QMARK_,selected_tests,sum,success_QMARK_,map__38804,map__38804__$1,the_ns,ns,vars){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"selected-tests","selected-tests",-701300271),cljs.core.PersistentHashSet.createAsIfByAssoc([var_name]));
});})(s__38807__$1,selected_QMARK_,sum__$1,error_QMARK_,fail_QMARK_,map__38811,map__38811__$1,var_info,var_name,assertions,s__38807__$2,temp__5804__auto__,map__38805,map__38805__$1,hide_passing_QMARK_,selected_tests,sum,success_QMARK_,map__38804,map__38804__$1,the_ns,ns,vars))
);
});})(s__38807__$1,selected_QMARK_,sum__$1,error_QMARK_,fail_QMARK_,map__38811,map__38811__$1,var_info,var_name,assertions,s__38807__$2,temp__5804__auto__,map__38805,map__38805__$1,hide_passing_QMARK_,selected_tests,sum,success_QMARK_,map__38804,map__38804__$1,the_ns,ns,vars))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.result-var-card","header.result-var-card",-1793026485),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.var-name-result","div.var-name-result",-1699655471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.ns-run--assertion","h3.ns-run--assertion",80182977),cljs.core.name(var_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output.test-results","output.test-results",-895454208),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ns","span.ns",-1501938009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.result_viz_var,var_info], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.ns-run--result","p.ns-run--result",-1803719050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),((error_QMARK_)?"Error":((fail_QMARK_)?"Fail":"Pass"
))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)], null)),lambdaisland$chui$ui$run_results_$_iter__38806(cljs.core.rest(s__38807__$2)));
} else {
var G__38857 = cljs.core.rest(s__38807__$2);
s__38807__$1 = G__38857;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"meta","meta",1499536964)),vars));
})()], null)], null);
}
});
lambdaisland.chui.ui.test_stop_button = (function lambdaisland$chui$ui$test_stop_button(){
var map__38812 = cljs.core.deref(lambdaisland.chui.runner.state);
var map__38812__$1 = cljs.core.__destructure_map(map__38812);
var runs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38812__$1,new cljs.core.Keyword(null,"runs","runs",-1553997798));
var test_plan = lambdaisland.chui.ui.test_plan();
var test_count = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.count,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.val),test_plan));
if(new cljs.core.Keyword(null,"done?","done?",-1847001718).cljs$core$IFn$_invoke$arity$1(cljs.core.last(runs)) === false){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.stop-tests","button.button.stop-tests",-487301933),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lambdaisland.chui.runner.terminate_BANG_.cljs$core$IFn$_invoke$arity$1((function (ctx){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.chui.ui",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminated!","terminated!",1964124896),ctx,new cljs.core.Keyword(null,"line","line",212345235),211], null)),null);
}));
})], null),"Stop"], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.run-tests","button.button.run-tests",-1708521656),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (lambdaisland.chui.ui.run_tests.cljs$core$IFn$_invoke$arity$0 ? lambdaisland.chui.ui.run_tests.cljs$core$IFn$_invoke$arity$0() : lambdaisland.chui.ui.run_tests.call(null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),test_count)], null),"Run ",test_count," tests"], null);
}
});
lambdaisland.chui.ui.general_toggles = (function lambdaisland$chui$ui$general_toggles(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.general-toggles","div.general-toggles",415638912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lambdaisland.chui.runner.state,cljs.core.assoc,new cljs.core.Keyword(null,"runs","runs",-1553997798),cljs.core.PersistentVector.EMPTY);
})], null),"Clear results"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#regexp","input#regexp",498248042),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lambdaisland.chui.ui.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"regexp?","regexp?",1639033075),e.target.checked);

return lambdaisland.chui.ui.push_state_to_location();
}),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(new cljs.core.Keyword(null,"regexp?","regexp?",1639033075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.ui.ui_state)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"regexp"], null),"Regexp search"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#hide-passing","input#hide-passing",-2125989199),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(new cljs.core.Keyword(null,"hide-passing?","hide-passing?",257437324).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.ui.ui_state))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38813_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lambdaisland.chui.ui.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"hide-passing?","hide-passing?",257437324),p1__38813_SHARP_.target.checked);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"hide-passing"], null),"Hide passing tests"], null)], null);
});
lambdaisland.chui.ui.header = (function lambdaisland$chui$ui$header(last_run){
var sum = lambdaisland.chui.runner.run_summary(last_run);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.top-bar","header.top-bar",-1299348390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not(last_run))?"":((lambdaisland.chui.runner.error_QMARK_(sum))?"error":((lambdaisland.chui.runner.fail_QMARK_(sum))?"fail":"pass"
)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.general_toggles], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.name","a.name",-1036325570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/lambdaisland/chui"], null),"lambdaisland.chui"], null)], null);
});
lambdaisland.chui.ui.results = (function lambdaisland$chui$ui$results(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.column","section.column",1314487919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.results","div.results",1001372547),(function (){var iter__4652__auto__ = (function lambdaisland$chui$ui$results_$_iter__38814(s__38815){
return (new cljs.core.LazySeq(null,(function (){
var s__38815__$1 = s__38815;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38815__$1);
if(temp__5804__auto__){
var s__38815__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38815__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38815__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38817 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38816 = (0);
while(true){
if((i__38816 < size__4651__auto__)){
var ns = cljs.core._nth(c__4650__auto__,i__38816);
cljs.core.chunk_append(b__38817,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.run_results,ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ns)], null)));

var G__38858 = (i__38816 + (1));
i__38816 = G__38858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38817),lambdaisland$chui$ui$results_$_iter__38814(cljs.core.chunk_rest(s__38815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38817),null);
}
} else {
var ns = cljs.core.first(s__38815__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.run_results,ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ns)], null)),lambdaisland$chui$ui$results_$_iter__38814(cljs.core.rest(s__38815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"nss","nss",338450727).cljs$core$IFn$_invoke$arity$1(lambdaisland.chui.ui.selected_run())));
})()], null)], null);
});
lambdaisland.chui.ui.history = (function lambdaisland$chui$ui$history(runs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.column.history","section.column.history",1511616699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.option","div.option",-1520829790),(function (){var map__38819 = cljs.core.deref(lambdaisland.chui.runner.state);
var map__38819__$1 = cljs.core.__destructure_map(map__38819);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38819__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var map__38820 = cljs.core.deref(lambdaisland.chui.ui.ui_state);
var map__38820__$1 = cljs.core.__destructure_map(map__38820);
var hide_passing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38820__$1,new cljs.core.Keyword(null,"hide-passing?","hide-passing?",257437324));
var selected_run = lambdaisland.chui.ui.selected_run();
var iter__4652__auto__ = (function lambdaisland$chui$ui$history_$_iter__38821(s__38822){
return (new cljs.core.LazySeq(null,(function (){
var s__38822__$1 = s__38822;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38822__$1);
if(temp__5804__auto__){
var s__38822__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38822__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38822__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38824 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38823 = (0);
while(true){
if((i__38823 < size__4651__auto__)){
var map__38825 = cljs.core._nth(c__4650__auto__,i__38823);
var map__38825__$1 = cljs.core.__destructure_map(map__38825);
var run = map__38825__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825__$1,new cljs.core.Keyword(null,"nss","nss",338450727));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var terminated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825__$1,new cljs.core.Keyword(null,"terminated?","terminated?",209866129));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected_run));
var active_QMARK_ = ((cljs.core.not(selected_run)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(runs)))));
cljs.core.chunk_append(b__38824,(function (){var sum = lambdaisland.chui.runner.run_summary(run);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.run.selection-target.card","article.run.selection-target.card",591982261),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"selected active":((active_QMARK_)?"active":null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38823,sum,selected_QMARK_,active_QMARK_,map__38825,map__38825__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,c__4650__auto__,size__4651__auto__,b__38824,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.ui.ui_state,((function (i__38823,sum,selected_QMARK_,active_QMARK_,map__38825,map__38825__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,c__4650__auto__,size__4651__auto__,b__38824,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"selected-run","selected-run",1107119239),run);
});})(i__38823,sum,selected_QMARK_,active_QMARK_,map__38825,map__38825__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,c__4650__auto__,size__4651__auto__,b__38824,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run))
);
});})(i__38823,sum,selected_QMARK_,active_QMARK_,map__38825,map__38825__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,c__4650__auto__,size__4651__auto__,b__38824,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.run-header","header.run-header",1491785787),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((lambdaisland.chui.runner.error_QMARK_(sum))?"error":((lambdaisland.chui.runner.fail_QMARK_(sum))?"fail":"pass"
)),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"test-count","test-count",212751891).cljs$core$IFn$_invoke$arity$1(run),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(lambdaisland.chui.runner.run_summary(run))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),lambdaisland.chui.ui.reltime_str(start)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),(cljs.core.truth_(done_QMARK_)?null:"Running"),(cljs.core.truth_(terminated_QMARK_)?"Aborted":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.result_viz,(cljs.core.truth_(hide_passing_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__38823,sum,selected_QMARK_,active_QMARK_,map__38825,map__38825__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,c__4650__auto__,size__4651__auto__,b__38824,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run){
return (function (p1__38818_SHARP_){
return lambdaisland.chui.runner.fail_QMARK_(lambdaisland.chui.runner.ns_summary(p1__38818_SHARP_));
});})(i__38823,sum,selected_QMARK_,active_QMARK_,map__38825,map__38825__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,c__4650__auto__,size__4651__auto__,b__38824,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run))
,nss):nss),selected], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.summary,sum], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__38859 = (i__38823 + (1));
i__38823 = G__38859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38824),lambdaisland$chui$ui$history_$_iter__38821(cljs.core.chunk_rest(s__38822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38824),null);
}
} else {
var map__38826 = cljs.core.first(s__38822__$2);
var map__38826__$1 = cljs.core.__destructure_map(map__38826);
var run = map__38826__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38826__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38826__$1,new cljs.core.Keyword(null,"nss","nss",338450727));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38826__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38826__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var terminated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38826__$1,new cljs.core.Keyword(null,"terminated?","terminated?",209866129));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected_run));
var active_QMARK_ = ((cljs.core.not(selected_run)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(runs)))));
return cljs.core.cons((function (){var sum = lambdaisland.chui.runner.run_summary(run);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.run.selection-target.card","article.run.selection-target.card",591982261),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"selected active":((active_QMARK_)?"active":null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sum,selected_QMARK_,active_QMARK_,map__38826,map__38826__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.ui.ui_state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"selected-run","selected-run",1107119239),run);
}));
});})(sum,selected_QMARK_,active_QMARK_,map__38826,map__38826__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.run-header","header.run-header",1491785787),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((lambdaisland.chui.runner.error_QMARK_(sum))?"error":((lambdaisland.chui.runner.fail_QMARK_(sum))?"fail":"pass"
)),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"test-count","test-count",212751891).cljs$core$IFn$_invoke$arity$1(run),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(lambdaisland.chui.runner.run_summary(run))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),lambdaisland.chui.ui.reltime_str(start)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),(cljs.core.truth_(done_QMARK_)?null:"Running"),(cljs.core.truth_(terminated_QMARK_)?"Aborted":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.result_viz,(cljs.core.truth_(hide_passing_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sum,selected_QMARK_,active_QMARK_,map__38826,map__38826__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run){
return (function (p1__38818_SHARP_){
return lambdaisland.chui.runner.fail_QMARK_(lambdaisland.chui.runner.ns_summary(p1__38818_SHARP_));
});})(sum,selected_QMARK_,active_QMARK_,map__38826,map__38826__$1,run,id,nss,start,done_QMARK_,terminated_QMARK_,s__38822__$2,temp__5804__auto__,map__38819,map__38819__$1,selected,map__38820,map__38820__$1,hide_passing_QMARK_,selected_run))
,nss):nss),selected], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.summary,sum], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),lambdaisland$chui$ui$history_$_iter__38821(cljs.core.rest(s__38822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.reverse(runs));
})()], null)], null);
});
lambdaisland.chui.ui.filter_SINGLEQUOTE_n_run = (function lambdaisland$chui$ui$filter_SINGLEQUOTE_n_run(){
var map__38827 = cljs.core.deref(lambdaisland.chui.ui.ui_state);
var map__38827__$1 = cljs.core.__destructure_map(map__38827);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38827__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-bar.card","div.search-bar.card",1857194177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"value","value",305978217),query,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var query__$1 = e.target.value;
return lambdaisland.chui.ui.set_query_BANG_(query__$1);
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
return (lambdaisland.chui.ui.run_tests.cljs$core$IFn$_invoke$arity$0 ? lambdaisland.chui.ui.run_tests.cljs$core$IFn$_invoke$arity$0() : lambdaisland.chui.ui.run_tests.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"namespace"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.test_stop_button], null)], null);
});
lambdaisland.chui.ui.test_selector = (function lambdaisland$chui$ui$test_selector(){
var with_let38828 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let38828","with-let38828",1040849334));
var temp__5808__auto___38860 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___38860 == null)){
} else {
var c__27613__auto___38861 = temp__5808__auto___38860;
if((with_let38828.generation === c__27613__auto___38861.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let38828.generation = c__27613__auto___38861.ratomGeneration);
}

var init38829 = (with_let38828.length === (0));
var this$ = ((((init38829) || (cljs.core.not(with_let38828.hasOwnProperty((0))))))?(with_let38828[(0)] = reagent.core.current_component()):(with_let38828[(0)]));
var _ = ((((init38829) || (cljs.core.not(with_let38828.hasOwnProperty((1))))))?(with_let38828[(1)] = cljs.core.add_watch(lambdaisland.chui.test_data.test_ns_data,new cljs.core.Keyword("lambdaisland.chui.ui","rerender","lambdaisland.chui.ui/rerender",710586194),(function (){
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1(this$);
}))):(with_let38828[(1)]));
var res38830 = (function (){var map__38831 = cljs.core.deref(lambdaisland.chui.runner.state);
var map__38831__$1 = cljs.core.__destructure_map(map__38831);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38831__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var map__38832 = cljs.core.deref(lambdaisland.chui.ui.ui_state);
var map__38832__$1 = cljs.core.__destructure_map(map__38832);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38832__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.column-namespaces","section.column-namespaces",1830801334),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.filter_SINGLEQUOTE_n_run], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.namespace-selector","div.namespace-selector",1911037094),(function (){var iter__4652__auto__ = (function lambdaisland$chui$ui$test_selector_$_iter__38833(s__38834){
return (new cljs.core.LazySeq(null,(function (){
var s__38834__$1 = s__38834;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38834__$1);
if(temp__5804__auto__){
var s__38834__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38834__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38834__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38836 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38835 = (0);
while(true){
if((i__38835 < size__4651__auto__)){
var map__38837 = cljs.core._nth(c__4650__auto__,i__38835);
var map__38837__$1 = cljs.core.__destructure_map(map__38837);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38837__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38837__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym);
var test_count = cljs.core.count(tests);
if(((0) < test_count)){
cljs.core.chunk_append(b__38836,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.namespace-links.selection-target","div.namespace-links.selection-target",76514170),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_(selected,ns_sym))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38835,s__38834__$1,ns_str,test_count,map__38837,map__38837__$1,tests,ns_sym,ns_meta,c__4650__auto__,size__4651__auto__,b__38836,s__38834__$2,temp__5804__auto__,map__38831,map__38831__$1,selected,map__38832,map__38832__$1,query,init38829,this$,_,with_let38828){
return (function (){
if(clojure.string.blank_QMARK_(query)){
return lambdaisland.chui.ui.toggle_ns_select(ns_sym);
} else {
return null;
}
});})(i__38835,s__38834__$1,ns_str,test_count,map__38837,map__38837__$1,tests,ns_sym,ns_meta,c__4650__auto__,size__4651__auto__,b__38836,s__38834__$2,temp__5804__auto__,map__38831,map__38831__$1,selected,map__38832,map__38832__$1,query,init38829,this$,_,with_let38828))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ns_str], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),test_count,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),test_count))?" test":" tests")], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ns_str], null)));

var G__38862 = (i__38835 + (1));
i__38835 = G__38862;
continue;
} else {
var G__38863 = (i__38835 + (1));
i__38835 = G__38863;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38836),lambdaisland$chui$ui$test_selector_$_iter__38833(cljs.core.chunk_rest(s__38834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38836),null);
}
} else {
var map__38838 = cljs.core.first(s__38834__$2);
var map__38838__$1 = cljs.core.__destructure_map(map__38838);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38838__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38838__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38838__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym);
var test_count = cljs.core.count(tests);
if(((0) < test_count)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.namespace-links.selection-target","div.namespace-links.selection-target",76514170),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_(selected,ns_sym))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__38834__$1,ns_str,test_count,map__38838,map__38838__$1,tests,ns_sym,ns_meta,s__38834__$2,temp__5804__auto__,map__38831,map__38831__$1,selected,map__38832,map__38832__$1,query,init38829,this$,_,with_let38828){
return (function (){
if(clojure.string.blank_QMARK_(query)){
return lambdaisland.chui.ui.toggle_ns_select(ns_sym);
} else {
return null;
}
});})(s__38834__$1,ns_str,test_count,map__38838,map__38838__$1,tests,ns_sym,ns_meta,s__38834__$2,temp__5804__auto__,map__38831,map__38831__$1,selected,map__38832,map__38832__$1,query,init38829,this$,_,with_let38828))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ns_str], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),test_count,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),test_count))?" test":" tests")], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ns_str], null)),lambdaisland$chui$ui$test_selector_$_iter__38833(cljs.core.rest(s__38834__$2)));
} else {
var G__38864 = cljs.core.rest(s__38834__$2);
s__38834__$1 = G__38864;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(lambdaisland.chui.ui.filtered_nss());
})()], null)], null);
})();
return res38830;
});
lambdaisland.chui.ui.comparison = (function lambdaisland$chui$ui$comparison(p__38839){
var map__38840 = p__38839;
var map__38840__$1 = cljs.core.__destructure_map(map__38840);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u25B6",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual], 0))], null)], null)], null)], null);
});
lambdaisland.chui.ui.error_comparison = (function lambdaisland$chui$ui$error_comparison(p__38841){
var map__38842 = p__38841;
var map__38842__$1 = cljs.core.__destructure_map(map__38842);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38842__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38842__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Error: "], null),(cljs.core.truth_(actual)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),actual.message], null):null)], null)], null);
});
lambdaisland.chui.ui.assertions_header = (function lambdaisland$chui$ui$assertions_header(title,wrap_lines_QMARK__atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.section-header","span.section-header",-624048557),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),(function (){var temp_id = ["wrap-assertions",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toggle-wrap","span.toggle-wrap",-100588521),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),temp_id], null),"wrap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),temp_id,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(wrap_lines_QMARK__atom,e.target.checked);
}),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(cljs.core.deref(wrap_lines_QMARK__atom))], null)], null)], null);
})()], null);
});
lambdaisland.chui.ui.test_assertions = (function lambdaisland$chui$ui$test_assertions(p__38844){
var map__38845 = p__38844;
var map__38845__$1 = cljs.core.__destructure_map(map__38845);
var var_info = map__38845__$1;
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38845__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var assertions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38845__$1,new cljs.core.Keyword(null,"assertions","assertions",-971608611));
var with_let38846 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let38846","with-let38846",796468122));
var temp__5808__auto___38865 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___38865 == null)){
} else {
var c__27613__auto___38866 = temp__5808__auto___38865;
if((with_let38846.generation === c__27613__auto___38866.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let38846.generation = c__27613__auto___38866.ratomGeneration);
}

var init38847 = (with_let38846.length === (0));
var pass_QMARK_ = ((((init38847) || (cljs.core.not(with_let38846.hasOwnProperty((0))))))?(with_let38846[(0)] = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass","pass",1574159993),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348))):(with_let38846[(0)]));
var show_passing_QMARK_ = ((((init38847) || (cljs.core.not(with_let38846.hasOwnProperty((1))))))?(with_let38846[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let38846[(1)]));
var wrap_lines_QMARK_ = ((((init38847) || (cljs.core.not(with_let38846.hasOwnProperty((2))))))?(with_let38846[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let38846[(2)]));
var _ = ((((init38847) || (cljs.core.not(with_let38846.hasOwnProperty((3))))))?(with_let38846[(3)] = console.log("wrap-lines?")):(with_let38846[(3)]));
var res38848 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.test-info.card","div.test-info.card",1599290683),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.assertions_header,var_name,wrap_lines_QMARK_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.deref(show_passing_QMARK_))?cljs.core.identity:cljs.core.remove.cljs$core$IFn$_invoke$arity$1(pass_QMARK_)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-card.assertion","div.inner-card.assertion",1075149708),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.report.fail_summary,m,cljs.core.deref(wrap_lines_QMARK_)], null)], null);
}))),assertions),(function (){var pass_count = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pass_QMARK_,assertions));
if(((cljs.core.not(cljs.core.deref(show_passing_QMARK_))) && (((0) < pass_count)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.bottom-link","a.bottom-link",-1855459787),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__38843_SHARP_){
cljs.core.reset_BANG_(show_passing_QMARK_,true);

return p1__38843_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Show ",pass_count," passing assertions"], null);
} else {
return null;
}
})()], null);
return res38848;
});
lambdaisland.chui.ui.assertion_details = (function lambdaisland$chui$ui$assertion_details(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.column","section.column",1314487919),(function (){var temp__5802__auto__ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"meta","meta",1499536964))),lambdaisland.chui.ui.selected_tests());
if(cljs.core.truth_(temp__5802__auto__)){
var tests = temp__5802__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (test){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.test_assertions,test], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(test)], null));
}),tests);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"All tests pass!"], null);
}
})()], null);
});
lambdaisland.chui.ui.col_count = (function lambdaisland$chui$ui$col_count(){
var runs_QMARK_ = cljs.core.seq(new cljs.core.Keyword(null,"runs","runs",-1553997798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.runner.state)));
if(runs_QMARK_){
return (4);
} else {
return (2);

}
});
lambdaisland.chui.ui.app = (function lambdaisland$chui$ui$app(){
var map__38849 = cljs.core.deref(lambdaisland.chui.runner.state);
var map__38849__$1 = cljs.core.__destructure_map(map__38849);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38849__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var runs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38849__$1,new cljs.core.Keyword(null,"runs","runs",-1553997798));
var runs_QMARK_ = cljs.core.seq(runs);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chui","div#chui",48397467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"body{overflow:hidden}#chui *{box-sizing:border-box}html{color:#333;font-family:sans-serif;height:100vh}body{margin:0;height:100%}#chui,#chui-container{height:100%}#chui>div,#chui-container>div{height:100%;display:grid;grid-template-rows:auto 1fr;grid-gap:.3rem}.top-bar{background-color:#4271ae;color:white;padding:.5rem;display:flex;justify-content:space-between;align-items:center}.top-bar.error{background-color:#ed553b}.top-bar.fail{background-color:#f6d55c;color:black}.top-bar.pass{background-color:#3caea3}.top-bar .button{padding:.3rem .6rem;background-color:whitesmoke;border-radius:2px}.top-bar .general-toggles{display:flex;align-items:center}.top-bar .general-toggles button,.top-bar .general-toggles label{margin-right:1rem}.top-bar .general-toggles input{margin-right:.5rem}.top-bar .name{color:inherit;text-decoration:none;font-size:1rem;font-weight:bold}.interface-controls{display:flex}.card{border:1px solid #eee;box-shadow:1px 1px 5px #eee}.inner-card{border:1px solid #eee}ul{padding:.2rem;list-style:none;text-decoration:none;line-height:1.5}li a{text-decoration:none}code{font-size:1.1rem}main{display:flex;width:100%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;background-color:initial}main.cols-2>section{width:calc(100vw / 3)}main.cols-3>section{flex:1}main.cols-3>section:last-child{flex:2}main.cols-4>section{width:20vw}main.cols-4>section:last-child{width:40vw}main>section{flex-shrink:0;display:flex;flex-direction:column;padding:.5rem;overflow:auto}main>section:hover,main>section:active{background-color:snow;resize:horizontal}.namespaces{background-color:inherit}.fieldset{border:1px solid black;margin-top:.3rem;margin-bottom:.3rem}input[type=\"search\"]{padding:.5rem;border:0;width:100%;font-size:1.1rem;line-height:1.5}input[type=\"search\"]::placeholder{color:gray}.selection-target{background-color:white}.selection-target.selected{background-color:#eee}.history{background-color:inherit}.section-header{width:100%;display:inline-block;margin:2px;position:relative}.section-header .toggle-wrap{position:absolute;top:0;bottom:0;right:0}.section-header h2{font-size:1.1rem;font-weight:bold;margin:0;display:inline-block}.test-info{background-color:initial;padding:.5rem 1rem 1rem;margin-bottom:1rem}.test-info .inner-card{padding:.3rem .5rem;margin:.5rem 0}.test-info .assertion{position:relative;overflow:hidden}.test-info .context,.test-info .message{margin-bottom:.3rem}.test-info .pass{border-right:4px solid #3caea3}.test-info .fail{border-right:4px solid #f6d55c}.test-info .error{border-right:4px solid #ed553b}.test-info aside{position:absolute;top:0;right:0;font-weight:bold;font-variant-caps:all-small-caps;padding:.2rem .5rem}.test-info .scroll{overflow-x:auto}.test-info .fail-summary>div{margin-right:40px}.test-info .wrap{overflow-x:hidden;white-space:pre-wrap}.test-info h4{margin:0;font-variant-caps:all-small-caps}.test-info .bottom-link{width:100%;display:block;text-align:right;margin-top:1rem}.namespaces+ul{padding-left:1.5rem;line-height:1.7rem}.toggle{position:absolute;left:-100vw}.namespace-selector{display:flex;flex-direction:column;margin-top:.5rem;line-height:1.125}.active{font-weight:bold}.search-bar{display:grid;background-color:whitesmoke;grid-template-columns:4fr minmax(26%,1fr);grid-auto-flow:column;position:sticky;top:0}.button{font-variant-caps:all-small-caps;font-weight:bold;background-color:inherit;border:0;font-size:1.1rem;overflow:hidden;text-overflow:clip}.button:hover{color:white;cursor:pointer}.run-tests{color:silver;line-height:.9}.run-tests:hover,.run-tests:active{background-color:lightgreen;color:darkslategray}.run-tests:hover:disabled{background-color:silver}.stop-tests{color:coral}.stop-tests:hover{background-color:lightcoral}.namespace-links{display:flex;flex-wrap:wrap;border-radius:2px;align-items:center;justify-content:space-between}.namespace-links input{display:none;width:max-content}.namespace-links label{padding:.50rem .5rem}.namespace-links aside{padding:.50rem .5rem}.namespace-links aside small{font-style:italic;color:darkgray;white-space:nowrap}.run{margin-bottom:1rem;opacity:.5}.run.active{opacity:1}.run:hover{opacity:1}.run p{margin:0}.run .run-header{justify-content:initial;padding:.5rem 1rem;grid-column-start:1;grid-column-end:3;background-color:initial;border-radius:initial;display:grid;grid-template-columns:subgrid;color:#333}.run .run-header p{grid-column-start:1}.run .run-header small{grid-column-start:2;color:gray;text-align:right}.run footer{padding:.5rem 1rem;grid-column:1 /span 2;grid-row-start:3}.run progress{grid-column:1 / span 2;background:#4d4d4c;width:100%;height:1rem;margin-top:.5rem;margin-bottom:.5rem;border:0;-webkit-appearance:none}.run progress.pass::-webkit-progress-value{background:#3caea3}.run progress.pass::-webkit-progress-bar{background:#4d4d4c}.run progress.pass::-moz-progress-bar{background:#3caea3}.run progress.fail::-webkit-progress-value{background:#f6d55c}.run progress.fail::-webkit-progress-bar{background:#4d4d4c}.run progress.fail::-moz-progress-bar{background:#f6d55c}.run progress.error::-webkit-progress-value{background:#ed553b}.run progress.error::-webkit-progress-bar{background:#4d4d4c}.run progress.error::-moz-progress-bar{background:#ed553b}.test-results{grid-column:1 / span 2;line-height:1.6rem;text-align:justify;margin:0 1rem;overflow:hidden;font-size:50%}.test-results .ns{overflow-wrap:anywhere}.test-results .var{border-right:1px solid transparent}.test-results .var:last-child{border-style:none}.test-results output{width:1em;font-size:1.6em}.test-results output .pass{background-color:#3caea3}.test-results output .fail{background-color:#f6d55c}.test-results output .error{background-color:#ed553b}.ns-run{padding:.5rem 1rem 1rem;margin-bottom:1rem;font-family:sans-serif}.ns-run .ns-run--header{background-color:initial;color:inherit;display:inherit;margin-bottom:.5rem}.ns-run .ns-run--header h2{font-weight:normal;margin-bottom:.2rem;font-size:1.1rem;overflow:hidden;text-overflow:ellipsis}.ns-run .ns-run--header .filename{color:darkslategray;font-size:.8rem;font-family:monospace;word-break:break-all}.ns-run>div{display:flex;flex-direction:column;gap:.5rem}.ns-run .ns-run--result{flex-grow:1;text-align:right}.ns-run .var-name-result{display:flex;flex-wrap:wrap}.ns-run .ns-run-var{padding-left:.2rem}.ns-run .ns-run-var .test-results{margin:-1px 0 0 0}.ns-run .ns-run-var header{background-color:initial;color:inherit;border-radius:unset;line-height:1.5;display:flex}.ns-run .ns-run-var header h3{font-weight:normal;font-size:1rem;padding:0 1rem 0 0}.ns-run .ns-run-var header p{padding-right:.4rem}.ns-run .ns-run-var h4{font-weight:normal;font-size:.8rem;padding-right:.2rem}.ns-run .ns-fail{border-right:4px solid #f6d55c;border-top:0;border-bottom:0;border-left:0}.ns-run .ns-error{border-right:4px solid #ed553b;border-left:0;border-top:0;border-bottom:0}.ns-run .ns-pass{border-right:4px solid #3caea3;border-left:0;border-top:0;border-bottom:0}.ns-run h2,.ns-run h3,.ns-run h4,.ns-run p{margin:0}.ns-run code{font-family:monospace;padding:.2rem}.ns-run .actual{color:red;font-weight:bold}code .class-delimiter{color:#a3685a}code .class-name{color:#a3685a}code .nil{color:#4d4d4c}code .boolean{color:#4d4d4c}code .number{color:#4271ae}code .character{color:#a3685a}code .string{color:#3e999f}code .keyword{color:#4271ae}code .symbol{color:#3e999f}code .delimiter{color:#8959a8}code .function-symbol{color:#8959a8}code .tag{color:#a3685a}code .insertion{color:#718c00}code .deletion{color:#c82829}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.header,cljs.core.last(runs)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["cols-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.chui.ui.col_count())].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.test_selector], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.history,runs], null),((runs_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.results], null):null),((runs_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.assertion_details], null):null)], null)], null);
});
lambdaisland.chui.ui.run_tests = (function lambdaisland$chui$ui$run_tests(){
var tests = lambdaisland.chui.ui.test_plan();
if(cljs.core.seq(tests)){
lambdaisland.chui.runner.run_tests.cljs$core$IFn$_invoke$arity$1(tests);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lambdaisland.chui.ui.ui_state,cljs.core.dissoc,new cljs.core.Keyword(null,"selected-run","selected-run",1107119239),new cljs.core.Keyword(null,"selected-tests","selected-tests",-701300271));
} else {
return null;
}
});
lambdaisland.chui.ui.terminate_BANG_ = (function lambdaisland$chui$ui$terminate_BANG_(done){
return lambdaisland.chui.runner.terminate_BANG_.cljs$core$IFn$_invoke$arity$1(done);
});
lambdaisland.chui.ui.render_BANG_ = (function lambdaisland$chui$ui$render_BANG_(element){
lambdaisland.chui.ui.set_state_from_location();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.ui.app], null),element);
});

//# sourceMappingURL=lambdaisland.chui.ui.js.map
