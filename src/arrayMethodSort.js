'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsString = (a, b) => {
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

  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    // write code here

    // for (let n = 0; n < this.length; n++) {
    //   for (let i = 0; i < this.length - 1; i++) {
    //     if (this[i] > this[i + 1]) {
    //       const k = this[i];

    //       this[i] = this[i + 1];
    //       this[i + 1] = k;
    //     }
    //   }
    // }

    // return this;

    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const one = this[i - 1];
        const two = this[i];

        if (compareFunction(one, two) > 0) {
          count++;
          this[i - 1] = two;
          this[i] = one;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
