'use strict';

(function(exports) {
  function Update() {};

  Update.prototype.agedBrie = function(item) {
    _updateSellIn.call(this, item);
    return item;
  };

  function _updateSellIn(item) {
    item.sellIn -= 1;
  };


  exports.Update = Update;
})(this);
