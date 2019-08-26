'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let swappedElements = true;

    while (swappedElements) {
      swappedElements = false;

      for (let i = 0; i < this.length - 1; i++) {
        if ((arguments[0] === undefined
            && String(this[i]) > String(this[i + 1]))
          || (arguments[0] !== undefined
            && compareFunction(this[i], this[i + 1]) > 0)) {
          const buffer = this[i + 1];

          this[i + 1] = this[i];
          this[i] = buffer;
          swappedElements = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
