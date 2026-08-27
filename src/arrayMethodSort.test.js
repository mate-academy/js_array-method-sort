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
    const input = ['c', 'ab', 'a', 'ad', 'b'];
    const expected = ['a', 'ab', 'ad', 'b', 'c'];

    // eslint-disable-next-line no-console
    console.log('\nВХІД:', input);
    // eslint-disable-next-line no-console
    console.log('ОЧІКУЄТЕ:', expected);

    const result = input.sort2();

    // eslint-disable-next-line no-console
    console.log('ОТРИМАЛИ:', result);
    expect(result).toEqual(expected);
  });

  it('sorts mixed case strings', () => {
    const input = ['c', 'Ab', 'a', 'ad', 'B'];
    const expected = ['Ab', 'B', 'a', 'ad', 'c'];

    // eslint-disable-next-line no-console
    console.log('\nВХІД:', input);
    // eslint-disable-next-line no-console
    console.log('ОЧІКУЄТЕ:', expected);

    const result = input.sort2();

    // eslint-disable-next-line no-console
    console.log('ОТРИМАЛИ:', result);
    expect(result).toEqual(expected);
  });

  it('by default sorts number as strings', () => {
    const input = [3, 12, 2, 11];
    const expected = [11, 12, 2, 3];

    // eslint-disable-next-line no-console
    console.log('\nВХІД:', input);
    // eslint-disable-next-line no-console
    console.log('ОЧІКУЄТЕ:', expected);

    const result = input.sort2();

    // eslint-disable-next-line no-console
    console.log('ОТРИМАЛИ:', result);
    expect(result).toEqual(expected);
  });

  it('supports custom compare function for numbers', () => {
    const input = [3, 12, 2, 11];
    const expected = [2, 3, 11, 12];

    // eslint-disable-next-line no-console
    console.log('\nВХІД:', input);
    // eslint-disable-next-line no-console
    console.log('ОЧІКУЄТЕ:', expected);

    const result = input.sort2((a, b) => a - b);

    // eslint-disable-next-line no-console
    console.log('ОТРИМАЛИ:', result);
    expect(result).toEqual(expected);
  });

  it('supports custom compare function for strings', () => {
    const input = ['c', 'Ab', 'a', 'ad', 'B'];
    const expected = ['a', 'Ab', 'ad', 'B', 'c'];
    const compare = (a, b) => a.localeCompare(b);

    // eslint-disable-next-line no-console
    console.log('\nВХІД:', input);
    // eslint-disable-next-line no-console
    console.log('ОЧІКУЄТЕ:', expected);

    const result = input.sort2(compare);

    // eslint-disable-next-line no-console
    console.log('ОТРИМАЛИ:', result);
    expect(result).toEqual(expected);
  });
});
