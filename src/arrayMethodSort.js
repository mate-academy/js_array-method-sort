'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare = compareFunction;
    const compareFn = compareFunction ? compare : withoutCallback;

    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        const result = compareFn(this[j - 1], this[j]);

        if (checkEquality(result, !!compareFn)) {
          [this[j - 1], this[j]] = [this[j], this[j - 1]];
        }
      }
    }

    return this;
  };
}

function withoutCallback(a, b) {
  return a.toString() > b.toString() ? 1 : -1;
}

function checkEquality(result, biggerEqual = false) {
  return biggerEqual ? result >= 1 : result === 1;
}

module.exports = applyCustomSort;
