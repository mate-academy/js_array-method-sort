'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const arrLength = this.length;
    let rearrangement;

    for (let i = 0; i < arrLength - 1; i++) {
      for (let j = 0; j < arrLength - 1 - i; j++) {
        if (!compareFunction) {
          rearrangement = this[j + 1].toString() < this[j].toString();
        } else {
          rearrangement = compareFunction(this[j + 1], this[j]) < 0;
        }

        if (rearrangement) {
          const temp = this[j + 1];

          this[j + 1] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
