describe("Shop", function() {
  var item;

  describe(".updateQuality()", function() {

    it("returns an array of objects", function() {
      item = new Item("Bread", 1, 1)
      const gildedRose = new Shop([item]);
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

  describe("._isNormal()", function() {

    it("returns true for normal items", function() {
      item = new Item("Bread", 5, 5);
      const gildedRose = new Shop([item]);
      expect(gildedRose._isNormal(item.name)).toEqual(true);
    });

    it("returns false for Sulfuras", function() {
      item = new Item("Sulfuras", 5, 5);
      const gildedRose = new Shop([item]);
      expect(gildedRose._isNormal(item.name)).toEqual(false);
    })

    it("returns false for Aged Brie", function() {
      item = new Item("Aged Brie", 5, 5);
      const gildedRose = new Shop([item]);
      expect(gildedRose._isNormal(item.name)).toEqual(false);
    })

  });

});
