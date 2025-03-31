'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort(array, compareFunction) {
  if (!Array.isArray(array)) {
    return [];
  }

  if (typeof compareFunction !== 'function' && compareFunction !== undefined) {
    throw new TypeError('The comparison must be a function or undefined.');
  }

  const arr = [...array];
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < length - 1 - i; j++) {
      const a = arr[j];
      const b = arr[j + 1];

      let shouldSwap;

      if (compareFunction) {
        shouldSwap = compareFunction(a, b) > 0;
      } else if (typeof a === 'number' && typeof b === 'number') {
        shouldSwap = a > b;
      } else {
        shouldSwap = String(a).toLowerCase() > String(b).toLowerCase();
      }

      if (shouldSwap) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

module.exports = applyCustomSort;
