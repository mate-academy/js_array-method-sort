'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const currArr = this;
    const len = currArr.length;

    const isCustomCompareTrue = typeof compareFunction === 'function';

    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < len; j++) {
        let compRes;

        if (isCustomCompareTrue) {
          compRes = compareFunction(currArr[j], currArr[minIndex]);
        } else {
          const valJ = String(currArr[j]);
          const valMin = String(currArr[minIndex]);

          if (valJ < valMin) {
            compRes = -1;
          } else if (valJ > valMin) {
            compRes = 1;
          } else {
            compRes = 0;
          }
        }

        if (compRes < 0) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        const temp = currArr[i];

        currArr[i] = currArr[minIndex];
        currArr[minIndex] = temp;
      }
    }

    return currArr;
  };
}

module.exports = applyCustomSort;
