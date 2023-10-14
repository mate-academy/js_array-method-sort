'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
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

  [].__proto__.sort2 = function(compareFunction = сompareAsStrings) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[j];

          this[j] = this[i];
          this[i] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
