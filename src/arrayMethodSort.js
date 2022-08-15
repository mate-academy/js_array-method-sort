/* eslint-disable no-unused-expressions */
'use strict';

/**
 * Implement method Sort
 */

const compareString = (a, b) => {
  const firstString = a.toString();
  const secondString = b.toString();

  switch (true) {
    case firstString > secondString:
      return 1;
    case firstString < secondString:
      return 0;
    default:
      return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    for (let i = 1; i < this.length; i++) {
      count = 0;

      const prev = this[i - 1];
      const next = this[i];

      compareFunction(prev, next) > 0
        ? (this[i - 1] = next, this[i] = prev, count++)
        : count--;

      count > 0 ? i = 0 : i;
    }

    return this;
  };
}

module.exports = applyCustomSort;
