'use strict';

describe('Update', function() {

  let update = new Update();

  describe('.agedBrie()', function() {

    it('decreases sellIn by 1', function() {
      let item = { name: 'Aged Brie', sellIn: 1, quality: 4 };
      expect(update.agedBrie(item).sellIn).toEqual(0);
    });

    it('increases quality by 1 when sellIn >= 0', function() {
      let item = { name: 'Aged Brie', sellIn: 1, quality: 4 };
      expect(update.agedBrie(item).quality).toEqual(5);
    });

    it('increases quality by 2 when sellIn < 0', function() {
      let item = { name: 'Aged Brie', sellIn: 0, quality: 4 };
      expect(update.agedBrie(item).quality).toEqual(6);
    });

    it('caps highest quality at 50', function() {
      let item = { name: 'Aged Brie', sellIn: 0, quality: 49 };
      expect(update.agedBrie(item).quality).toEqual(50);
    });

  });

  describe('.normalItem()', function() {

    it('decreases sellIn by 1', function() {
      let item = { name: 'Bread', sellIn: 1, quality: 4 };
      expect(update.normalItem(item).sellIn).toEqual(0);
    });

    it('decreases quality by 1 when sellIn >= 0', function() {
      let item = { name: 'Bread', sellIn: 1, quality: 4 };
      expect(update.normalItem(item).quality).toEqual(3);
    });

    it('decreases quality by 2 when sellIn < 0', function() {
      let item = { name: 'Bread', sellIn: 0, quality: 4 };
      expect(update.normalItem(item).quality).toEqual(2);
    });

    it('caps lowest quality at 0', function() {
      let item = { name: 'Bread', sellIn: 1, quality: 0 };
      expect(update.normalItem(item).quality).toEqual(0);
    });

  });

});
