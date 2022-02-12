'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const currentValue = this[i];
        const prevValue = this[i - 1];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i] = prevValue;
          this[i - 1] = currentValue;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

function compareStrings(prev, current) {
  const prevString = String(prev);
  const nextString = String(current);

  return prevString > nextString ? 1 : -1;
}

module.exports = applyCustomSort;
