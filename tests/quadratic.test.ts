const quadraticCalculator = require("../src/index")

test('Does The quadraticCalculator work?', () => {
  expect(quadraticCalculator({a:1,b:5,c:6})).toMatchObject([-2,-3]);
}); 