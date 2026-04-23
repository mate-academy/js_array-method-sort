'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let callback = compareFunction;

    if (!compareFunction) {
      callback = (item1, item2) => {
        const strItem1 = String(item1);
        const strItem2 = String(item2);

        if (strItem1 > strItem2) {
          return 1;
        }

        if (strItem1 < strItem2) {
          return -1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (callback(this[j], this[j + 1]) > 0) {
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
