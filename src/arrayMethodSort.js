'use strict';

function applyCustomSort() {
  function compareAsStrings(a, b) {
    const string1 = String(a);
    const string2 = String(b);

    if (string1 > string2) {
      return 1;
    }

    if (string1 < string2) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let swapCount;

    do {
      swapCount = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          swapCount++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (swapCount > 0);

    return this;
  };

  return this;
}

module.exports = applyCustomSort;
