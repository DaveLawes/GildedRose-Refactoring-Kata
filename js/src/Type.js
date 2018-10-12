'use strict';

(function(exports) {

  class Type {
    static getType(item,
                    agedBrie = AgedBrie,
                    sulfuras = Sulfuras,
                    conjured = Conjured,
                    backstagePasses = BackstagePasses,
                    normal = Normal) {
      if (item.name.toLowerCase().includes('aged brie')) {
        return new agedBrie(item.name, item.sellIn, item.quality);
      }
      else if (item.name.toLowerCase().includes('sulfuras')) {
        return new sulfuras(item.name, item.sellIn, item.quality);
      }
      else if (item.name.toLowerCase().includes('conjured')) {
        return new conjured(item.name, item.sellIn, item.quality);
      }
      else if (item.name.toLowerCase().includes('backstage passes')) {
        return new backstagePasses(item.name, item.sellIn, item.quality);
      }
      else {
        return new normal(item.name, item.sellIn, item.quality);
      }

    }
  }

  exports.Type = Type;
})(this);
