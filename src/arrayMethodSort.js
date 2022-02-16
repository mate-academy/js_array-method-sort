'use strict';

/**
 * Implement method Sort
 */
const compareAsString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA < stringB) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const temp = this[i - 1];
        const current = this[i];

        if (compareFunction(temp, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = temp;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
