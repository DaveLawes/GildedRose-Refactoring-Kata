'use strict';

describe('Update', function() {

  describe('.updateSellIn', function() {

    it('decreases sellIn by 1', function() {
      let item = { name: 'Aged Brie', sellIn: 1, quality: 4 };
      const update = new Update();
      expect(update.agedBrie(item).sellIn).toEqual(0);
    });

  });

});
