goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_37563 = ret;
var shift_37564__$1 = shift;
while(true){
var arr_37565 = n_37563.arr;
var subidx_37566 = (((cnt - (1)) >> shift_37564__$1) & (31));
if((shift_37564__$1 === (5))){
(arr_37565[subidx_37566] = tail_node);
} else {
var child_37568 = (arr_37565[subidx_37566]);
if((child_37568 == null)){
(arr_37565[subidx_37566] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_37564__$1 - (5)),tail_node));
} else {
var editable_child_37571 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_37568);
(arr_37565[subidx_37566] = editable_child_37571);

var G__37572 = editable_child_37571;
var G__37573 = (shift_37564__$1 - (5));
n_37563 = G__37572;
shift_37564__$1 = G__37573;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__37497 = (shift - (5));
var G__37498 = ccnt;
var G__37499 = root_edit;
var G__37500 = child;
var G__37501 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__37497,G__37498,G__37499,G__37500,G__37501) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__37497,G__37498,G__37499,G__37500,G__37501));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_37579 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_37580 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_37579,data_37580);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__37514 = (shift - (5));
var G__37515 = cnt;
var G__37516 = root_edit;
var G__37517 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__37514,G__37515,G__37516,G__37517) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__37514,G__37515,G__37516,G__37517));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__37519 = (shift - (5));
var G__37520 = child_cnt;
var G__37521 = root_edit;
var G__37522 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__37519,G__37520,G__37521,G__37522) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__37519,G__37520,G__37521,G__37522));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_37606__$1 = shift;
var node_37607 = ret;
while(true){
if((shift_37606__$1 === (0))){
var arr_37608 = node_37607.arr;
(arr_37608[(i & (31))] = val);
} else {
var arr_37609 = node_37607.arr;
var subidx_37610 = ((i >> shift_37606__$1) & (31));
var child_37611 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_37609[subidx_37610]));
(arr_37609[subidx_37610] = child_37611);

var G__37613 = (shift_37606__$1 - (5));
var G__37614 = child_37611;
shift_37606__$1 = G__37613;
node_37607 = G__37614;
continue;
}
break;
}
} else {
var arr_37615 = ret.arr;
var rngs_37616 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_37617 = ((i >> shift) & (31));
var subidx_37618__$1 = (function (){var subidx_37618__$1 = subidx_37617;
while(true){
if((i < ((rngs_37616[subidx_37618__$1]) | (0)))){
return subidx_37618__$1;
} else {
var G__37622 = (subidx_37618__$1 + (1));
subidx_37618__$1 = G__37622;
continue;
}
break;
}
})();
var i_37619__$1 = (((subidx_37618__$1 === (0)))?i:(i - (rngs_37616[(subidx_37618__$1 - (1))])));
(arr_37615[subidx_37618__$1] = (function (){var G__37550 = (shift - (5));
var G__37551 = root_edit;
var G__37552 = (arr_37615[subidx_37618__$1]);
var G__37553 = i_37619__$1;
var G__37554 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__37550,G__37551,G__37552,G__37553,G__37554) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__37550,G__37551,G__37552,G__37553,G__37554));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
