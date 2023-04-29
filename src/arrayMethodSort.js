'use strict';

/**
 * Implement method Sort
 */
const compareToString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareToString) {
    let doneSort;

    do {
      doneSort = true;

      for (let i = 1; i < this.length; i++) {
        const start = this[i - 1];
        const end = this[i];

        if (compareFunction(start, end) > 0) {
          this[i - 1] = end;
          this[i] = start;
          doneSort = false;
        }
      }
    } while (doneSort === false);

    return this;
  };
}

module.exports = applyCustomSort;
