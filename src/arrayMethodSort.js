'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const savedElement = this[i];
        let resultOfComparison = 0;

        if (!compareFunction) {
          resultOfComparison = this[i].toString() > this[j].toString() ? 1 : 0;
        }

        if (compareFunction) {
          resultOfComparison = compareFunction(this[i], this[j]);
        }

        if (resultOfComparison > 0) {
          this[i] = this[j];
          this[j] = savedElement;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
