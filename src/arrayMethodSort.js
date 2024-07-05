'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const cF = (a, b) => String(a) > String(b);

  [].__proto__.sort2 = function (compare = cF) {
    for (let currentIndex = 0; currentIndex < this.length; currentIndex++) {
      for (
        let nextIndex = currentIndex + 1;
        nextIndex < this.length;
        nextIndex++
      ) {
        if (compare(this[currentIndex], this[nextIndex]) > 0) {
          const value = this[currentIndex];

          this[currentIndex] = this[nextIndex];
          this[nextIndex] = value;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
