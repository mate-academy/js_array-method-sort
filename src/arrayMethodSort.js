'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let flag;

    do {
      flag = 0;

      for (let i = 1; i < this.length; i++) {
        const mem = this[i - 1];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = this[i];
          this[i] = mem;
          flag++;
        }
      }
    } while (flag > 0);

    return this;
  };
}

const compareAsString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else if (stringA < stringB) {
    return -1;
  }
};

module.exports = applyCustomSort;
