'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[j].toString() < this[i].toString()) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }

        if (compareFunction !== undefined
          && compareFunction(this[j], this[i]) < 0) {
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
