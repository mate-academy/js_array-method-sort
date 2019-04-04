'use strict';

const applyCustomSplice = require('./arrayMethodFilter');

const source = [0, 10, 20, 30];
applyCustomSplice();

test('`filter2` is added to [].__proto__', () => {
  expect([].filter2)
    .toBeInstanceOf(Function);
});

test('for (item) => item > 10', () => {
  expect(source.filter2(x => x > 10))
    .toEqual([20, 30]);
});

test('for (item) => item > 100', () => {
  expect(source.filter2(x => x > 100))
    .toEqual([]);
});

test('[] is filtered to []', () => {
  expect([].filter2(x => x > 10))
    .toEqual([]);
});

test('for (item, index) => index > 0', () => {
  expect(source.filter2((x, i) => i > 0))
    .toEqual([10, 20, 30]);
});

test('(item, index, arr) => arr === source)', () => {
  expect(source.filter2((x, i, arr) => arr === source))
    .toEqual([0, 10, 20, 30]);
});

test('Source array is not changed', () => {
  expect(source)
    .toEqual([0, 10, 20, 30]);
});
