'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const callBek = compareFunction === undefined
      ? (item1, item2) => `${item1}` > `${item2}` ? 1 : 0
      : compareFunction;

    for (let ii = this.length - 1; ii > 0; ii--) {
      for (let i = 0; i < ii; i++) {
        if (callBek(this[i], this[i + 1]) > 0) {
          const _ = this[i];

          this[i] = this[i + 1];
          this[i + 1] = _;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
