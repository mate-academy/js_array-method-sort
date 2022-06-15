'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  const aString = String(a);
  const bString = String(b);

  if (aString > bString) {
    return 1;
  } else if (bString === aString) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let needToSort;

    do {
      needToSort = false;

      for (let i = 1; i < this.length; i++) {
        const prior = this[i - 1];
        const current = this[i];

        if (compareFunction(prior, current) > 0) {
          this[i - 1] = current;
          this[i] = prior;
          needToSort = true;
        }
      }
    } while (needToSort);

    return this;
  };
}

module.exports = applyCustomSort;
