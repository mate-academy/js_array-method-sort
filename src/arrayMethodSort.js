'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => a.toString() < b.toString() ? -1 : 1
  ) {
    return BubbleSort(this, compareFunction);
  };
}

function BubbleSort(
  arr,
  cmpFunc,
) {
  let again = false;

  do {
    again = false;

    for (let i = 1; i < arr.length; i++) {
      if (cmpFunc(arr[i - 1], arr[i]) > 0) {
        Swap(arr, i - 1, i);
        again = true;
      }
    }
  } while (again);

  return arr;
}

function Swap(
  arr,
  index1,
  index2,
) {
  const temp = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = temp;
}

module.exports = applyCustomSort;
