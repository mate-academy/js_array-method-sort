'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compare = (a, b) => {
    const valueA = String(a);
    const valueB = String(b);

    if (valueA > valueB) {
      return 1;
    }

    if (valueA < valueB) {
      return -1;
    }

    if (valueA === valueB) {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compare) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const currentValue = this[i];
        const nextValue = this[i + 1];

        if (compareFunction(currentValue, nextValue) > 0) {
          this[i] = nextValue;
          this[i + 1] = currentValue;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
