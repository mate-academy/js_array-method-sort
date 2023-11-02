'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const SORTED = 1;
  const NOT_SORTED = -1;
  const MEDIUM = 0;

  [].__proto__.sort2
  = function(compareFunction = (
      (el1, el2) => el1.toString() >= el2.toString() ? SORTED : NOT_SORTED)
    ) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) >= MEDIUM) {
            continue;
          }

          const tempElement = this[i];

          this[i] = this[j];
          this[j] = tempElement;
        }
      }

      return this;
    };
}

module.exports = applyCustomSort;
