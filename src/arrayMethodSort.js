'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(first, second) {
  const a = String(first);
  const b = String(second);

  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let isContinue;

    do {
      isContinue = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          isContinue = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (isContinue === true);

    return this;
  };
}

module.exports = applyCustomSort;
