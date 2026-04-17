'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const basicCompare = (a, b) => {
      const stringA = String(a);
      const stringB = String(b);

      const compareLength = Math.min(stringA.length, stringB.length);

      for (let i = 0; i < compareLength; i++) {
        const codeA = stringA.codePointAt(i);
        const codeB = stringB.codePointAt(i);

        if (codeA !== codeB) {
          return codeA - codeB;
        }
      }

      return stringA.length - stringB.length;
    };

    const compare = compareFunction || basicCompare;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
