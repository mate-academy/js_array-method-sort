'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => (String(a) > String(b) ? 1 : -1);

    for (let i = 0; i < this.length; i++) {
      for (let n = i + 1; n < this.length; n++) {
        if (compare(this[i], this[n]) > 0) {
          [this[i], this[n]] = [this[n], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
