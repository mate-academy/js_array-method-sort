'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const toStringFunc = (a, b) => {
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

  [].__proto__.sort2 = function(compareFunction = toStringFunc) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];
        const post = this[i + 1];

        if (compareFunction(prev, post) > 0) {
          this[i] = post;
          this[i + 1] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
