"use strict";

const defaultCompare = (a, b) => {
  const valueToCompare1 = String(a);
  const valueToCompare2 = String(b);

  if (valueToCompare1 > valueToCompare2) {
    return 1;
  }

  if (valueToCompare1 === valueToCompare2) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    let wasPermutation = 0;

    do {
      wasPermutation = 0;

      for (let i = 1; i < this.length; i++) {
        const value1 = this[i - 1];
        const value2 = this[i];
        const compareResult = compareFunction(value1, value2);

        if (compareResult > 0) {
          this[i - 1] = value2;
          this[i] = value1;
          wasPermutation++;
        }
      }
    } while (wasPermutation > 0);

    return this;
  };
}

module.exports = applyCustomSort;
