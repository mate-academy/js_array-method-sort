'use strict';

/**
 * Implement method Sort
 */
function compareString(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA === stringB) {
    return 0;
  }

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = previousValue;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
