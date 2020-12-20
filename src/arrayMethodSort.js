'use strict';

/**
 * Implement method Sort
 */
function defaultSort(prev, current) {
  const prevStr = prev.toString();
  const currentStr = current.toString();

  if (prevStr > currentStr) {
    return 1;
  } else if (prevStr < currentStr) {
    return -1;
  } else {
    return 0;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
