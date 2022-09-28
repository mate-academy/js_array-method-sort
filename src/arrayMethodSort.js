'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compareDefault = (a, b) => {
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
    const methodSort = !compareFunction ? compareDefault : compareFunction;

    this.forEach((element, index) => {
      for (let i = index; i < this.length; i++) {
        const buffer = this[index];
        const current = this[i];

        if (methodSort(buffer, current) > 0) {
          this[index] = current;
          this[i] = buffer;
        }
      }
    });

    return this;
  };
}

module.exports = applyCustomSort;
