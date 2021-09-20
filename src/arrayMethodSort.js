'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (this.length <= 1) {
      return this;
    }

    const copy = [...this];

    if (!compareFunction) {
      for (let i = 0; i < this.length; i++) {
        let smallestIndex = 0;

        for (let j = 0; j < copy.length - 1; j++) {
          if (copy[j].toString() > copy[j + 1].toString()) {
            smallestIndex = j + 1;
          }
        }
        this[i] = copy.splice(smallestIndex, 1)[0];
        smallestIndex = 0;
      }
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            const temp = this[j];

            this[j] = this[i];
            this[i] = temp;
          } else {
            continue;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
