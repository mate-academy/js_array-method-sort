'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (valueA, valueB) => {
    const stringA = String(valueA);
    const stringB = String(valueB);

    if (stringA > stringB) {
      return 1;
    } else if (stringA < stringB) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let changesCount;

    do {
      changesCount = 0;

      for (let index = 1; index < this.length; index++) {
        const previous = this[index - 1];
        const current = this[index];

        if (compareFunction(previous, current) > 0) {
          this[index - 1] = current;
          this[index] = previous;
          changesCount++;
        }
      }
    } while (changesCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
