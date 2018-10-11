'use strict';

describe('Update', function() {

  describe('.agedBrie', function() {

    let update = new Update();

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
      expect(updateAgedBrie(item).quality).toEqual(6);
    });

    it('caps highest quality at 50', function() {
      let item = { name: 'Aged Brie', sellIn: 0, quality: 49 };
      expect(updateAgedBrie(item).quality).toEqual(50);
    });

  });

});
