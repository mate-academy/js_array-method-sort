'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => `${a}` > `${b}` ? 1 : -1
  ) {
    let isChanges = false;

    do {
      isChanges = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const change = this[i];

          this[i] = this[i + 1];
          this[i + 1] = change;
          isChanges = true;
        }
      }
    } while (isChanges);

    return this;
  };
}

module.exports = applyCustomSort;
