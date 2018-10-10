"use strict";

(function(exports) {
  function updateNormalItem(item) {
    item.sellIn = item.sellIn - 1;

    item.quality === 0 ? item.quality =  0
    : item.sellIn >= 0 ? item.quality -= 1
                       : item.quality -= 2

    return item
  }

  exports.updateNormalItem = updateNormalItem;

})(this);
