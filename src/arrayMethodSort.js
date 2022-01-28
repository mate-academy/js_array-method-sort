'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = stringSort) {
    // write code here
    let countChange;

    do {
      countChange = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          countChange++;
        }
      }
    } while (countChange > 0);

    return this;
  };
}

function stringSort(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA < stringB) {
    return -1;
  } else {
    return 0;
  }
}

module.exports = applyCustomSort;
