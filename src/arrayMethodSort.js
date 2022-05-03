'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const createdSortFunc = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    }

    if (stringA < stringB) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = createdSortFunc) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const placeholder = this[i];

          this[i] = this[i - 1];
          this[i - 1] = placeholder;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
