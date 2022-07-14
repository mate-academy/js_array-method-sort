'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareFunction = (a, b) =>
    String(a) > String(b)
      ? 1
      : -1;

  [].__proto__.sort2 = function(compare = compareFunction) {
    // for (let index = 1; index < this.length; index++) {
    //   for (let i = 0; i < this.length - index; i++) {
    //     const prev = this[i];
    //     const next = this[i + 1];

    //     if (compareFunction(prev, next) > 0) {
    //       [this[i], this[i + 1]] = [next, prev];
    //     }
    //   }
    // }
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const next = this[i];

        if (compare(prev, next) > 0) {
          count++;
          this[i - 1] = next;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
