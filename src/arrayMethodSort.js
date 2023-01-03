'use strict';

/**
//  * Implement method Sort
//  */

function compareStrings(a, b) {
  const string1 = String(a);
  const string2 = String(b);

  if (string1 < string2) {
    return -1;
  }

  if (string1 > string2) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let iteration = 1;

    while (iteration > 0) {
      iteration = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const currentElement = this[i];
        const nextElement = this[i + 1];

        if (compareFunction(currentElement, nextElement) > 0) {
          this[i] = nextElement;
          this[i + 1] = currentElement;
          iteration++;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
