'use strict';

describe('Shop', function() {

  describe('.updateQuality()', function() {

    let update = new Update();

    it('returns an array of objects', function() {
      const gildedRose = new Shop();
      const items = gildedRose.updateQuality();
      expect(items.constructor).toEqual(Array);
    });

    describe('given a normal item', function() {

      it('invokes update.normalItem()', function() {
        const gildedRose = new Shop([{ name: 'Bread' }], update);
        spyOn(update, 'normalItem');
        gildedRose.updateQuality();
        expect(update.normalItem).toHaveBeenCalled();
      });

    });

    describe('given aged brie', function() {

      it('invokes update.agedBrie', function() {
        const gildedRose = new Shop([{ name: 'Aged Brie' }], update);
        spyOn(update, 'agedBrie');
        gildedRose.updateQuality();
        expect(update.agedBrie).toHaveBeenCalled();
      });

    });

    describe('given backstage passes', function() {

      it('invokes update.backstagePasses', function() {
        const gildedRose = new Shop([{ name: 'Backstage passes' }], update);
        spyOn(update, 'backstagePasses');
        gildedRose.updateQuality();
        expect(update.backstagePasses).toHaveBeenCalled();
      });

    });

    describe('given conjured item', function() {

      it('invokes update.conjured', function() {
        const gildedRose = new Shop([{ name: 'Conjured' }], update);
        spyOn(update, 'conjured');
        gildedRose.updateQuality();
        expect(update.conjured).toHaveBeenCalled();
      });

    });
  });
});
