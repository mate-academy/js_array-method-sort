'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 1; i < this.length; i++) {
      const currentElement = this[i];
      let correctIndex = i;

      for (let j = i - 1; j >= 0; j--) {
        let insertIndex;

        if (compareFunction === undefined) {
          insertIndex = String(this[j]) > String(currentElement);
        } else {
          insertIndex = compareFunction(this[j], currentElement) > 0;
        }

        if (!insertIndex) {
          break;
        }

        // shift array
        this[j + 1] = this[j];
        correctIndex = j;
      }

      this[correctIndex] = currentElement;
    }

    return this;
  };
}

module.exports = applyCustomSort;
