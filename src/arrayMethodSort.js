'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2
    = function(compareFunction = (a, b) => stringComparator(a, b)) {
      return bubbleSort(compareFunction, this);
    };
}

function stringComparator(a, b) {
  if (a.toString() < b.toString()) {
    return -1;
  } else if (a.toString() > b.toString()) {
    return 1;
  }

  return 0;
}

function bubbleSort(compareFunction, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (compareFunction(arr[j], arr[j + 1]) > 0) {
        const temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

module.exports = applyCustomSort;
