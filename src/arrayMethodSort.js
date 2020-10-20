'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count;
    const callback = (a, b) => {
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

    if (compareFunction === undefined) {
      do {
        count = 0;

        for (let inDX = 1; inDX < this.length; inDX++) {
          const prev = this[inDX - 1];
          const current = this[inDX];

          if (callback(prev, current) > 0) {
            count++;
            this[inDX - 1] = current;
            this[inDX] = prev;
          }
        }
      } while (count > 0);
    } else {
      do {
        count = 0;

        for (let inDX = 1; inDX < this.length; inDX++) {
          const prev = this[inDX - 1];
          const current = this[inDX];

          if (compareFunction(prev, current) > 0) {
            count++;
            this[inDX - 1] = current;
            this[inDX] = prev;
          }
        }
      } while (count > 0);
    }

    return this;
  };
}

module.exports = applyCustomSort;
