'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (callback) {
    let sortFunction = callback;

    if (sortFunction === undefined) {
      sortFunction = (item1, item2) => {
        const string1 = String(item1);
        const string2 = String(item2);

        if (string1 > string2) {
          return 1;
        } else {
          return -1;
        }
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (sortFunction(this[j], this[j + 1]) > 0) {
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
