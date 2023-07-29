'use strict';

/**
 * Implement method Sort
 */
function defaultSort(a, b) {
  const aStr = typeof a === 'string' ? a : a.toString();
  const bStr = typeof b === 'string' ? b : b.toString();

  if (aStr === bStr) {
    return aStr.localeCompare(bStr);
  } else {
    return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
  }
}

// Custom sort method
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (!compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (defaultSort(this[j], this[j + 1]) > 0) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        let swapped = false;

        for (let j = 0; j < this.length - i - 1; j++) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
            swapped = true;
          }
        }

        if (!swapped) {
          break;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
