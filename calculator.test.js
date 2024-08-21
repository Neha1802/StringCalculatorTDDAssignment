const add = require('./calculator');
test('should return 0 for an empty string', ()=>{
  expect(add("")).toBe(0);
});

test('should return sum of two comma separated numbers', ()=>{
  expect(add("1,2")).toBe(3);
});

test('should handle custom delimeter', ()=>{
  expect(add("//;\n1;2")).toBe(3);
});