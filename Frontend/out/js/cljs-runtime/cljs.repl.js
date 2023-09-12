goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35466){
var map__35468 = p__35466;
var map__35468__$1 = cljs.core.__destructure_map(map__35468);
var m = map__35468__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35468__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35476_35748 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35477_35749 = null;
var count__35478_35750 = (0);
var i__35480_35751 = (0);
while(true){
if((i__35480_35751 < count__35478_35750)){
var f_35752 = chunk__35477_35749.cljs$core$IIndexed$_nth$arity$2(null,i__35480_35751);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35752], 0));


var G__35753 = seq__35476_35748;
var G__35754 = chunk__35477_35749;
var G__35755 = count__35478_35750;
var G__35756 = (i__35480_35751 + (1));
seq__35476_35748 = G__35753;
chunk__35477_35749 = G__35754;
count__35478_35750 = G__35755;
i__35480_35751 = G__35756;
continue;
} else {
var temp__5804__auto___35757 = cljs.core.seq(seq__35476_35748);
if(temp__5804__auto___35757){
var seq__35476_35758__$1 = temp__5804__auto___35757;
if(cljs.core.chunked_seq_QMARK_(seq__35476_35758__$1)){
var c__4679__auto___35759 = cljs.core.chunk_first(seq__35476_35758__$1);
var G__35760 = cljs.core.chunk_rest(seq__35476_35758__$1);
var G__35761 = c__4679__auto___35759;
var G__35762 = cljs.core.count(c__4679__auto___35759);
var G__35763 = (0);
seq__35476_35748 = G__35760;
chunk__35477_35749 = G__35761;
count__35478_35750 = G__35762;
i__35480_35751 = G__35763;
continue;
} else {
var f_35764 = cljs.core.first(seq__35476_35758__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35764], 0));


var G__35765 = cljs.core.next(seq__35476_35758__$1);
var G__35766 = null;
var G__35767 = (0);
var G__35768 = (0);
seq__35476_35748 = G__35765;
chunk__35477_35749 = G__35766;
count__35478_35750 = G__35767;
i__35480_35751 = G__35768;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35773 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35773], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35773)))?cljs.core.second(arglists_35773):arglists_35773)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35498_35789 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35499_35790 = null;
var count__35500_35791 = (0);
var i__35501_35792 = (0);
while(true){
if((i__35501_35792 < count__35500_35791)){
var vec__35515_35793 = chunk__35499_35790.cljs$core$IIndexed$_nth$arity$2(null,i__35501_35792);
var name_35794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35515_35793,(0),null);
var map__35518_35795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35515_35793,(1),null);
var map__35518_35796__$1 = cljs.core.__destructure_map(map__35518_35795);
var doc_35797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35518_35796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35518_35796__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35794], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35798], 0));

if(cljs.core.truth_(doc_35797)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35797], 0));
} else {
}


var G__35815 = seq__35498_35789;
var G__35816 = chunk__35499_35790;
var G__35817 = count__35500_35791;
var G__35818 = (i__35501_35792 + (1));
seq__35498_35789 = G__35815;
chunk__35499_35790 = G__35816;
count__35500_35791 = G__35817;
i__35501_35792 = G__35818;
continue;
} else {
var temp__5804__auto___35819 = cljs.core.seq(seq__35498_35789);
if(temp__5804__auto___35819){
var seq__35498_35820__$1 = temp__5804__auto___35819;
if(cljs.core.chunked_seq_QMARK_(seq__35498_35820__$1)){
var c__4679__auto___35821 = cljs.core.chunk_first(seq__35498_35820__$1);
var G__35822 = cljs.core.chunk_rest(seq__35498_35820__$1);
var G__35823 = c__4679__auto___35821;
var G__35824 = cljs.core.count(c__4679__auto___35821);
var G__35825 = (0);
seq__35498_35789 = G__35822;
chunk__35499_35790 = G__35823;
count__35500_35791 = G__35824;
i__35501_35792 = G__35825;
continue;
} else {
var vec__35525_35826 = cljs.core.first(seq__35498_35820__$1);
var name_35827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525_35826,(0),null);
var map__35528_35828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525_35826,(1),null);
var map__35528_35829__$1 = cljs.core.__destructure_map(map__35528_35828);
var doc_35830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528_35829__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528_35829__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35827], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35831], 0));

if(cljs.core.truth_(doc_35830)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35830], 0));
} else {
}


var G__35832 = cljs.core.next(seq__35498_35820__$1);
var G__35833 = null;
var G__35834 = (0);
var G__35835 = (0);
seq__35498_35789 = G__35832;
chunk__35499_35790 = G__35833;
count__35500_35791 = G__35834;
i__35501_35792 = G__35835;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35532 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35533 = null;
var count__35534 = (0);
var i__35535 = (0);
while(true){
if((i__35535 < count__35534)){
var role = chunk__35533.cljs$core$IIndexed$_nth$arity$2(null,i__35535);
var temp__5804__auto___35838__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35838__$1)){
var spec_35839 = temp__5804__auto___35838__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35839)], 0));
} else {
}


var G__35843 = seq__35532;
var G__35844 = chunk__35533;
var G__35845 = count__35534;
var G__35846 = (i__35535 + (1));
seq__35532 = G__35843;
chunk__35533 = G__35844;
count__35534 = G__35845;
i__35535 = G__35846;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__35532);
if(temp__5804__auto____$1){
var seq__35532__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35532__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35532__$1);
var G__35847 = cljs.core.chunk_rest(seq__35532__$1);
var G__35848 = c__4679__auto__;
var G__35849 = cljs.core.count(c__4679__auto__);
var G__35850 = (0);
seq__35532 = G__35847;
chunk__35533 = G__35848;
count__35534 = G__35849;
i__35535 = G__35850;
continue;
} else {
var role = cljs.core.first(seq__35532__$1);
var temp__5804__auto___35851__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35851__$2)){
var spec_35852 = temp__5804__auto___35851__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35852)], 0));
} else {
}


var G__35853 = cljs.core.next(seq__35532__$1);
var G__35854 = null;
var G__35855 = (0);
var G__35856 = (0);
seq__35532 = G__35853;
chunk__35533 = G__35854;
count__35534 = G__35855;
i__35535 = G__35856;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35859 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35860 = cljs.core.ex_cause(t);
via = G__35859;
t = G__35860;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35612 = datafied_throwable;
var map__35612__$1 = cljs.core.__destructure_map(map__35612);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35612__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35612__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35612__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35613 = cljs.core.last(via);
var map__35613__$1 = cljs.core.__destructure_map(map__35613);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35614 = data;
var map__35614__$1 = cljs.core.__destructure_map(map__35614);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35615 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35615__$1 = cljs.core.__destructure_map(map__35615);
var top_data = map__35615__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35630 = phase;
var G__35630__$1 = (((G__35630 instanceof cljs.core.Keyword))?G__35630.fqn:null);
switch (G__35630__$1) {
case "read-source":
var map__35640 = data;
var map__35640__$1 = cljs.core.__destructure_map(map__35640);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35640__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35640__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35643 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35643__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35643,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35643);
var G__35643__$2 = (cljs.core.truth_((function (){var fexpr__35653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35653.cljs$core$IFn$_invoke$arity$1 ? fexpr__35653.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35653.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35643__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35643__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35643__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35643__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35654 = top_data;
var G__35654__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35654,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35654);
var G__35654__$2 = (cljs.core.truth_((function (){var fexpr__35659 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35659.cljs$core$IFn$_invoke$arity$1 ? fexpr__35659.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35659.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35654__$1);
var G__35654__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35654__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35654__$2);
var G__35654__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35654__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35654__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35654__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35654__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35661 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35661,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35661,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35661,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35661,(3),null);
var G__35665 = top_data;
var G__35665__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35665);
var G__35665__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35665__$1);
var G__35665__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35665__$2);
var G__35665__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35665__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35665__$4;
}

break;
case "execution":
var vec__35667 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35667,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35667,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35667,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35667,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35609_SHARP_){
var or__4253__auto__ = (p1__35609_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35670 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35670.cljs$core$IFn$_invoke$arity$1 ? fexpr__35670.cljs$core$IFn$_invoke$arity$1(p1__35609_SHARP_) : fexpr__35670.call(null,p1__35609_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35671 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35671__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35671,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35671);
var G__35671__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35671__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35671__$1);
var G__35671__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35671__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35671__$2);
var G__35671__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35671__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35671__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35671__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35671__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35630__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35678){
var map__35679 = p__35678;
var map__35679__$1 = cljs.core.__destructure_map(map__35679);
var triage_data = map__35679__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35681 = phase;
var G__35681__$1 = (((G__35681 instanceof cljs.core.Keyword))?G__35681.fqn:null);
switch (G__35681__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35683 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35684 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35685 = loc;
var G__35686 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35688_35976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35689_35977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35690_35978 = true;
var _STAR_print_fn_STAR__temp_val__35691_35979 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35690_35978);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35691_35979);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35674_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35674_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35689_35977);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35688_35976);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35683,G__35684,G__35685,G__35686) : format.call(null,G__35683,G__35684,G__35685,G__35686));

break;
case "macroexpansion":
var G__35694 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35695 = cause_type;
var G__35696 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35697 = loc;
var G__35698 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35694,G__35695,G__35696,G__35697,G__35698) : format.call(null,G__35694,G__35695,G__35696,G__35697,G__35698));

break;
case "compile-syntax-check":
var G__35700 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35701 = cause_type;
var G__35702 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35703 = loc;
var G__35704 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35700,G__35701,G__35702,G__35703,G__35704) : format.call(null,G__35700,G__35701,G__35702,G__35703,G__35704));

break;
case "compilation":
var G__35705 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35706 = cause_type;
var G__35707 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35708 = loc;
var G__35709 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35705,G__35706,G__35707,G__35708,G__35709) : format.call(null,G__35705,G__35706,G__35707,G__35708,G__35709));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35710 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35711 = symbol;
var G__35712 = loc;
var G__35713 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35715_35982 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35716_35983 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35717_35984 = true;
var _STAR_print_fn_STAR__temp_val__35718_35985 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35717_35984);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35718_35985);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35676_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35676_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35716_35983);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35715_35982);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35710,G__35711,G__35712,G__35713) : format.call(null,G__35710,G__35711,G__35712,G__35713));
} else {
var G__35720 = "Execution error%s at %s(%s).\n%s\n";
var G__35721 = cause_type;
var G__35722 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35723 = loc;
var G__35724 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35720,G__35721,G__35722,G__35723,G__35724) : format.call(null,G__35720,G__35721,G__35722,G__35723,G__35724));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35681__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
