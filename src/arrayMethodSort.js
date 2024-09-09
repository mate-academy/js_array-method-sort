'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = additionalCompareFunction) {
    let isChanged = null;

    do {
      isChanged = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const firstElement = this[i];

          this[i] = this[i + 1];
          this[i + 1] = firstElement;

          isChanged = true;
        }
      }
    } while (isChanged);

    return this;
  };
}

function additionalCompareFunction(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }
}

module.exports = applyCustomSort;
