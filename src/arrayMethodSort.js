'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const length = this.length;

    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < length; j++) {
        if (compareFunction !== undefined) {
          if (compareFunction(this[j], this[minIndex]) < 0) {
            minIndex = j;
          }
        } else {
          if (this[j] < this[i]
          && typeof this[0] === 'string') {
            minIndex = j;
          } else if (this[j].toString().localeCompare(this[i].toString()) < 0
            && typeof this[0] === 'number') {
            minIndex = j;
          }
        }
      }

      if (minIndex !== i) {
        const temp = this[i];

        this[i] = this[minIndex];
        this[minIndex] = temp;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
