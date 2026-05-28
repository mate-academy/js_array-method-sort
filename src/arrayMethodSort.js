'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length === 0) {
      return this;
    }

    const defaulCompare = (a, b) => {
      return String(a) === String(b) ? 0 : String(a) > String(b) ? 1 : -1;
    };

    const compare = compareFunction || defaulCompare;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
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
