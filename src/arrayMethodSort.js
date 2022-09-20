'use strict';

/**
 * Implement method Sort
 */
const compareFunction = (a, b) => {
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

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const prev = this[i];
        const current = this[j];

        if (callback(prev, current) > 0) {
          this[i] = current;
          this[j] = prev;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
