'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  function compareAsStrings(a, b) {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let changeHappend;

    do {
      changeHappend = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          changeHappend = true;

          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (changeHappend);

    return this;
  };
}

module.exports = applyCustomSort;
