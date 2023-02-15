'use strict';

/**
 * Implement method Sort
 */
function compareString(a, b) {
  const compareA = String(a);
  const compareB = String(b);

  if (compareA > compareB) {
    return 1;
  }

  if (compareA < compareB) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
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
    } while (isContinue);

    return this;
  };
}

module.exports = applyCustomSort;
