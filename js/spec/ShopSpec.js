describe("Shop", function() {
  var items;

  describe("Given normal items", function() {

    let item = new Item("Bread", 2, 3);

    it("reduces the quality by 1", function() {
      spyOn(item, 'quality').and.callThrough();
    });

  });
});
