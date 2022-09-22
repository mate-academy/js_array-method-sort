'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let passCounter = 0;

    do {
      passCounter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;

          passCounter++;
        }
      }
    } while (passCounter);

    return this;
  };
}

const compareStrings = (stringA, stringB) => {
  const prevString = stringA.toString();
  const currString = stringB.toString();

  if (prevString > currString) {
    return 1;
  }

  if (prevString < currString) {
    return -1;
  }

  return 0;
};

module.exports = applyCustomSort;
