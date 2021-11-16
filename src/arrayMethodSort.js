'use strict';

/**
 * Implement method Sort
 */

const stringsCompare = (a, b) => {
  const str1 = a.toString();
  const str2 = b.toString();

  if (str1 > str2) {
    return 1;
  } else if (str1 === str2) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringsCompare) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;