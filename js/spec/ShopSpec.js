describe("Shop", function() {
  var items;

  describe(".updateQuality()", function() {

    let item = new Item("Bread", 2, 3);

    it("returns an array of objects", function() {
      const gildedRose = new Shop([item]);
      const items = gildedRose.updateQuality();
      expect(items.constructor).toEqual(Array)
    });

  });
});
