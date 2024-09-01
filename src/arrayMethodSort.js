'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compareFunctionFinished;

    if (!compareFunction) {
      compareFunctionFinished = (a, b) => {
        const stringA = a.toString();
        const stringB = b.toString();

        if (stringA.match(/\p{Lu}/u) && !stringB.match(/\p{Lu}/u)) {
          return -1;
        } else if (stringB.match(/\p{Lu}/u) && !stringA.match(/\p{Lu}/u)) {
          return 1;
        } else {
          return stringA.localeCompare(stringB);
        }
      };
    } else {
      compareFunctionFinished = compareFunction;
    }

    const length = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < length - 1; i++) {
        if (compareFunctionFinished(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
