'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringB > stringA) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareAsStrings) {
    let counter;
    let temp;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        if (callback(this[i - 1], this[i]) > 0) {
          temp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = temp;

          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
