'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultFuncForSort = (prev, curr) => {
    const prevString = String(prev);
    const currString = String(curr);

    if (prevString > currString) {
      return 1;
    }

    if (prevString < currString) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = defaultFuncForSort) {
    let counter = 0;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          counter++;
        }
      }
    } while (counter !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
