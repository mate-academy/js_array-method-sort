'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction && compareFunction(this[j], this[j + 1]) < 1) {
          continue;
        }

        if (compareFunction === undefined
            && this[j].toString() <= this[j + 1].toString()
        ) {
          continue;
        }

        const temp = this[j];

        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
