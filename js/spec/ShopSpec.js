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
        item = new Item("Bread", 1, 1);
        const gildedRose = new Shop([item]);
        spyOn(gildedRose, 'updateNormalItem');
        gildedRose.updateQuality();
        expect(gildedRose.updateNormalItem).toHaveBeenCalled();
      });

    });

    describe("given aged brie", function() {

      it("invokes updateAgedBrie", function() {
        item = new Item("Aged Brie", 1, 1);
        const gildedRose = new Shop([item]);
        console.log(gildedRose);
        spyOn(gildedRose, 'updateAgedBrie');
        gildedRose.updateQuality();
        expect(gildedRose.updateAgedBrie).toHaveBeenCalled();
      });

    });
  });
});
