'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (can1, can2) => {
    const can1Str = typeof can1 === 'string' ? can1 : can1.toString();
    const can2Str = typeof can2 === 'string' ? can2 : can2.toString();
    let currentDif;

    for (let i = 0; i < can1Str.length; i++) {
      currentDif = can1Str.charCodeAt(i) - can2Str.charCodeAt(i);

      if (currentDif > 0) {
        return 1;
      } else if (currentDif === 0) {
        continue;
      } else {
        return -1;
      }
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;
    let prev;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prev = this[i - 1];

        if (compareFunction(this[i], prev) < 0) {
          this[i - 1] = this[i];
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
