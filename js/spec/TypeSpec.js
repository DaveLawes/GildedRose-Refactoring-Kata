'use strict';

describe('Type', function() {

  describe('.getType()', function() {

    let agedBrie = function(){};
    let sulfuras = function(){};
    let conjured = function(){};
    let backstagePasses = function(){};
    let normal = function(){};

    it('given name = Aged Brie returns an AgedBrie object', function() {
      let item = { name: 'Aged Brie', sellIn: 1, quality: 1 }
      expect(Type.getType(item, agedBrie).constructor).toEqual(agedBrie)
    });

    it('given name = Sulfuras returns a Sulfuras object', function() {
      let item = { name: 'Sulfuras', sellIn: 1, quality: 1 }
      expect(Type.getType(item, agedBrie, sulfuras).constructor).toEqual(sulfuras)
    });

    it('given name = Conjured returns a Conjured object', function() {
      let item = { name: 'Conjured', sellIn: 1, quality: 1 }
      expect(Type.getType(item, agedBrie, sulfuras, conjured).constructor).toEqual(conjured)
    });

    it('given name = Backstage passes returns a BackstagePasses object', function() {
      let item = { name: 'Backstage passes', sellIn: 1, quality: 1 }
      expect(Type.getType(item, agedBrie, sulfuras, conjured, backstagePasses).constructor).toEqual(backstagePasses)
    });

    it('otherwise returns a Normal object', function() {
      let item = { name: 'Otherwise', sellIn: 1, quality: 1 }
      expect(Type.getType(item, agedBrie, sulfuras, conjured, backstagePasses, normal).constructor).toEqual(normal)
    });
  });

});
