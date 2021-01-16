'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const neFunction = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = neFunction) {
    // write code here
    let num;

    do {
      num = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          num++;
          this[i - 1] = second;
          this[i] = first;
        }
      }
    } while (num > 0);

    return this;
  };
}

module.exports = applyCustomSort;
