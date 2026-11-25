'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const callback = compareFunction || ((a, b) => String(a) < String(b));

    for (let i = 0; i < this.length; i++) {
      for (let k = 0; k < this.length; k++) {
        if (
          callback(this[i], this[k]) < 0 ||
          callback(this[i], this[k]) === true
        ) {
          [this[i], this[k]] = [this[k], this[i]];
        }
      }
    }

    return this;
  };
}
applyCustomSort();

module.exports = applyCustomSort;
