'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const start = this.slice();

    for (let i = 0; i < start.length - 1; i++) {
      for (let j = 0; j < start.length - i - 1; j++) {
        const shouldSwap = compareFunction ? compareFunction(start[j],
          start[j + 1]) > 0 : String(start[j]) > String(start[j + 1]);

        if (shouldSwap) {
          const temp = start[j];

          start[j] = start[j + 1];
          start[j + 1] = temp;
        }
      }
    }
    this.splice(0, this.length, ...start);

    return this;
  };
}

module.exports = applyCustomSort;
