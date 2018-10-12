'use strict';

(function(exports) {
  function Shop(items=[], type = Type) {
    this.items = items;
    this.Type = Type;
  };

  Shop.prototype.updateQuality = function() {
    var newItems = this.items.map(item => this.Type.getType(item));
    newItems.forEach(item => item.update())
    return newItems;
  }

  exports.Shop = Shop;
})(this);
