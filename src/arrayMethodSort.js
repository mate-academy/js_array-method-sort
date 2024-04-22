'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareDefault(firstValue, secondValue) {
    const firstValueStr = firstValue.toString();
    const secondValueStr = secondValue.toString();

    if (firstValueStr > secondValueStr) {
      return 1;
    }

    if (firstValueStr < secondValueStr) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function (compareFunction = compareDefault) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[j];

          this[j] = this[i];
          this[i] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
