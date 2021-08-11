'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  return stringA > stringB
    ? 1
    : stringA < stringB
      ? -1
      : 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        let current = this[i];

        if (this[i] === undefined) {
          this[this.length] = this[i];
          this.splice(i, 1);
        }

        if (this[i] === null) {
          current = 0;
        }

        if (compareFunction(previous, current) > 0) {
          const tmp = this[i];

          this[i] = this[i - 1];
          this[i - 1] = tmp;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
