const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});

// duplicate test
test('Handles duplicate counts by sorting the results', () => {
  expect(maxChar('ddaa333bbcc')).toEqual('3');
});

// capitalization test
test('Evaluates the same regardless of upper or lower case letters', () => {
  expect(maxChar('aabbcCc')).toEqual('c');
});
