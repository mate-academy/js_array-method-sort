'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let wasShift;

    do {
      wasShift = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;

          wasShift = true;
        }
      }
    } while (wasShift === true);

    return this;
  };
}

module.exports = applyCustomSort;
