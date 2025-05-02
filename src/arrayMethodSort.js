'use strict';

/**
 * Implement method Sorts
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let finalCompareFunction;

    if (typeof compareFunction === 'function') {
      finalCompareFunction = compareFunction;
    } else {
      finalCompareFunction = function (a, b) {
        const first = String(a);
        const second = String(b);

        if (first < second) {
          return -1;
        }

        if (first > second) {
          return 1;
        }

        return 0;
      };
    }

    const length = this.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        const current = this[j];
        const next = this[j + 1];

        if (finalCompareFunction(current, next) > 0) {
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
