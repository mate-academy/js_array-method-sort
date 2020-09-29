'use strict';

/**
 * Implement method Sort
 */
function compareString(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA < strB) {
    return -1;
  }

  if (strA > strB) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let flag;

    do {
      flag = 0;

      for (let i = 1; i < this.length; i++) {
        const previousItem = this[i - 1];
        const currentItem = this[i];

        if (compareFunction(previousItem, currentItem) > 0) {
          this[i - 1] = currentItem;
          this[i] = previousItem;
          flag++;
        }
      }
    } while (flag > 0);

    return this;
  };
}

module.exports = applyCustomSort;
