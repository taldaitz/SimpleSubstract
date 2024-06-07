const substract = require("./operation.js");

test('make 5 - 2 to equal 3', () => {
    expect(substract(5, 2)).toBe(3);
  });