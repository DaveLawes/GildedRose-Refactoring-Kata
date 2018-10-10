"use strict";

describe("Shop", function() {
  var item;

  describe(".updateQuality()", function() {

    it("returns an array of objects", function() {
      const gildedRose = new Shop();
      const items = gildedRose.updateQuality();
      expect(items.constructor).toEqual(Array)
    });

    describe("given a normal item", function() {

      it("invokes updateNormalItem", function() {
        const gildedRose = new Shop([{ name: "Bread" }]);
        spyOn(gildedRose, 'updateNormalItem');
        gildedRose.updateQuality();
        expect(gildedRose.updateNormalItem).toHaveBeenCalled();
      });

    });

    describe("given aged brie", function() {

      it("invokes updateAgedBrie", function() {
        const gildedRose = new Shop([{ name: "Aged Brie" }]);
        spyOn(gildedRose, 'updateAgedBrie');
        gildedRose.updateQuality();
        expect(gildedRose.updateAgedBrie).toHaveBeenCalled();
      });

    });

    describe("given backstage passes", function() {

      it("invokes updateBackstagePasses", function() {
        const gildedRose = new Shop([{ name: "Backstage passes" }]);
        spyOn(gildedRose, 'updateBackstagePasses');
        gildedRose.updateQuality();
        expect(gildedRose.updateBackstagePasses).toHaveBeenCalled();
      });

    });
  });
});
