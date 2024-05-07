'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        const compare = compareFunction
          ? compareFunction(this[j - 1], this[j])
          : String(this[j - 1]) > String(this[j]);
        const item = this[j - 1];

        if (compare > 0 || compare === true) {
          this[j - 1] = this[j];
          this[j] = item;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
