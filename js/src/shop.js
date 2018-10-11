'use strict';

(function(exports) {
  function Shop(items=[], type = Type) {
    this.items = items;
    this.Type = Type;
  };

  Shop.prototype.updateQuality = function() {
    var new_items = this.items.map(item => this.Type.getType(item));
    new_items.forEach(item => item.update())
    return new_items;
  }

  exports.Shop = Shop;
})(this);
