'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction
  = (a, b) => {
    if (a.toString() < b.toString()) {
      return -1;
    }

    if (a.toString() > b.toString()) {
      return 1;
    }

    return 0;
  }) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[j], this[i]) < 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
