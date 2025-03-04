'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const callbackDefault = (a, b) => a.toString() > b.toString();

    const callback =
      compareFunction === undefined ? callbackDefault : compareFunction;

    const len = this.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        const a = this[j];
        const b = this[j + 1];
        const result = callback(a, b);

        if (result > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
