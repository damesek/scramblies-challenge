goog.provide('lambdaisland.chui.remote');
goog.scope(function(){
  lambdaisland.chui.remote.goog$module$goog$object = goog.module.get('goog.object');
});
lambdaisland.chui.remote.init = (function lambdaisland$chui$remote$init(_){
return null;
});
goog.exportSymbol('lambdaisland.chui.remote.init', lambdaisland.chui.remote.init);
lambdaisland.glogi.set_levels(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("glogi","root","glogi/root",-77414841),new cljs.core.Keyword(null,"finest","finest",-1359568890)], null));
lambdaisland.glogi.console.install_BANG_();
lambdaisland.chui.remote.record_handler = (function lambdaisland$chui$remote$record_handler(type){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(type),(function (val){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,val);
}));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lambdaisland.funnel_client.whoami,cljs.core.assoc,new cljs.core.Keyword(null,"lambdaisland.chui.remote?","lambdaisland.chui.remote?",830521620),true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.funnel_client.transit_write_handlers,cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"default","default",-1987822328),cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (o){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(o));
}),(function (o){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
})),cljs.core.Var,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("var"),(function (rep){
return cljs.core.meta(rep);
}))]),(((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.model !== 'undefined') && (typeof matcher_combinators.model.Mismatch !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([matcher_combinators.model.Mismatch,lambdaisland.chui.remote.record_handler("matcher-combinators.model.Mismatch")]):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.model !== 'undefined') && (typeof matcher_combinators.model.Missing !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([matcher_combinators.model.Missing,lambdaisland.chui.remote.record_handler("matcher-combinators.model.Missing")]):null),(((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.model !== 'undefined') && (typeof matcher_combinators.model.Unexpected !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([matcher_combinators.model.Unexpected,lambdaisland.chui.remote.record_handler("matcher-combinators.model.Unexpected")]):null),(((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.model !== 'undefined') && (typeof matcher_combinators.model.InvalidMatcherType !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([matcher_combinators.model.InvalidMatcherType,lambdaisland.chui.remote.record_handler("matcher-combinators.model.InvalidMatcherType")]):null),(((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.model !== 'undefined') && (typeof matcher_combinators.model.InvalidMatcherContext !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([matcher_combinators.model.InvalidMatcherContext,lambdaisland.chui.remote.record_handler("matcher-combinators.model.InvalidMatcherContext")]):null),(((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.model !== 'undefined') && (typeof matcher_combinators.model.FailedPredicate !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([matcher_combinators.model.FailedPredicate,lambdaisland.chui.remote.record_handler("matcher-combinators.model.FailedPredicate")]):null),(((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.model !== 'undefined') && (typeof matcher_combinators.model.TypeMismatch !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([matcher_combinators.model.TypeMismatch,lambdaisland.chui.remote.record_handler("matcher-combinators.model.TypeMismatch")]):null)], 0));
lambdaisland.chui.remote.last_msg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(kitchen_async.promise.resolve(null));
lambdaisland.chui.remote.send_BANG_ = (function lambdaisland$chui$remote$send_BANG_(message){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lambdaisland.chui.remote.last_msg,kitchen_async.promise.then,(function (_){
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(message,(function (m){
return lambdaisland.funnel_client.send(lambdaisland.chui.remote.socket,m);
})));
}catch (e26817){var e__24768__auto__ = e26817;
return kitchen_async.promise.reject(e__24768__auto__);
}}));
});
lambdaisland.chui.remote.cljs_test_msg = (function lambdaisland$chui$remote$cljs_test_msg(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs.test","message","cljs.test/message",805969520),new cljs.core.Keyword("cljs.test","message","cljs.test/message",805969520),m,new cljs.core.Keyword("cljs.test","testing-contexts","cljs.test/testing-contexts",-805796937),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env())], null);
});
lambdaisland.chui.remote.wrap_report = (function lambdaisland$chui$remote$wrap_report(report){
return (function (m){
lambdaisland.chui.remote.send_BANG_((function (){var G__26825 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m);
var G__26825__$1 = (((G__26825 instanceof cljs.core.Keyword))?G__26825.fqn:null);
switch (G__26825__$1) {
case "fail":
return lambdaisland.chui.remote.cljs_test_msg(m);

break;
case "error":
var error = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.stacktrace.from_error(error),(function (trace){
var rendered = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__4652__auto__ = (function lambdaisland$chui$remote$wrap_report_$_iter__26837(s__26838){
return (new cljs.core.LazySeq(null,(function (){
var s__26838__$1 = s__26838;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26838__$1);
if(temp__5804__auto__){
var s__26838__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26838__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26838__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26840 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26839 = (0);
while(true){
if((i__26839 < size__4651__auto__)){
var map__26850 = cljs.core._nth(c__4650__auto__,i__26839);
var map__26850__$1 = cljs.core.__destructure_map(map__26850);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26850__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26850__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26850__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26850__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.chunk_append(b__26840,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function$)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),")"].join(''));

var G__26928 = (i__26839 + (1));
i__26839 = G__26928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26840),lambdaisland$chui$remote$wrap_report_$_iter__26837(cljs.core.chunk_rest(s__26838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26840),null);
}
} else {
var map__26851 = cljs.core.first(s__26838__$2);
var map__26851__$1 = cljs.core.__destructure_map(map__26851);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26851__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26851__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26851__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26851__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(function$)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),")"].join(''),lambdaisland$chui$remote$wrap_report_$_iter__26837(cljs.core.rest(s__26838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(trace);
})());
return lambdaisland.chui.remote.cljs_test_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("kaocha.report","printed-expression","kaocha.report/printed-expression",219822455),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error),"\n",rendered,"\n"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("kaocha.report","error-type","kaocha.report/error-type",2106778117),["js/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.name)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return error.message;
}
})()], 0)));
})));
}catch (e26826){var e__24768__auto__ = e26826;
return kitchen_async.promise.reject(e__24768__auto__);
}
break;
default:
return lambdaisland.chui.remote.cljs_test_msg(m);

}
})());

return (report.cljs$core$IFn$_invoke$arity$1 ? report.cljs$core$IFn$_invoke$arity$1(m) : report.call(null,m));
});
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.chui !== 'undefined') && (typeof lambdaisland.chui.remote !== 'undefined') && (typeof lambdaisland.chui.remote.handle_message !== 'undefined')){
} else {
lambdaisland.chui.remote.handle_message = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26852 = cljs.core.get_global_hierarchy;
return (fexpr__26852.cljs$core$IFn$_invoke$arity$0 ? fexpr__26852.cljs$core$IFn$_invoke$arity$0() : fexpr__26852.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.chui.remote","handle-message"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
lambdaisland.chui.remote.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.chui.remote",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unhandled-message","unhandled-message",-93377555),msg,new cljs.core.Keyword(null,"line","line",212345235),145], null)),null);
}));
lambdaisland.chui.remote.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (msg){
return lambdaisland.chui.remote.send_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
}));
lambdaisland.chui.remote.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-run","start-run",922749488),(function (msg){
if(cljs.core.truth_(lambdaisland.chui.runner.running_QMARK_())){
lambdaisland.chui.runner.terminate_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
}

lambdaisland.chui.runner.install_custom_reporter();

lambdaisland.chui.runner.add_test_run_BANG_(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.chui.runner.test_run(),new cljs.core.Keyword(null,"test-count","test-count",212751891),new cljs.core.Keyword(null,"test-count","test-count",212751891).cljs$core$IFn$_invoke$arity$1(msg),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remote?","remote?",-517415110),true], 0)),new cljs.core.Keyword(null,"report","report",1394055010),lambdaisland.chui.remote.wrap_report));

return lambdaisland.chui.remote.send_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"run-started","run-started",-317221527),new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(msg)], null));
}));
lambdaisland.chui.remote.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),(function (msg){
lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),(new Date()),new cljs.core.Keyword(null,"done?","done?",-1847001718),true], 0));

return lambdaisland.chui.remote.send_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"run-finished","run-finished",-1736762855),new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(msg)], null));
}));
lambdaisland.chui.remote.execute_chain = (function lambdaisland$chui$remote$execute_chain(intors){
return lambdaisland.chui.interceptor.execute(lambdaisland.chui.interceptor.enqueue(new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(lambdaisland.chui.runner.current_run()),intors));
});
lambdaisland.chui.remote.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-ns","start-ns",-432803573),(function (p__26859){
var map__26860 = p__26859;
var map__26860__$1 = cljs.core.__destructure_map(map__26860);
var msg = map__26860__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26860__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var ns_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lambdaisland.chui.test_data.test_ns_data),ns);
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.chui.remote",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("start-ns","starting","start-ns/starting",-534869162),ns_data,new cljs.core.Keyword(null,"line","line",212345235),173], null)),null);

try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.remote.execute_chain(lambdaisland.chui.runner.begin_ns_intors(ns,new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167).cljs$core$IFn$_invoke$arity$1(ns_data))),(function (ctx){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx], 0)),(function (___24774__auto__){
return lambdaisland.chui.remote.send_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns-started","ns-started",36619249),new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(msg)], null));
}));
})));
}catch (e26866){var e__24768__auto__ = e26866;
return kitchen_async.promise.reject(e__24768__auto__);
}}));
lambdaisland.chui.remote.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"finish-ns","finish-ns",821934105),(function (p__26874){
var map__26876 = p__26874;
var map__26876__$1 = cljs.core.__destructure_map(map__26876);
var msg = map__26876__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26876__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var ns_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lambdaisland.chui.test_data.test_ns_data),ns);
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.chui.remote",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("finish-ns","starting","finish-ns/starting",886639141),ns_data,new cljs.core.Keyword(null,"line","line",212345235),180], null)),null);

try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.remote.execute_chain(lambdaisland.chui.runner.end_ns_intors(ns,new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167).cljs$core$IFn$_invoke$arity$1(ns_data))),(function (ctx){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx], 0)),(function (___24774__auto__){
return lambdaisland.chui.remote.send_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns-finished","ns-finished",-1936189803),new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(msg)], null));
}));
})));
}catch (e26881){var e__24768__auto__ = e26881;
return kitchen_async.promise.reject(e__24768__auto__);
}}));
lambdaisland.chui.remote.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"run-test","run-test",1906727763),(function (p__26890){
var map__26891 = p__26890;
var map__26891__$1 = cljs.core.__destructure_map(map__26891);
var msg = map__26891__$1;
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26891__$1,new cljs.core.Keyword(null,"test","test",577538877));
var ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(test));
var ns_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lambdaisland.chui.test_data.test_ns_data),ns);
var test_data = cljs.core.some((function (p1__26887_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__26887_SHARP_))){
return p1__26887_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(ns_data));
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.remote.execute_chain(lambdaisland.chui.runner.wrap_each_fixtures(ns,lambdaisland.chui.runner.var_intors(test_data),new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977).cljs$core$IFn$_invoke$arity$1(ns_data))),(function (ctx){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx], 0)),(function (___24774__auto__){
return lambdaisland.chui.remote.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-finished","test-finished",-1609644191),new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"summary","summary",380847952),lambdaisland.chui.runner.var_summary(cljs.core.some((function (p1__26889_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__26889_SHARP_),test)){
return p1__26889_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__26888_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(p1__26888_SHARP_),ns)){
return p1__26888_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"nss","nss",338450727).cljs$core$IFn$_invoke$arity$1(lambdaisland.chui.runner.current_run())))))], null));
}));
})));
}catch (e26892){var e__24768__auto__ = e26892;
return kitchen_async.promise.reject(e__24768__auto__);
}}));
lambdaisland.chui.remote.scrub_var_data = (function lambdaisland$chui$remote$scrub_var_data(vars_data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26893_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__26893_SHARP_,new cljs.core.Keyword(null,"test","test",577538877),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760)], 0));
}),vars_data);
});
lambdaisland.chui.remote.scrub_test_data = (function lambdaisland$chui$remote$scrub_test_data(test_data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__26894_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__26894_SHARP_,new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], 0)),new cljs.core.Keyword(null,"tests","tests",-1041085625),lambdaisland.chui.remote.scrub_var_data);
}),cljs.core.val),test_data);
});
lambdaisland.chui.remote.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fetch-test-data","fetch-test-data",223915751),(function (msg){
return lambdaisland.chui.remote.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"test-data","test-data",805102338),lambdaisland.chui.remote.scrub_test_data(cljs.core.deref(lambdaisland.chui.test_data.test_ns_data))], null));
}));
lambdaisland.chui.remote.connect_BANG_ = (function lambdaisland$chui$remote$connect_BANG_(){
return (lambdaisland.chui.remote.socket = lambdaisland.funnel_client.connect(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-message","on-message",1662987808),(function (_,msg){
return lambdaisland.chui.remote.handle_message.cljs$core$IFn$_invoke$arity$1(msg);
})], null)));
});
lambdaisland.chui.remote.disconnect_BANG_ = (function lambdaisland$chui$remote$disconnect_BANG_(){
if(cljs.core.truth_(lambdaisland.chui.remote.socket)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.chui.remote",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Disconnecting funnel",new cljs.core.Keyword(null,"line","line",212345235),224], null)),null);

lambdaisland.funnel_client.disconnect_BANG_(lambdaisland.chui.remote.socket);

return (lambdaisland.chui.remote.socket = null);
} else {
return null;
}
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.chui !== 'undefined') && (typeof lambdaisland.chui.remote !== 'undefined') && (typeof lambdaisland.chui.remote.init_conn !== 'undefined')){
} else {
lambdaisland.chui.remote.init_conn = lambdaisland.chui.remote.connect_BANG_();
}
if((typeof document !== 'undefined')){
(document.title = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.funnel_client.whoami)));
} else {
}

//# sourceMappingURL=lambdaisland.chui.remote.js.map
