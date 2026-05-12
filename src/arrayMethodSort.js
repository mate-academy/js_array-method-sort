'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let newCompFunct = compareFunction;

    if (typeof compareFunction !== 'function') {
      newCompFunct = function (a, b) {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr > bStr) {
          return 1;
        }

        if (aStr < bStr) {
          return -1;
        } else {
          return 0;
        }
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (this[j] === undefined) {
          const el = this[j];

          this[j] = this[j + 1];
          this[j + 1] = el;
          continue;
        }

        if (newCompFunct(this[j], this[j + 1]) > 0) {
          const el = this[j];

          this[j] = this[j + 1];
          this[j + 1] = el;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
