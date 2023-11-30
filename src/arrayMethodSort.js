'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const copiedArray = [...this];

    for (let i = 0; i < copiedArray.length - 1; i++) {
      for (let j = 0; j < copiedArray.length - 1 - i; j++) {
        const swaped
        = compareFunction
          ? compareFunction(copiedArray[j], copiedArray[j + 1]) > 0
          : `${copiedArray[j]}` > `${copiedArray[j + 1]}`;

        if (swaped) {
          const temp = copiedArray[j];

          copiedArray[j] = copiedArray[j + 1];
          copiedArray[j + 1] = temp;
        }
      }
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = copiedArray[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
