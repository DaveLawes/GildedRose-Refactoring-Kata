'use strict';

describe('Shop', function() {

  describe('.updateQuality()', function() {

    let update = new Update();

    it('returns an array of objects', function() {
      const gildedRose = new Shop();
      const items = gildedRose.updateQuality();
      expect(items.constructor).toEqual(Array);
    });

    it('given a normal item: invokes update.normalItem()', function() {
      const gildedRose = new Shop([{ name: 'Bread' }], update);
      spyOn(update, 'normalItem');
      gildedRose.updateQuality();
      expect(update.normalItem).toHaveBeenCalled();
    });

    it('given aged brie: invokes update.agedBrie', function() {
      const gildedRose = new Shop([{ name: 'Aged Brie' }], update);
      spyOn(update, 'agedBrie');
      gildedRose.updateQuality();
      expect(update.agedBrie).toHaveBeenCalled();
    });

    it('given backstage passes: invokes update.backstagePasses', function() {
      const gildedRose = new Shop([{ name: 'Backstage passes' }], update);
      spyOn(update, 'backstagePasses');
      gildedRose.updateQuality();
      expect(update.backstagePasses).toHaveBeenCalled();
    });

    it('given conjured item: invokes update.conjured', function() {
      const gildedRose = new Shop([{ name: 'Conjured' }], update);
      spyOn(update, 'conjured');
      gildedRose.updateQuality();
      expect(update.conjured).toHaveBeenCalled();
    });

  });
});
