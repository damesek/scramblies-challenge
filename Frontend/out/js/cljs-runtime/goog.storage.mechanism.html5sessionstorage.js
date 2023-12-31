goog.provide("goog.storage.mechanism.HTML5SessionStorage");
goog.require("goog.storage.mechanism.HTML5WebStorage");
goog.storage.mechanism.HTML5SessionStorage = function() {
  var storage = null;
  try {
    storage = window.sessionStorage || null;
  } catch (e) {
  }
  goog.storage.mechanism.HTML5SessionStorage.base(this, "constructor", storage);
};
goog.inherits(goog.storage.mechanism.HTML5SessionStorage, goog.storage.mechanism.HTML5WebStorage);

//# sourceMappingURL=goog.storage.mechanism.html5sessionstorage.js.map
