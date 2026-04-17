'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = basicCompare) {
    for (let i = 0; i < this.length - 1; i++) {
      const elementToCompare1 = this[i];
      const elementToCompare2 = this[i + 1];
      const callback = compareFunction(elementToCompare1, elementToCompare2);

      if (callback > 0) {
        this[i] = elementToCompare2;
        this[i + 1] = elementToCompare1;

        i = -1;
      }
    }

    return this;
  };

  function basicCompare(a, b) {
    const aLower = String(a).toLowerCase();
    const bLower = String(b).toLowerCase();

    if (aLower !== String(a) && bLower === String(b)) {
      return -1;
    }

    if (bLower !== String(b) && aLower === String(a)) {
      return 1;
    }

    return String(a).localeCompare(String(b));
  }
}

module.exports = applyCustomSort;
