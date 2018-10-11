'use strict';

(function(exports) {

  class Type {
    static getType(item) {
      if (item.name.toLowerCase().includes('aged brie')) {
        return new AgedBrie(item.name, item.sellIn, item.quality);
      }
      else if (item.name.toLowerCase().includes('sulfuras')) {
        return new Sulfuras(item.name, item.sellIn, item.quality);
      }
      else if (item.name.toLowerCase().includes('conjured')) {
        return new Conjured(item.name, item.sellIn, item.quality);
      }
      else if (item.name.toLowerCase().includes('backstage passes')) {
        return new BackstagePasses(item.name, item.sellIn, item.quality);
      }
      else {
        return new Normal(item.name, item.sellIn, item.quality);
      }

    }
  }

  exports.Type = Type
})(this);
