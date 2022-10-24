'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    let cheak;

    do {
      cheak = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          cheak++;
          this[i - 1] = second;
          this[i] = first;
        }
      }
    } while (cheak > 0);

    return this;
  };
}

const compare = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA === strB) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
