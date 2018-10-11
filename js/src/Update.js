'use strict';

(function(exports) {
  function Update() {};

  Update.prototype.agedBrie = function(item) {
    _updateSellIn.call(this, item);
    item.sellIn >= 0   ? item.quality += 1 : item.quality += 2;
    item.quality >= 50 ? item.quality = 50 : null;
    return item;
  };

  function _updateSellIn(item) {
    item.sellIn -= 1;
  };

  exports.Update = Update;
})(this);
