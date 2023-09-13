'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compareFunc = (a, b) => String(a).localeCompare(String(b));

    for (const item of this) {
      if (/[а-яА-ЯЁё]/.test(item)) {
        compareFunc = (a, b) => a > b;
      }
    }

    if (compareFunction) {
      compareFunc = compareFunction;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        const prev = this[j - 1];
        const curr = this[j];

        if (compareFunc(prev, curr) > 0) {
          this[j - 1] = curr;
          this[j] = prev;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
