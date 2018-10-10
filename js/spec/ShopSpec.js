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

      it("invokes update() on UpdateNormalItem", function() {
        item = new Item("Bread", 1, 1);
        const gildedRose = new Shop([item]);
        spyOn(gildedRose, 'updateNormalItem');
        gildedRose.updateQuality();
        expect(gildedRose.updateNormalItem).toHaveBeenCalled();

      });

    });

  });

});
