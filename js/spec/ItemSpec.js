'use strict';

describe('Item', function() {

  var item = new Item('Bread', 5, 8);

  it('returns the name', function() {
    expect(item.name).toEqual('Bread');
  });

  it('returns the sellIn', function() {
    expect(item.sellIn).toEqual(5);
  });

  it('returns the quality', function() {
    expect(item.quality).toEqual(8);
  });

  describe('Normal', function() {

    beforeEach(function() {
      item = new Normal('Bread', 1, 4);
    });

    it('decreases sellIn by 1', function() {
      expect(item.update().sellIn).toEqual(0);
    });

    it('decreases quality by 1 when sellIn >= 0', function() {
      expect(item.update().quality).toEqual(3);
    });

    it('decreases quality by 2 when sellIn < 0', function() {
      item.update();
      expect(item.update().quality).toEqual(1);
    });

    it('caps minimum quality at 0', function() {
      let item = new Normal('Bread', 1, 0);
      expect(item.update().quality).toEqual(0);
    });
  });

  describe('AgedBrie', function() {

    beforeEach(function() {
      item = new AgedBrie('Aged Brie', 1, 4);
    });

    it('decreases sellIn by 1', function() {
      expect(item.update().sellIn).toEqual(0);
    });

    it('increases quality by 1 when sellIn >= 0', function() {
      expect(item.update().quality).toEqual(5);
    });

    it('increases quality by 2 when sellIn < 0', function() {
      item.update();
      expect(item.update().quality).toEqual(7);
    });

    it('caps maximum quality at 50', function() {
      let item = new AgedBrie('Aged Brie', 0, 49);
      expect(item.update().quality).toEqual(50);
    });

  });

  describe('BackstagePasses', function() {

    it('decreases sellIn by 1', function() {
      let item = new BackstagePasses("Backstage passes", 1, 4);
      expect(item.update().sellIn).toEqual(0);
    });

    it('when sellIn > 10, increases the quality by 1', function() {
      let item = new BackstagePasses("Backstage passes", 12, 4);
      expect(item.update().quality).toEqual(5);
    });

    it('when 5 < sellIn <= 10, increases the quality by 2', function() {
      let item = new BackstagePasses("Backstage passes", 7, 4);
      expect(item.update().quality).toEqual(6);
    });

    it('when 0 <= sellIn <= 5, increases the quality by 3', function() {
      let item = new BackstagePasses("Backstage passes", 5, 4);
      expect(item.update().quality).toEqual(7);
    });

    it('caps maximum quality at 50', function() {
      let item = new BackstagePasses("Backstage passes", 1, 49);
      expect(item.update().quality).toEqual(50);
    });

    it('when sellIn < 0, quality equals 0', function() {
      let item = new BackstagePasses("Backstage passes", 0, 50);
      expect(item.update().quality).toEqual(0);
    });

  });

  describe('Sulfuras', function() {

    it('remains static', function() {
      let item = new Sulfuras('Sulfuras', 5, 80);
      expect(item.update().quality).toEqual(80);
    });

  });

  describe('Conjured', function() {

    it('decreases sellIn by 1', function() {
      let item = new Conjured('Conjured Mana Cake', 1, 4);
      expect(item.update().sellIn).toEqual(0);
    });

    it('decreases quality by 2 when sellIn >= 0', function() {
      let item = new Conjured('Conjured Mana Cake', 1, 4);
      expect(item.update().quality).toEqual(2);
    });

    it('decreases quality by 4 when sellIn < 0', function() {
      let item = new Conjured('Conjured Mana Cake', 0, 5);
      expect(item.update().quality).toEqual(1);
    });

    it('caps minimum quality at 0', function() {
      let item = new Conjured('Conjured Mana Cake', 1, 1);
      expect(item.update().quality).toEqual(0);
    });

  });

});
