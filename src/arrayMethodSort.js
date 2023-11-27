'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
          if (this[j].toString() > this[j + 1].toString()) {
            const tmp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = tmp;
          }
        }
      }

      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const tmp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
