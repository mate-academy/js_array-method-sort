'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    // write code here
    let countMov;

    do {
      countMov = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curent = this[i];

        if (compareFunction(prev, curent) > 0) {
          this[i - 1] = curent;
          this[i] = prev;
          countMov++;
        }
      }
    } while (countMov > 0);

    return this;
  };
}

const compareAsString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else if (stringA < stringB) {
    return -1;
  }
};

module.exports = applyCustomSort;
