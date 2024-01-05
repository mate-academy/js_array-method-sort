'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        let theLeast = this[i];
        let indexOfLess = i;

        for (let j = i + 1; j < this.length; j++) {
          if (this[j].toString() < theLeast.toString()) {
            theLeast = this[j];
            indexOfLess = j;
          }
        }

        this[indexOfLess] = this[i];
        this[i] = theLeast;
      }
    }

    if (compareFunction) {
      for (let i = 0; i < this.length; i++) {
        let theLeast = this[i];
        let indexOfLess = i;

        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[j], theLeast) < 0) {
            theLeast = this[j];
            indexOfLess = j;
          }
        }

        this[indexOfLess] = this[i];
        this[i] = theLeast;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
