'use strict';

const applyCustomSort = require('./arrayMethodSort');

applyCustomSort();

describe('sort2', () => {
  it('is a function', () => {
    expect([].sort2)
      .toBeInstanceOf(Function);
  });

  it(`doesn't call default sort`, () => {
    expect([].sort2.toString().includes('.sort('))
      .toBe(false);
  });

  it('returns original array', () => {
    const source = [3, 12, 2, 11];
    const result = source.sort2();

    expect(source)
      .toBe(result);
  });

  it('sorts lower case strings', () => {
    expect(['c', 'ab', 'a', 'ad', 'b'].sort2())
      .toEqual(['a', 'ab', 'ad', 'b', 'c']);
  });

  it('sorts mixed case strings', () => {
    expect(['c', 'Ab', 'a', 'ad', 'B'].sort2())
      .toEqual(['Ab', 'B', 'a', 'ad', 'c']);
  });

 

  it('supports custom compare function for numbers', () => {
    expect([3, 12, 2, 11].sort2((a, b) => a - b))
      .toEqual([2, 3, 11, 12]);
  });

  it('supports custom compare function for strings', () => {
    const compare = (a, b) => a.localeCompare(b);

    expect(['c', 'Ab', 'a', 'ad', 'B'].sort2(compare))
      .toEqual(['a', 'Ab', 'ad', 'B', 'c']);
  });
});

