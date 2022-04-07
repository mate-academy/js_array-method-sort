'use strict';

/**
 * Implement method Sort
 */
const defaultFunc = (a, b) => {
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
  [].__proto__.sort2 = function(compareFunction = defaultFunc) {
    let temp;

    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        };
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
