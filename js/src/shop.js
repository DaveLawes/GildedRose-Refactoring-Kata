'use strict';

(function(exports) {
  class Shop {
    constructor(items=[], type = Type) {
      this.items = items;
      this.Type = Type;
    }

    updateQuality() {
      var newItems = this.items.map(item => this.Type.getType(item));
      newItems.forEach(item => item.update());
      return newItems;
    }
  }

  exports.Shop = Shop;
})(this);
