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
          return stringA.localeCompare(stringB, undefined, {
            sensitivity: 'base',
          });
        }
      };
    } else {
      compareFunctionFinished = compareFunction;
    }

    for (let i = 0; i < this.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunctionFinished(this[j], this[minIndex]) < 0) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [this[i], this[minIndex]] = [this[minIndex], this[i]];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
