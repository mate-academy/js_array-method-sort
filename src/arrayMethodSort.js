'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let savedElement = null;

    if (!compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          savedElement = this[i];

          const resultOfComparison =
            this[i].toString() > this[j].toString() ? 1 : 0;

          if (resultOfComparison > 0) {
            this[i] = this[j];
            this[j] = savedElement;
          }
        }
      }

      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        savedElement = this[i];

        const resultOfCallback = compareFunction(this[i], this[j]);

        if (resultOfCallback > 0) {
          this[i] = this[j];
          this[j] = savedElement;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
