describe("Update Aged Brie", function() {

  it("decreases sellIn by 1", function() {
    item = new Item("Aged Brie", 1, 4)
    expect(updateAgedBrie(item).sellIn).toEqual(0);
  });

  it("increases quality by 1 when sellIn >= 0", function() {
    item = new Item("Aged Brie", 1, 4)
    expect(updateAgedBrie(item).quality).toEqual(5);
  });

  it("increases quality by 2 when sellIn < 0", function() {
    item = new Item("Aged Brie", 0, 4)
    expect(updateAgedBrie(item).quality).toEqual(6);
  });

  it("caps highest quality at 50", function() {
    item = new Item("Aged Brie", 1, 50)
    expect(updateAgedBrie(item).quality).toEqual(50);
  });

});
