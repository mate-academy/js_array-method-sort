'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let compare = compareFunction;
    const callback = (a, b) => {
      const stringA = String(a);
      const stringB = String(b);

      if (stringA > stringB) {
        return 1;
      } else if (stringA === stringB) {
        return 0;
      }

      return -1;
    };

    if (!compareFunction) {
      compare = callback;
    }

    let counter = 1;

    while (counter > 0) {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compare(first, second) > 0) {
          this[i - 1] = second;
          this[i] = first;
          counter++;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
