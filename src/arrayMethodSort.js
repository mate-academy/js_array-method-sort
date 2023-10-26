'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (el1, el2) => {
    return el1.toString() > el2.toString() ? 1 : -1;
  }) {
    const arrLength = [...this].length;

    for (let i = 0; i < this.length; i++) {
      for (let s = 0; s < this.length; s++) {
        if (compareFunction(this[i], this[s]) < 0) {
          const currentEl = this[s];

          this[s] = this[i];
          this[i] = currentEl;
        };
      }
    }

    this.length = arrLength;

    return this;
  };
}

module.exports = applyCustomSort;
