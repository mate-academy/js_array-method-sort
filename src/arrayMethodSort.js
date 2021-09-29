'use strict';

/** [this[i], this[i - 1]] = [this[i - 1], this[i]];
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    // write code her
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          count++;
        }
      }
    } while (count > 0);

    return this;
  };

  function compare(a, b) {
    const prev = a.toString();
    const current = b.toString();

    if (prev < current) {
      return -1;
    } else if (prev > current) {
      return 1;
    }

    return 0;
  }
}

module.exports = applyCustomSort;
