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

  describe('.backstagePasses()', function() {

    it('decreases sellIn by 1', function() {
      let item = { name: 'Backstage passes', sellIn: 1, quality: 4 };
      expect(update.backstagePasses(item).sellIn).toEqual(0);
    });

    it('when sellIn > 10, increases the quality by 1', function() {
      let item = { name: 'Backstage passes', sellIn: 12, quality: 4 };
      expect(update.backstagePasses(item).quality).toEqual(5);
    });

    it('when 5 < sellIn <= 10, increases the quality by 2', function() {
      let item = { name: 'Backstage passes', sellIn: 7, quality: 4 };
      expect(update.backstagePasses(item).quality).toEqual(6);
    });

    it('when 0 <= sellIn <= 5, increases the quality by 3', function() {
      let item = { name: 'Backstage passes', sellIn: 5, quality: 4 };
      expect(update.backstagePasses(item).quality).toEqual(7);
    });

    it('caps highest quality at 50', function() {
      let item = { name: 'Backstage passes', sellIn: 1, quality: 49 };
      expect(update.backstagePasses(item).quality).toEqual(50);
    });

    it('when sellIn < 0, quality equals 0', function() {
      let item = { name: 'Backstage passes', sellIn: 0, quality: 50 };
      expect(update.backstagePasses(item).quality).toEqual(0);
    });

  });

  describe('.conjured()', function() {

    it('decreases sellIn by 1', function() {
      let item = { name: 'Conjured Mana Cake', sellIn: 1, quality: 4 };
      expect(update.conjured(item).sellIn).toEqual(0);
    });

    it('decreases quality by 2 when sellIn >= 0', function() {
      let item = { name: 'Conjured Mana Cake', sellIn: 1, quality: 4 };
      expect(update.conjured(item).quality).toEqual(2);
    });

    it('decreases quality by 4 when sellIn < 0', function() {
      let item = { name: 'Conjured Mana Cake', sellIn: 0, quality: 5 };
      expect(update.conjured(item).quality).toEqual(1);
    });

    it('caps lowest quality at 0', function() {
      let item = { name: 'Conjured Mana Cake', sellIn: 1, quality: 1 };
      expect(update.conjured(item).quality).toEqual(0);
    });

  });

});
