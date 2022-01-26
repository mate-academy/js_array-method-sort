'use strict';

/**
 * Implement method Sort
 */
const compare = (a, b) => {
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
  [].__proto__.sort2 = function(compareFunction = compare) {
    // write code here
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const currentElem = this[i];

          this[i] = this[j];
          this[j] = currentElem;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
