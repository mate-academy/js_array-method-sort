/* eslint-disable no-unused-expressions */
'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    for (let i = 1; i < this.length; i++) {
      count = 0;

      const prev = this[i - 1];
      const current = this[i];

      compareFunction(prev, current) > 0
        ? (this[i - 1] = current, this[i] = prev, count++)
        : count--;

      count > 0 ? i = 0 : i;
    }

    return this;
  };
}

module.exports = applyCustomSort;
