'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareAsStrings(a, b) {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return 0;
    } else {
      return -1;
    }
  }

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };

  const callback = (firstElement, secondElement) => {
    return firstElement - secondElement;
  };

  return [].__proto__.sort2(callback);
}

module.exports = applyCustomSort;
