'use strict';

/**
 * Implement method Sort
 */
function swap(array, i, j) {
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
}

function partition(array, low, high, comparator) {
  const x = array[high];
  let i = low - 1;

  for (let j = low; j < high; ++j) {
    if (comparator(array[j], x) < 0) {
      ++i;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, high);

  return i + 1;
}

function quickSort(array, low, high, comparator) {
  if (high <= low) {
    return;
  }

  const i = partition(array, low, high, comparator);

  quickSort(array, low, i - 1, comparator);
  quickSort(array, i + 1, high, comparator);
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let comparator = compareFunction;

    if (comparator === undefined || typeof comparator !== 'function') {
      comparator = (a, b) => {
        const sa = String(a);
        const sb = String(b);

        if (sa < sb) {
          return -1;
        }

        if (sa > sb) {
          return 1;
        }

        return 0;
      };
    }

    quickSort(this, 0, this.length - 1, comparator);

    return this;
  };
}

module.exports = applyCustomSort;
