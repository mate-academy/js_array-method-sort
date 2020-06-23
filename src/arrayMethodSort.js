'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction
          ? compareFunction(this[j], this[j + 1]) > 0
          : this[j].toString() > this[j + 1].toString()) {
          const current = this[j + 1];

          this[j + 1] = this[j];
          this[j] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
