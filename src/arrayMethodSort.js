'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction) {
      specificSort(compareFunction, this);
    } else {
      defaultSort(this);
    }

    return this;
  };
}

function specificSort(callback, arr) {
  let condition = true;

  while (condition) {
    condition = false;

    for (let i = 1; i < arr.length; i++) {
      if (callback(arr[i - 1], arr[i]) > 0) {
        const tempValue = arr[i];

        arr[i] = arr[i - 1];
        arr[i - 1] = tempValue;
        condition = true;
      }
    }
  }

  return arr;
}

function defaultSort(arr) {
  let condition = true;

  while (condition) {
    condition = false;

    for (let i = 1; i < arr.length; i++) {
      if ('' + arr[i - 1] > '' + arr[i]) {
        const tempValue = arr[i];

        arr[i] = arr[i - 1];
        arr[i - 1] = tempValue;
        condition = true;
      }
    }
  }

  return arr;
}

module.exports = applyCustomSort;
