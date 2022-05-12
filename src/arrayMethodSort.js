'use strict';

/**
 * Implement method Sort
 */
const stringValue = (a, b) => {
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
  [].__proto__.sort2 = function(compareFunction = stringValue) {
    // write code here

    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const index = this[i - 1];
        const indexNext = this[i];

        if (compareFunction(index, indexNext) > 0) {
          count++;
          this[i] = index;
          this[i - 1] = indexNext;
        }
      }
    }

    while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
