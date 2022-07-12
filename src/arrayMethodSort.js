'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compFunc;
    let hadChanges = false;

    if (arguments.length === 0) {
      compFunc = defaultCompareFunction;
    } else {
      compFunc = compareFunction;
    }

    do {
      hadChanges = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compFunc(this[i], this[i + 1]) > 0) {
          switchPlaces(this, i, i + 1);
          hadChanges = true;
        }
      }
    } while (hadChanges);

    return this;
  };
}

function switchPlaces(arr, index1, index2) {
  const memory = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = memory;
}

// function isSorted(arr, callback) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (callback(arr[i], arr[i + 1]) > 0) {
//       return false;
//     }
//   }

//   return true;
// }

function defaultCompareFunction(a, b) {
  const first = '' + a;
  const second = '' + b;

  switch (true) {
    case first < second: return -1;
    case first > second: return 1;
    case first === second: return 0;
  }
}

module.exports = applyCustomSort;
