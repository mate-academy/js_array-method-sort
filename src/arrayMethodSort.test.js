'use strict';

const applyCustomSort = require('./arrayMethodSort');

applyCustomSort();

test('sort2 is added to [].__proto__', () => {
  expect([].sort2)
    .toBeInstanceOf(Function);
});

test(`sort2 doesn't call default sort`, () => {
  expect([].sort2.toString().includes('.sort('))
    .toBe(false);
});

test('sort returns original array', () => {
  const source = [3, 12, 2, 11];
  const result = source.sort2();

  expect(source)
    .toBe(result);
});

test('the array is sorted', () => {
  const source = [3, 12, 2, 11];

  source.sort2();

  expect(source)
    .toEqual([11, 12, 2, 3]);
});

test('numbers are sorted as strings by default: [3, 12, 2, 11].sort2()', () => {
  expect([3, 12, 2, 11].sort2())
    .toEqual([11, 12, 2, 3]);
});

test(`sort strings: ['c','b','a','d'].sort2()`, () => {
  expect(['c', 'b', 'a', 'd'].sort2())
    .toEqual(['a', 'b', 'c', 'd']);
});

test(`sort cyrillic letters: ['їжачок','яблуко','апельсин'].sort2()`, () => {
  expect(['їжачок', 'яблуко', 'апельсин'].sort2())
    .toEqual(['апельсин', 'яблуко', 'їжачок']);
});

test('custom compare function, numbers: [3, 12, 2, 11].sort2((a, b) => a - b)',
  () => {
    expect([3, 12, 2, 11].sort2((a, b) => a - b))
      .toEqual([2, 3, 11, 12]);
  });

test(
  `custom compare function, strings: 
  ['їжачок','яблуко','апельсин'].sort2((a, b) => a.localeCompare(b))`, () => {
    expect(['їжачок', 'яблуко', 'апельсин'].sort2((a, b) => a.localeCompare(b)))
      .toEqual(['апельсин', 'їжачок', 'яблуко']);
  });
