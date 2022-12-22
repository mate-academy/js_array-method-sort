'use strict';

/**
 * Implement method Sort
 */
function compareFunction(current, next) {
  const firstValue = String(current);
  const secondValue = String(next);

  if (firstValue > secondValue) {
    return 1;
  } else if (firstValue === secondValue) {
    return 0;
  }

  return -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
    let counter = 0;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (callback(current, next) > 0) {
          this[i] = next;
          this[i + 1] = current;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
