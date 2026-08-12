/* eslint-disable no-console */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare = (a, b) => String(a) > String(b);

    if (typeof compareFunction !== 'undefined') {
      compare = compareFunction;
    }

    const n = this.length;

    for (let i = 0; i < n - 1; i++) {
      let isSwapped = false;

      for (let j = 0; j < n - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          isSwapped = true;
        }
      }

      if (!isSwapped) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
