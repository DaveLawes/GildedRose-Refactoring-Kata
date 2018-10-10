describe("Shop", function() {
  var item;

  describe(".updateQuality()", function() {

    it("returns an array of objects", function() {
      const gildedRose = new Shop();
      const items = gildedRose.updateQuality();
      expect(items.constructor).toEqual(Array)
    });

    describe("given a normal item", function() {

      beforeEach(function() {
        item = new Item("Bread", 1, 1);
        const gildedRose = new Shop([item]);
        gildedRose.updateQuality();
      });

      it("reduces the sellIn value by 1", function() {
        expect(item.sellIn).toEqual(0);
      });

      it("reduces the quality value by 1", function() {
        expect(item.quality).toEqual(0);
      });

      it("caps quality at 0", function() {
        const gildedRose = new Shop([item]);
        gildedRose.updateQuality();
        expect(item.quality).toEqual(0);
      });

    });

  });

});
