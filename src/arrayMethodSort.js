'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if(compareFunction(prev, curr) > 0) {
          this[i - 1] = curr;
          this[i] = prev;

          count++;
        }
      }
    } while (count > 0)

    // if (this.length > startArray.length) {
    //   return startArray;
    // }

    return this;
  };
}

const compareAsStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  return -1;
}

module.exports = applyCustomSort;
