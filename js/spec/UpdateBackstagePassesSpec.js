describe("Update Backstage passes", function() {

  it("decreases sellIn by 1", function() {
    item = new Item("Backstage passes", 1, 4)
    expect(updateBackstagePasses(item).sellIn).toEqual(0);
  });

  it("when sellIn > 10, increases the quality by 1", function() {
    item = new Item("Backstage passes", 12, 4)
    expect(updateBackstagePasses(item).quality).toEqual(5);
  });

  it("when '5 < sellIn <= 10', increases the quality by 2", function() {
    item = new Item("Backstage passes", 7, 4)
    expect(updateBackstagePasses(item).quality).toEqual(6);
  });

  it("when '0 <= sellIn <= 5', increases the quality by 3", function() {
    item = new Item("Backstage passes", 7, 4)
    expect(updateBackstagePasses(item).quality).toEqual(6);
  });

  it("caps highest quality at 50", function() {
    item = new Item("Backstage passes", 1, 50)
    expect(updateBackstagePasses(item).quality).toEqual(50);
  });

  it("when 'sellIn < 0', quality equals 0", function() {
    item = new Item("Backstage passes", 0, 50)
    expect(updateBackstagePasses(item).quality).toEqual(0);
  });

});
