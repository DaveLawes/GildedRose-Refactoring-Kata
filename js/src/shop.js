"use strict";

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      const item = this.items[i] // use item throughout case statement for ease of reading

      this._updateSellIn(item)

      switch(true) {

        case(this._isNormal(item.name)):
          item.quality === 0 ? item.quality =  0
          : item.sellIn >= 0 ? item.quality -= 1
                             : item.quality -= 2
          break;

        case(this._isAgedBrie(item.name)):
          item.quality >= 50   ? item.quality = 50
          : item.sellIn >= 0   ? item.quality += 1
                               : item.quality += 2

          break;

        case(this._isBackstagePasses(item.name)):

          switch(true) {
            case(item.sellIn < 0):
              item.quality = 0;
            break;

            case(item.sellIn >=0 && item.sellIn <= 5):
              item.quality += 3;
            break;

            case(item.sellIn >5 && item.sellIn <= 10):
              item.quality += 2;
            break;

            case(item.sellIn > 10):
              item.quality += 1;
            break;
          }
      }
    }
    return this.items;
  }

  _updateSellIn(item) {
    if (!this._isSulfuras(item.name)) {
      item.sellIn = item.sellIn - 1;
    }
  }

  _isNormal(item_name) {
    const validation = name =>
      name.search("Sulfuras") !== -1           ? false
      : name.search("Aged Brie") !== -1        ? false
      : name.search("Backstage passes") !== -1 ? false
                                               : true
    return validation(item_name);
  }

  _isSulfuras(item_name) {
    const validation = name =>
      item_name.search("Sulfuras") > -1 ? true : false;

    return validation(item_name);
  }

  _isAgedBrie(item_name) {
    const validation = name =>
      item_name.search("Aged Brie") > -1 ? true : false;

    return validation(item_name);
  }

  _isBackstagePasses(item_name) {
    const validation = name =>
      item_name.search("Backstage passes") > -1 ? true : false;

    return validation(item_name);
  }
}
