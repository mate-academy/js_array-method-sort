'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const compareFunctionCopy = compareFunction ?? compare;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (compareFunctionCopy(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}

function compare(a, b) {
  const aS = String(a);
  const bS = String(b);

  if (typeof a === 'string' && typeof b === 'string') {
    for (let i = 0; i < Math.min(aS.length, bS.length); i++) {
      if (aS[i] === aS[i].toUpperCase() && bS[i] === bS[i].toLowerCase()) {
        return -1;
      } else if (
        aS[i] === aS[i].toLowerCase() &&
        bS[i] === bS[i].toUpperCase()
      ) {
        return 1;
      }
    }
  }

  return aS.localeCompare(bS);
}

module.exports = applyCustomSort;
