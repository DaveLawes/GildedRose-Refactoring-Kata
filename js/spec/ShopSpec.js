'use strict';

describe('Shop', function() {

  describe('.updateQuality()', function() {

    let type = Type;
    let item = { update: function(){} };
    let gildedRose = new Shop([item, type])
    var items;

    beforeEach(function(){
      spyOn(Type, 'getType').and.returnValue(item);
      spyOn(item, 'update')
      items = gildedRose.updateQuality();
    })

    it('returns an array of objects', function() {
      expect(items.constructor).toEqual(Array);
    });

    it('invokes Type.getType', function() {
      expect(type.getType).toHaveBeenCalled();
    });

    it('invokes .update() on item', function() {
      expect(item.update).toHaveBeenCalled();
    });

  });
});
