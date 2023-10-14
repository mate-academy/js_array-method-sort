'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const сompareAsStrings = (a, b) => {
      const stringA = String(a);
      const stringB = String(b);

      if (stringA > stringB) {
        return 1;
      } else
      if (stringA === stringB) {
        return 0;
      } else {
        return -1;
      }
    };

    const compare = compareFunction || сompareAsStrings;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
