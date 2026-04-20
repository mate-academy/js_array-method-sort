'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    if (compareFunction === undefined) {
      bubbleSort(this);
    } else {
      bubbleSort(this, compareFunction);
    }

    return this;
  };
}

function compareStrings(a, b) {
  return a.toString() > b.toString();
}

function bubbleSort(arr, callback = compareStrings) {
  let i, j;
  const len = arr.length - 1;

  let isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (callback(arr[j], arr[j + 1]) > 0) {
        const temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }
}

module.exports = applyCustomSort;
