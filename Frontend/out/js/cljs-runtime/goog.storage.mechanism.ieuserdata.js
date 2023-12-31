goog.provide("goog.storage.mechanism.IEUserData");
goog.require("goog.asserts");
goog.require("goog.iter.Iterator");
goog.require("goog.iter.StopIteration");
goog.require("goog.storage.mechanism.ErrorCode");
goog.require("goog.storage.mechanism.IterableMechanism");
goog.require("goog.structs.Map");
goog.require("goog.userAgent");
goog.storage.mechanism.IEUserData = function(storageKey, opt_storageNodeId) {
  this.storageKey_ = storageKey;
  this.storageNode_ = null;
  goog.storage.mechanism.IEUserData.base(this, "constructor");
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    if (!goog.storage.mechanism.IEUserData.storageMap_) {
      goog.storage.mechanism.IEUserData.storageMap_ = new goog.structs.Map();
    }
    this.storageNode_ = goog.storage.mechanism.IEUserData.storageMap_.get(storageKey);
    if (!this.storageNode_) {
      if (opt_storageNodeId) {
        this.storageNode_ = document.getElementById(opt_storageNodeId);
      } else {
        this.storageNode_ = document.createElement("userdata");
        this.storageNode_["addBehavior"]("#default#userData");
        document.body.appendChild(this.storageNode_);
      }
      goog.storage.mechanism.IEUserData.storageMap_.set(storageKey, this.storageNode_);
    }
    try {
      this.loadNode_();
    } catch (e) {
      this.storageNode_ = null;
    }
  }
};
goog.inherits(goog.storage.mechanism.IEUserData, goog.storage.mechanism.IterableMechanism);
goog.storage.mechanism.IEUserData.ENCODE_MAP = {".":".2E", "!":".21", "~":".7E", "*":".2A", "'":".27", "(":".28", ")":".29", "%":"."};
goog.storage.mechanism.IEUserData.storageMap_ = null;
goog.storage.mechanism.IEUserData.encodeKey_ = function(key) {
  return "_" + encodeURIComponent(key).replace(/[.!~*'()%]/g, function(c) {
    return goog.storage.mechanism.IEUserData.ENCODE_MAP[c];
  });
};
goog.storage.mechanism.IEUserData.decodeKey_ = function(key) {
  return decodeURIComponent(key.replace(/\./g, "%")).substr(1);
};
goog.storage.mechanism.IEUserData.prototype.isAvailable = function() {
  return !!this.storageNode_;
};
goog.storage.mechanism.IEUserData.prototype.set = function(key, value) {
  this.storageNode_.setAttribute(goog.storage.mechanism.IEUserData.encodeKey_(key), value);
  this.saveNode_();
};
goog.storage.mechanism.IEUserData.prototype.get = function(key) {
  var value = this.storageNode_.getAttribute(goog.storage.mechanism.IEUserData.encodeKey_(key));
  if (typeof value !== "string" && value !== null) {
    throw goog.storage.mechanism.ErrorCode.INVALID_VALUE;
  }
  return value;
};
goog.storage.mechanism.IEUserData.prototype.remove = function(key) {
  this.storageNode_.removeAttribute(goog.storage.mechanism.IEUserData.encodeKey_(key));
  this.saveNode_();
};
goog.storage.mechanism.IEUserData.prototype.getCount = function() {
  return this.getNode_().attributes.length;
};
goog.storage.mechanism.IEUserData.prototype.__iterator__ = function(opt_keys) {
  var i = 0;
  var attributes = this.getNode_().attributes;
  var newIter = new goog.iter.Iterator();
  newIter.nextValueOrThrow = function() {
    if (i >= attributes.length) {
      throw goog.iter.StopIteration;
    }
    var item = goog.asserts.assert(attributes[i++]);
    if (opt_keys) {
      return goog.storage.mechanism.IEUserData.decodeKey_(item.nodeName);
    }
    var value = item.nodeValue;
    if (typeof value !== "string") {
      throw goog.storage.mechanism.ErrorCode.INVALID_VALUE;
    }
    return value;
  };
  return newIter;
};
goog.storage.mechanism.IEUserData.prototype.clear = function() {
  var node = this.getNode_();
  for (var left = node.attributes.length; left > 0; left--) {
    node.removeAttribute(node.attributes[left - 1].nodeName);
  }
  this.saveNode_();
};
goog.storage.mechanism.IEUserData.prototype.loadNode_ = function() {
  this.storageNode_["load"](this.storageKey_);
};
goog.storage.mechanism.IEUserData.prototype.saveNode_ = function() {
  try {
    this.storageNode_["save"](this.storageKey_);
  } catch (e) {
    throw goog.storage.mechanism.ErrorCode.QUOTA_EXCEEDED;
  }
};
goog.storage.mechanism.IEUserData.prototype.getNode_ = function() {
  var doc = this.storageNode_["XMLDocument"];
  return doc.documentElement;
};

//# sourceMappingURL=goog.storage.mechanism.ieuserdata.js.map
