'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; ++i) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const tmp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = tmp;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
