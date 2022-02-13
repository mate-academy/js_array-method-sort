'use strict';

const compareFunction = (a, b) => {
  const prev = String(a).toLowerCase();
  const current = String(b).toLowerCase();

  if (prev > current) {
    return 1;
  }

  if (prev < current) {
    return -1;
  }

  return 0;
};

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previousElem = this[i - 1];
        const currentElem = this[i];

        if (callback(previousElem, currentElem) > 0) {
          counter++;
          this[i - 1] = currentElem;
          this[i] = previousElem;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
