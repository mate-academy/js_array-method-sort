'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction === undefined) {
      for (let index = 0; index < this.length; index++) {
        for (let nextIndex = index; nextIndex < this.length; nextIndex++) {
          const element = String(this[index]);
          const nextElement = String(this[nextIndex]);

          if (element > nextElement) {
            const temp = this[index];

            this[index] = this[nextIndex];
            this[nextIndex] = temp;
          }
        }
      }

      return this;
    }

    if (compareFunction !== undefined) {
      for (let index = 0; index < this.length; index++) {
        for (let nextIndex = index; nextIndex < this.length; nextIndex++) {
          if (compareFunction(this[index], this[nextIndex]) > 0) {
            const temp = this[index];

            this[index] = this[nextIndex];
            this[nextIndex] = temp;
          }
        }
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
