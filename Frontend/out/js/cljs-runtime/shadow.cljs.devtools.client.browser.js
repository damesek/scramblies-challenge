goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37839 = arguments.length;
var i__4865__auto___37840 = (0);
while(true){
if((i__4865__auto___37840 < len__4864__auto___37839)){
args__4870__auto__.push((arguments[i__4865__auto___37840]));

var G__37841 = (i__4865__auto___37840 + (1));
i__4865__auto___37840 = G__37841;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37246){
var G__37247 = cljs.core.first(seq37246);
var seq37246__$1 = cljs.core.next(seq37246);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37247,seq37246__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37253 = cljs.core.seq(sources);
var chunk__37254 = null;
var count__37255 = (0);
var i__37256 = (0);
while(true){
if((i__37256 < count__37255)){
var map__37265 = chunk__37254.cljs$core$IIndexed$_nth$arity$2(null,i__37256);
var map__37265__$1 = cljs.core.__destructure_map(map__37265);
var src = map__37265__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37266){var e_37842 = e37266;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37842);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37842.message)].join('')));
}

var G__37845 = seq__37253;
var G__37846 = chunk__37254;
var G__37847 = count__37255;
var G__37848 = (i__37256 + (1));
seq__37253 = G__37845;
chunk__37254 = G__37846;
count__37255 = G__37847;
i__37256 = G__37848;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37253);
if(temp__5804__auto__){
var seq__37253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37253__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37253__$1);
var G__37849 = cljs.core.chunk_rest(seq__37253__$1);
var G__37850 = c__4679__auto__;
var G__37851 = cljs.core.count(c__4679__auto__);
var G__37852 = (0);
seq__37253 = G__37849;
chunk__37254 = G__37850;
count__37255 = G__37851;
i__37256 = G__37852;
continue;
} else {
var map__37269 = cljs.core.first(seq__37253__$1);
var map__37269__$1 = cljs.core.__destructure_map(map__37269);
var src = map__37269__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37269__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37269__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37269__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37269__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37274){var e_37854 = e37274;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37854);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37854.message)].join('')));
}

var G__37855 = cljs.core.next(seq__37253__$1);
var G__37856 = null;
var G__37857 = (0);
var G__37858 = (0);
seq__37253 = G__37855;
chunk__37254 = G__37856;
count__37255 = G__37857;
i__37256 = G__37858;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37275 = cljs.core.seq(js_requires);
var chunk__37276 = null;
var count__37277 = (0);
var i__37278 = (0);
while(true){
if((i__37278 < count__37277)){
var js_ns = chunk__37276.cljs$core$IIndexed$_nth$arity$2(null,i__37278);
var require_str_37859 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37859);


var G__37860 = seq__37275;
var G__37861 = chunk__37276;
var G__37862 = count__37277;
var G__37863 = (i__37278 + (1));
seq__37275 = G__37860;
chunk__37276 = G__37861;
count__37277 = G__37862;
i__37278 = G__37863;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37275);
if(temp__5804__auto__){
var seq__37275__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37275__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37275__$1);
var G__37864 = cljs.core.chunk_rest(seq__37275__$1);
var G__37865 = c__4679__auto__;
var G__37866 = cljs.core.count(c__4679__auto__);
var G__37867 = (0);
seq__37275 = G__37864;
chunk__37276 = G__37865;
count__37277 = G__37866;
i__37278 = G__37867;
continue;
} else {
var js_ns = cljs.core.first(seq__37275__$1);
var require_str_37868 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37868);


var G__37869 = cljs.core.next(seq__37275__$1);
var G__37870 = null;
var G__37871 = (0);
var G__37872 = (0);
seq__37275 = G__37869;
chunk__37276 = G__37870;
count__37277 = G__37871;
i__37278 = G__37872;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37288){
var map__37289 = p__37288;
var map__37289__$1 = cljs.core.__destructure_map(map__37289);
var msg = map__37289__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37289__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37289__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37290(s__37291){
return (new cljs.core.LazySeq(null,(function (){
var s__37291__$1 = s__37291;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37291__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__37297 = cljs.core.first(xs__6360__auto__);
var map__37297__$1 = cljs.core.__destructure_map(map__37297);
var src = map__37297__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37291__$1,map__37297,map__37297__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37289,map__37289__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37290_$_iter__37292(s__37293){
return (new cljs.core.LazySeq(null,((function (s__37291__$1,map__37297,map__37297__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37289,map__37289__$1,msg,info,reload_info){
return (function (){
var s__37293__$1 = s__37293;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__37293__$1);
if(temp__5804__auto____$1){
var s__37293__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37293__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37293__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37295 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37294 = (0);
while(true){
if((i__37294 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37294);
cljs.core.chunk_append(b__37295,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37878 = (i__37294 + (1));
i__37294 = G__37878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37295),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37290_$_iter__37292(cljs.core.chunk_rest(s__37293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37295),null);
}
} else {
var warning = cljs.core.first(s__37293__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37290_$_iter__37292(cljs.core.rest(s__37293__$2)));
}
} else {
return null;
}
break;
}
});})(s__37291__$1,map__37297,map__37297__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37289,map__37289__$1,msg,info,reload_info))
,null,null));
});})(s__37291__$1,map__37297,map__37297__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37289,map__37289__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37290(cljs.core.rest(s__37291__$1)));
} else {
var G__37881 = cljs.core.rest(s__37291__$1);
s__37291__$1 = G__37881;
continue;
}
} else {
var G__37882 = cljs.core.rest(s__37291__$1);
s__37291__$1 = G__37882;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37302_37883 = cljs.core.seq(warnings);
var chunk__37303_37884 = null;
var count__37304_37885 = (0);
var i__37305_37886 = (0);
while(true){
if((i__37305_37886 < count__37304_37885)){
var map__37308_37887 = chunk__37303_37884.cljs$core$IIndexed$_nth$arity$2(null,i__37305_37886);
var map__37308_37888__$1 = cljs.core.__destructure_map(map__37308_37887);
var w_37889 = map__37308_37888__$1;
var msg_37890__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37308_37888__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37308_37888__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37308_37888__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37308_37888__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37893)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37891),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37892),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37890__$1)].join(''));


var G__37895 = seq__37302_37883;
var G__37896 = chunk__37303_37884;
var G__37897 = count__37304_37885;
var G__37898 = (i__37305_37886 + (1));
seq__37302_37883 = G__37895;
chunk__37303_37884 = G__37896;
count__37304_37885 = G__37897;
i__37305_37886 = G__37898;
continue;
} else {
var temp__5804__auto___37899 = cljs.core.seq(seq__37302_37883);
if(temp__5804__auto___37899){
var seq__37302_37900__$1 = temp__5804__auto___37899;
if(cljs.core.chunked_seq_QMARK_(seq__37302_37900__$1)){
var c__4679__auto___37901 = cljs.core.chunk_first(seq__37302_37900__$1);
var G__37902 = cljs.core.chunk_rest(seq__37302_37900__$1);
var G__37903 = c__4679__auto___37901;
var G__37904 = cljs.core.count(c__4679__auto___37901);
var G__37905 = (0);
seq__37302_37883 = G__37902;
chunk__37303_37884 = G__37903;
count__37304_37885 = G__37904;
i__37305_37886 = G__37905;
continue;
} else {
var map__37309_37907 = cljs.core.first(seq__37302_37900__$1);
var map__37309_37908__$1 = cljs.core.__destructure_map(map__37309_37907);
var w_37909 = map__37309_37908__$1;
var msg_37910__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37309_37908__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37309_37908__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37309_37908__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37309_37908__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37913)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37911),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37912),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37910__$1)].join(''));


var G__37914 = cljs.core.next(seq__37302_37900__$1);
var G__37915 = null;
var G__37916 = (0);
var G__37917 = (0);
seq__37302_37883 = G__37914;
chunk__37303_37884 = G__37915;
count__37304_37885 = G__37916;
i__37305_37886 = G__37917;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37287_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37287_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37316){
var map__37317 = p__37316;
var map__37317__$1 = cljs.core.__destructure_map(map__37317);
var msg = map__37317__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37317__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37317__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37318 = cljs.core.seq(updates);
var chunk__37320 = null;
var count__37321 = (0);
var i__37322 = (0);
while(true){
if((i__37322 < count__37321)){
var path = chunk__37320.cljs$core$IIndexed$_nth$arity$2(null,i__37322);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37625_37920 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37629_37921 = null;
var count__37630_37922 = (0);
var i__37631_37923 = (0);
while(true){
if((i__37631_37923 < count__37630_37922)){
var node_37924 = chunk__37629_37921.cljs$core$IIndexed$_nth$arity$2(null,i__37631_37923);
if(cljs.core.not(node_37924.shadow$old)){
var path_match_37925 = shadow.cljs.devtools.client.browser.match_paths(node_37924.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37925)){
var new_link_37926 = (function (){var G__37672 = node_37924.cloneNode(true);
G__37672.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37925),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37672;
})();
(node_37924.shadow$old = true);

(new_link_37926.onload = ((function (seq__37625_37920,chunk__37629_37921,count__37630_37922,i__37631_37923,seq__37318,chunk__37320,count__37321,i__37322,new_link_37926,path_match_37925,node_37924,path,map__37317,map__37317__$1,msg,updates,reload_info){
return (function (e){
var seq__37677_37927 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37679_37928 = null;
var count__37680_37929 = (0);
var i__37681_37930 = (0);
while(true){
if((i__37681_37930 < count__37680_37929)){
var map__37691_37931 = chunk__37679_37928.cljs$core$IIndexed$_nth$arity$2(null,i__37681_37930);
var map__37691_37932__$1 = cljs.core.__destructure_map(map__37691_37931);
var task_37933 = map__37691_37932__$1;
var fn_str_37934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37932__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37932__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37936 = goog.getObjectByName(fn_str_37934,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37935)].join(''));

(fn_obj_37936.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37936.cljs$core$IFn$_invoke$arity$2(path,new_link_37926) : fn_obj_37936.call(null,path,new_link_37926));


var G__37937 = seq__37677_37927;
var G__37938 = chunk__37679_37928;
var G__37939 = count__37680_37929;
var G__37940 = (i__37681_37930 + (1));
seq__37677_37927 = G__37937;
chunk__37679_37928 = G__37938;
count__37680_37929 = G__37939;
i__37681_37930 = G__37940;
continue;
} else {
var temp__5804__auto___37941 = cljs.core.seq(seq__37677_37927);
if(temp__5804__auto___37941){
var seq__37677_37942__$1 = temp__5804__auto___37941;
if(cljs.core.chunked_seq_QMARK_(seq__37677_37942__$1)){
var c__4679__auto___37943 = cljs.core.chunk_first(seq__37677_37942__$1);
var G__37944 = cljs.core.chunk_rest(seq__37677_37942__$1);
var G__37945 = c__4679__auto___37943;
var G__37946 = cljs.core.count(c__4679__auto___37943);
var G__37947 = (0);
seq__37677_37927 = G__37944;
chunk__37679_37928 = G__37945;
count__37680_37929 = G__37946;
i__37681_37930 = G__37947;
continue;
} else {
var map__37696_37948 = cljs.core.first(seq__37677_37942__$1);
var map__37696_37949__$1 = cljs.core.__destructure_map(map__37696_37948);
var task_37950 = map__37696_37949__$1;
var fn_str_37951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37696_37949__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37696_37949__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37953 = goog.getObjectByName(fn_str_37951,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37952)].join(''));

(fn_obj_37953.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37953.cljs$core$IFn$_invoke$arity$2(path,new_link_37926) : fn_obj_37953.call(null,path,new_link_37926));


var G__37954 = cljs.core.next(seq__37677_37942__$1);
var G__37955 = null;
var G__37956 = (0);
var G__37957 = (0);
seq__37677_37927 = G__37954;
chunk__37679_37928 = G__37955;
count__37680_37929 = G__37956;
i__37681_37930 = G__37957;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37924);
});})(seq__37625_37920,chunk__37629_37921,count__37630_37922,i__37631_37923,seq__37318,chunk__37320,count__37321,i__37322,new_link_37926,path_match_37925,node_37924,path,map__37317,map__37317__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37925], 0));

goog.dom.insertSiblingAfter(new_link_37926,node_37924);


var G__37958 = seq__37625_37920;
var G__37959 = chunk__37629_37921;
var G__37960 = count__37630_37922;
var G__37961 = (i__37631_37923 + (1));
seq__37625_37920 = G__37958;
chunk__37629_37921 = G__37959;
count__37630_37922 = G__37960;
i__37631_37923 = G__37961;
continue;
} else {
var G__37962 = seq__37625_37920;
var G__37963 = chunk__37629_37921;
var G__37964 = count__37630_37922;
var G__37965 = (i__37631_37923 + (1));
seq__37625_37920 = G__37962;
chunk__37629_37921 = G__37963;
count__37630_37922 = G__37964;
i__37631_37923 = G__37965;
continue;
}
} else {
var G__37966 = seq__37625_37920;
var G__37967 = chunk__37629_37921;
var G__37968 = count__37630_37922;
var G__37969 = (i__37631_37923 + (1));
seq__37625_37920 = G__37966;
chunk__37629_37921 = G__37967;
count__37630_37922 = G__37968;
i__37631_37923 = G__37969;
continue;
}
} else {
var temp__5804__auto___37970 = cljs.core.seq(seq__37625_37920);
if(temp__5804__auto___37970){
var seq__37625_37971__$1 = temp__5804__auto___37970;
if(cljs.core.chunked_seq_QMARK_(seq__37625_37971__$1)){
var c__4679__auto___37972 = cljs.core.chunk_first(seq__37625_37971__$1);
var G__37973 = cljs.core.chunk_rest(seq__37625_37971__$1);
var G__37974 = c__4679__auto___37972;
var G__37975 = cljs.core.count(c__4679__auto___37972);
var G__37976 = (0);
seq__37625_37920 = G__37973;
chunk__37629_37921 = G__37974;
count__37630_37922 = G__37975;
i__37631_37923 = G__37976;
continue;
} else {
var node_37977 = cljs.core.first(seq__37625_37971__$1);
if(cljs.core.not(node_37977.shadow$old)){
var path_match_37978 = shadow.cljs.devtools.client.browser.match_paths(node_37977.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37978)){
var new_link_37979 = (function (){var G__37697 = node_37977.cloneNode(true);
G__37697.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37978),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37697;
})();
(node_37977.shadow$old = true);

(new_link_37979.onload = ((function (seq__37625_37920,chunk__37629_37921,count__37630_37922,i__37631_37923,seq__37318,chunk__37320,count__37321,i__37322,new_link_37979,path_match_37978,node_37977,seq__37625_37971__$1,temp__5804__auto___37970,path,map__37317,map__37317__$1,msg,updates,reload_info){
return (function (e){
var seq__37700_37980 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37702_37981 = null;
var count__37703_37982 = (0);
var i__37704_37983 = (0);
while(true){
if((i__37704_37983 < count__37703_37982)){
var map__37719_37984 = chunk__37702_37981.cljs$core$IIndexed$_nth$arity$2(null,i__37704_37983);
var map__37719_37985__$1 = cljs.core.__destructure_map(map__37719_37984);
var task_37986 = map__37719_37985__$1;
var fn_str_37987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37719_37985__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37719_37985__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37990 = goog.getObjectByName(fn_str_37987,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37988)].join(''));

(fn_obj_37990.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37990.cljs$core$IFn$_invoke$arity$2(path,new_link_37979) : fn_obj_37990.call(null,path,new_link_37979));


var G__37991 = seq__37700_37980;
var G__37992 = chunk__37702_37981;
var G__37993 = count__37703_37982;
var G__37994 = (i__37704_37983 + (1));
seq__37700_37980 = G__37991;
chunk__37702_37981 = G__37992;
count__37703_37982 = G__37993;
i__37704_37983 = G__37994;
continue;
} else {
var temp__5804__auto___37995__$1 = cljs.core.seq(seq__37700_37980);
if(temp__5804__auto___37995__$1){
var seq__37700_37996__$1 = temp__5804__auto___37995__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37700_37996__$1)){
var c__4679__auto___37997 = cljs.core.chunk_first(seq__37700_37996__$1);
var G__37998 = cljs.core.chunk_rest(seq__37700_37996__$1);
var G__37999 = c__4679__auto___37997;
var G__38000 = cljs.core.count(c__4679__auto___37997);
var G__38001 = (0);
seq__37700_37980 = G__37998;
chunk__37702_37981 = G__37999;
count__37703_37982 = G__38000;
i__37704_37983 = G__38001;
continue;
} else {
var map__37724_38002 = cljs.core.first(seq__37700_37996__$1);
var map__37724_38003__$1 = cljs.core.__destructure_map(map__37724_38002);
var task_38004 = map__37724_38003__$1;
var fn_str_38005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37724_38003__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37724_38003__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38007 = goog.getObjectByName(fn_str_38005,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38006)].join(''));

(fn_obj_38007.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38007.cljs$core$IFn$_invoke$arity$2(path,new_link_37979) : fn_obj_38007.call(null,path,new_link_37979));


var G__38008 = cljs.core.next(seq__37700_37996__$1);
var G__38009 = null;
var G__38010 = (0);
var G__38011 = (0);
seq__37700_37980 = G__38008;
chunk__37702_37981 = G__38009;
count__37703_37982 = G__38010;
i__37704_37983 = G__38011;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37977);
});})(seq__37625_37920,chunk__37629_37921,count__37630_37922,i__37631_37923,seq__37318,chunk__37320,count__37321,i__37322,new_link_37979,path_match_37978,node_37977,seq__37625_37971__$1,temp__5804__auto___37970,path,map__37317,map__37317__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37978], 0));

goog.dom.insertSiblingAfter(new_link_37979,node_37977);


var G__38012 = cljs.core.next(seq__37625_37971__$1);
var G__38013 = null;
var G__38014 = (0);
var G__38015 = (0);
seq__37625_37920 = G__38012;
chunk__37629_37921 = G__38013;
count__37630_37922 = G__38014;
i__37631_37923 = G__38015;
continue;
} else {
var G__38016 = cljs.core.next(seq__37625_37971__$1);
var G__38017 = null;
var G__38018 = (0);
var G__38019 = (0);
seq__37625_37920 = G__38016;
chunk__37629_37921 = G__38017;
count__37630_37922 = G__38018;
i__37631_37923 = G__38019;
continue;
}
} else {
var G__38020 = cljs.core.next(seq__37625_37971__$1);
var G__38021 = null;
var G__38022 = (0);
var G__38023 = (0);
seq__37625_37920 = G__38020;
chunk__37629_37921 = G__38021;
count__37630_37922 = G__38022;
i__37631_37923 = G__38023;
continue;
}
}
} else {
}
}
break;
}


var G__38024 = seq__37318;
var G__38025 = chunk__37320;
var G__38026 = count__37321;
var G__38027 = (i__37322 + (1));
seq__37318 = G__38024;
chunk__37320 = G__38025;
count__37321 = G__38026;
i__37322 = G__38027;
continue;
} else {
var G__38028 = seq__37318;
var G__38029 = chunk__37320;
var G__38030 = count__37321;
var G__38031 = (i__37322 + (1));
seq__37318 = G__38028;
chunk__37320 = G__38029;
count__37321 = G__38030;
i__37322 = G__38031;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37318);
if(temp__5804__auto__){
var seq__37318__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37318__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37318__$1);
var G__38033 = cljs.core.chunk_rest(seq__37318__$1);
var G__38034 = c__4679__auto__;
var G__38035 = cljs.core.count(c__4679__auto__);
var G__38036 = (0);
seq__37318 = G__38033;
chunk__37320 = G__38034;
count__37321 = G__38035;
i__37322 = G__38036;
continue;
} else {
var path = cljs.core.first(seq__37318__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37728_38037 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37732_38038 = null;
var count__37733_38039 = (0);
var i__37734_38040 = (0);
while(true){
if((i__37734_38040 < count__37733_38039)){
var node_38041 = chunk__37732_38038.cljs$core$IIndexed$_nth$arity$2(null,i__37734_38040);
if(cljs.core.not(node_38041.shadow$old)){
var path_match_38042 = shadow.cljs.devtools.client.browser.match_paths(node_38041.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38042)){
var new_link_38043 = (function (){var G__37770 = node_38041.cloneNode(true);
G__37770.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38042),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37770;
})();
(node_38041.shadow$old = true);

(new_link_38043.onload = ((function (seq__37728_38037,chunk__37732_38038,count__37733_38039,i__37734_38040,seq__37318,chunk__37320,count__37321,i__37322,new_link_38043,path_match_38042,node_38041,path,seq__37318__$1,temp__5804__auto__,map__37317,map__37317__$1,msg,updates,reload_info){
return (function (e){
var seq__37771_38044 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37773_38046 = null;
var count__37774_38047 = (0);
var i__37775_38048 = (0);
while(true){
if((i__37775_38048 < count__37774_38047)){
var map__37785_38049 = chunk__37773_38046.cljs$core$IIndexed$_nth$arity$2(null,i__37775_38048);
var map__37785_38050__$1 = cljs.core.__destructure_map(map__37785_38049);
var task_38051 = map__37785_38050__$1;
var fn_str_38052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785_38050__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785_38050__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38054 = goog.getObjectByName(fn_str_38052,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38053)].join(''));

(fn_obj_38054.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38054.cljs$core$IFn$_invoke$arity$2(path,new_link_38043) : fn_obj_38054.call(null,path,new_link_38043));


var G__38055 = seq__37771_38044;
var G__38056 = chunk__37773_38046;
var G__38057 = count__37774_38047;
var G__38058 = (i__37775_38048 + (1));
seq__37771_38044 = G__38055;
chunk__37773_38046 = G__38056;
count__37774_38047 = G__38057;
i__37775_38048 = G__38058;
continue;
} else {
var temp__5804__auto___38059__$1 = cljs.core.seq(seq__37771_38044);
if(temp__5804__auto___38059__$1){
var seq__37771_38060__$1 = temp__5804__auto___38059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37771_38060__$1)){
var c__4679__auto___38061 = cljs.core.chunk_first(seq__37771_38060__$1);
var G__38062 = cljs.core.chunk_rest(seq__37771_38060__$1);
var G__38063 = c__4679__auto___38061;
var G__38064 = cljs.core.count(c__4679__auto___38061);
var G__38065 = (0);
seq__37771_38044 = G__38062;
chunk__37773_38046 = G__38063;
count__37774_38047 = G__38064;
i__37775_38048 = G__38065;
continue;
} else {
var map__37791_38066 = cljs.core.first(seq__37771_38060__$1);
var map__37791_38067__$1 = cljs.core.__destructure_map(map__37791_38066);
var task_38068 = map__37791_38067__$1;
var fn_str_38069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37791_38067__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37791_38067__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38071 = goog.getObjectByName(fn_str_38069,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38070)].join(''));

(fn_obj_38071.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38071.cljs$core$IFn$_invoke$arity$2(path,new_link_38043) : fn_obj_38071.call(null,path,new_link_38043));


var G__38072 = cljs.core.next(seq__37771_38060__$1);
var G__38073 = null;
var G__38074 = (0);
var G__38075 = (0);
seq__37771_38044 = G__38072;
chunk__37773_38046 = G__38073;
count__37774_38047 = G__38074;
i__37775_38048 = G__38075;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38041);
});})(seq__37728_38037,chunk__37732_38038,count__37733_38039,i__37734_38040,seq__37318,chunk__37320,count__37321,i__37322,new_link_38043,path_match_38042,node_38041,path,seq__37318__$1,temp__5804__auto__,map__37317,map__37317__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38042], 0));

goog.dom.insertSiblingAfter(new_link_38043,node_38041);


var G__38076 = seq__37728_38037;
var G__38077 = chunk__37732_38038;
var G__38078 = count__37733_38039;
var G__38079 = (i__37734_38040 + (1));
seq__37728_38037 = G__38076;
chunk__37732_38038 = G__38077;
count__37733_38039 = G__38078;
i__37734_38040 = G__38079;
continue;
} else {
var G__38080 = seq__37728_38037;
var G__38081 = chunk__37732_38038;
var G__38082 = count__37733_38039;
var G__38083 = (i__37734_38040 + (1));
seq__37728_38037 = G__38080;
chunk__37732_38038 = G__38081;
count__37733_38039 = G__38082;
i__37734_38040 = G__38083;
continue;
}
} else {
var G__38084 = seq__37728_38037;
var G__38085 = chunk__37732_38038;
var G__38086 = count__37733_38039;
var G__38087 = (i__37734_38040 + (1));
seq__37728_38037 = G__38084;
chunk__37732_38038 = G__38085;
count__37733_38039 = G__38086;
i__37734_38040 = G__38087;
continue;
}
} else {
var temp__5804__auto___38088__$1 = cljs.core.seq(seq__37728_38037);
if(temp__5804__auto___38088__$1){
var seq__37728_38089__$1 = temp__5804__auto___38088__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37728_38089__$1)){
var c__4679__auto___38090 = cljs.core.chunk_first(seq__37728_38089__$1);
var G__38091 = cljs.core.chunk_rest(seq__37728_38089__$1);
var G__38092 = c__4679__auto___38090;
var G__38093 = cljs.core.count(c__4679__auto___38090);
var G__38094 = (0);
seq__37728_38037 = G__38091;
chunk__37732_38038 = G__38092;
count__37733_38039 = G__38093;
i__37734_38040 = G__38094;
continue;
} else {
var node_38095 = cljs.core.first(seq__37728_38089__$1);
if(cljs.core.not(node_38095.shadow$old)){
var path_match_38096 = shadow.cljs.devtools.client.browser.match_paths(node_38095.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38096)){
var new_link_38097 = (function (){var G__37795 = node_38095.cloneNode(true);
G__37795.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38096),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37795;
})();
(node_38095.shadow$old = true);

(new_link_38097.onload = ((function (seq__37728_38037,chunk__37732_38038,count__37733_38039,i__37734_38040,seq__37318,chunk__37320,count__37321,i__37322,new_link_38097,path_match_38096,node_38095,seq__37728_38089__$1,temp__5804__auto___38088__$1,path,seq__37318__$1,temp__5804__auto__,map__37317,map__37317__$1,msg,updates,reload_info){
return (function (e){
var seq__37799_38098 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37801_38099 = null;
var count__37802_38100 = (0);
var i__37803_38101 = (0);
while(true){
if((i__37803_38101 < count__37802_38100)){
var map__37807_38102 = chunk__37801_38099.cljs$core$IIndexed$_nth$arity$2(null,i__37803_38101);
var map__37807_38103__$1 = cljs.core.__destructure_map(map__37807_38102);
var task_38104 = map__37807_38103__$1;
var fn_str_38105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37807_38103__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37807_38103__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38107 = goog.getObjectByName(fn_str_38105,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38106)].join(''));

(fn_obj_38107.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38107.cljs$core$IFn$_invoke$arity$2(path,new_link_38097) : fn_obj_38107.call(null,path,new_link_38097));


var G__38108 = seq__37799_38098;
var G__38109 = chunk__37801_38099;
var G__38110 = count__37802_38100;
var G__38111 = (i__37803_38101 + (1));
seq__37799_38098 = G__38108;
chunk__37801_38099 = G__38109;
count__37802_38100 = G__38110;
i__37803_38101 = G__38111;
continue;
} else {
var temp__5804__auto___38112__$2 = cljs.core.seq(seq__37799_38098);
if(temp__5804__auto___38112__$2){
var seq__37799_38113__$1 = temp__5804__auto___38112__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37799_38113__$1)){
var c__4679__auto___38114 = cljs.core.chunk_first(seq__37799_38113__$1);
var G__38115 = cljs.core.chunk_rest(seq__37799_38113__$1);
var G__38116 = c__4679__auto___38114;
var G__38117 = cljs.core.count(c__4679__auto___38114);
var G__38118 = (0);
seq__37799_38098 = G__38115;
chunk__37801_38099 = G__38116;
count__37802_38100 = G__38117;
i__37803_38101 = G__38118;
continue;
} else {
var map__37808_38119 = cljs.core.first(seq__37799_38113__$1);
var map__37808_38120__$1 = cljs.core.__destructure_map(map__37808_38119);
var task_38121 = map__37808_38120__$1;
var fn_str_38122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37808_38120__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37808_38120__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38124 = goog.getObjectByName(fn_str_38122,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38123)].join(''));

(fn_obj_38124.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38124.cljs$core$IFn$_invoke$arity$2(path,new_link_38097) : fn_obj_38124.call(null,path,new_link_38097));


var G__38125 = cljs.core.next(seq__37799_38113__$1);
var G__38126 = null;
var G__38127 = (0);
var G__38128 = (0);
seq__37799_38098 = G__38125;
chunk__37801_38099 = G__38126;
count__37802_38100 = G__38127;
i__37803_38101 = G__38128;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38095);
});})(seq__37728_38037,chunk__37732_38038,count__37733_38039,i__37734_38040,seq__37318,chunk__37320,count__37321,i__37322,new_link_38097,path_match_38096,node_38095,seq__37728_38089__$1,temp__5804__auto___38088__$1,path,seq__37318__$1,temp__5804__auto__,map__37317,map__37317__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38096], 0));

goog.dom.insertSiblingAfter(new_link_38097,node_38095);


var G__38129 = cljs.core.next(seq__37728_38089__$1);
var G__38130 = null;
var G__38131 = (0);
var G__38132 = (0);
seq__37728_38037 = G__38129;
chunk__37732_38038 = G__38130;
count__37733_38039 = G__38131;
i__37734_38040 = G__38132;
continue;
} else {
var G__38133 = cljs.core.next(seq__37728_38089__$1);
var G__38134 = null;
var G__38135 = (0);
var G__38136 = (0);
seq__37728_38037 = G__38133;
chunk__37732_38038 = G__38134;
count__37733_38039 = G__38135;
i__37734_38040 = G__38136;
continue;
}
} else {
var G__38137 = cljs.core.next(seq__37728_38089__$1);
var G__38138 = null;
var G__38139 = (0);
var G__38140 = (0);
seq__37728_38037 = G__38137;
chunk__37732_38038 = G__38138;
count__37733_38039 = G__38139;
i__37734_38040 = G__38140;
continue;
}
}
} else {
}
}
break;
}


var G__38141 = cljs.core.next(seq__37318__$1);
var G__38142 = null;
var G__38143 = (0);
var G__38144 = (0);
seq__37318 = G__38141;
chunk__37320 = G__38142;
count__37321 = G__38143;
i__37322 = G__38144;
continue;
} else {
var G__38145 = cljs.core.next(seq__37318__$1);
var G__38146 = null;
var G__38147 = (0);
var G__38148 = (0);
seq__37318 = G__38145;
chunk__37320 = G__38146;
count__37321 = G__38147;
i__37322 = G__38148;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37809){
var map__37810 = p__37809;
var map__37810__$1 = cljs.core.__destructure_map(map__37810);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37810__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37811){
var map__37812 = p__37811;
var map__37812__$1 = cljs.core.__destructure_map(map__37812);
var _ = map__37812__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37818,done,error){
var map__37819 = p__37818;
var map__37819__$1 = cljs.core.__destructure_map(map__37819);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37819__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37820,done,error){
var map__37821 = p__37820;
var map__37821__$1 = cljs.core.__destructure_map(map__37821);
var msg = map__37821__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37821__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37821__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37821__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37822){
var map__37823 = p__37822;
var map__37823__$1 = cljs.core.__destructure_map(map__37823);
var src = map__37823__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37823__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37824 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37824) : done.call(null,G__37824));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37825){
var map__37826 = p__37825;
var map__37826__$1 = cljs.core.__destructure_map(map__37826);
var msg__$1 = map__37826__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37826__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37827){var ex = e37827;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37828){
var map__37829 = p__37828;
var map__37829__$1 = cljs.core.__destructure_map(map__37829);
var env = map__37829__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37831){
var map__37832 = p__37831;
var map__37832__$1 = cljs.core.__destructure_map(map__37832);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37832__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37832__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37833){
var map__37834 = p__37833;
var map__37834__$1 = cljs.core.__destructure_map(map__37834);
var svc = map__37834__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
