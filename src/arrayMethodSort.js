'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1),
  ) {
    // write code here
    const sortArr = this;

    const defaultSort = (a, b) => {
      const firstStr = a.toString();
      const secondStr = b.toString();

      if (firstStr > secondStr) {
        return 1;
      }

      if (firstStr < secondStr) {
        return -1;
      }

      return 0;
    };

    if (typeof compareFunction !== 'function') {
      compareFunction(defaultSort);
    } else {
      for (let i = 0; i < sortArr.length - 1; i++) {
        for (let j = 0; j < sortArr.length - i - 1; j++) {
          if (compareFunction(sortArr[j], sortArr[j + 1]) > 0) {
            [sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]];
          }
        }
      }
    }

    return sortArr;
  };
}

module.exports = applyCustomSort;
