'use strict';

(function(exports) {
  class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  exports.Item = Item;
})(this);

(function(exports) {
  class Normal extends Item {
    constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
    }

    update() {
      this.sellIn -= 1;
      this.sellIn >= 0 ? this.quality -=1 : this.quality -=2;
      this.quality <= 0 ? this.quality = 0 : null;
      return this;
    }
  }
  exports.Normal = Normal;
})(this);

(function(exports) {
  class Sulfuras extends Item {
    constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
    }

    update() {
      return this;
    }
  }
  exports.Sulfuras = Sulfuras;
})(this);

(function(exports) {
  class AgedBrie extends Item {
    constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
    }

    update() {
      this.sellIn -= 1;
      this.sellIn >= 0 ? this.quality +=1 : this.quality +=2;
      this.quality >= 50 ? this.quality = 50 : null;
      return this;
    }
  }
  exports.AgedBrie = AgedBrie;
})(this);

(function(exports) {
  class BackstagePasses extends Item {
    constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
    }

    update() {
      this.sellIn -= 1;
      switch(true) {
        case(this.sellIn < 0):
          this.quality = 0;
          break;
        case(this.sellIn >= 0 && this.sellIn <= 5):
          this.quality += 3;
          break;
        case(this.sellIn > 5 && this.sellIn <= 10):
          this.quality += 2;
          break;
        case(this.sellIn > 10):
          this.quality += 1;
          break;
      }
      this.quality >= 50 ? this.quality = 50 : null;
      return this;
    }
  }
  exports.BackstagePasses = BackstagePasses;
})(this);

(function(exports) {
  class Conjured extends Item {
    constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
    }

    update() {
      this.sellIn -= 1;
      this.sellIn >= 0 ? this.quality -=2 : this.quality -=4;
      this.quality <= 0 ? this.quality = 0 : null;
      return this;
    }
  }
  exports.Conjured = Conjured;
})(this);
