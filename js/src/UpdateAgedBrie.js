"use strict";

(function(exports) {
  function updateAgedBrie(item) {
    item.sellIn = item.sellIn - 1;

    item.quality >= 50   ? item.quality = 50
    : item.sellIn >= 0   ? item.quality += 1
                         : item.quality += 2

    return item
  }

  exports.updateAgedBrie = updateAgedBrie;

})(this);
