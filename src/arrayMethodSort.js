'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    // for (let i = 0; i < this.length; i++) {
    //   for (let j = i + 1; j < this.length; j++) {
    //     if (compareFunction(this[i], this[j]) > 0) {
    //       const curr = this[i];

    //       this[i] = this[j];
    //       this[j] = curr;
    //     }
    //   }
    // }

    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          count++;
          this[i] = prev;
          this[i - 1] = curr;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compare(a, b) {
  const firstValue = a.toString();
  const secondValue = b.toString();

  if (firstValue > secondValue) {
    return 1;
  } else if (firstValue < secondValue) {
    return -1;
  } else {
    return 0;
  }
}

module.exports = applyCustomSort;
