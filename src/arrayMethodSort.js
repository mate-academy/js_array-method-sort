'use strict';

/**
 * Default comparator: behaves like native Array.prototype.sort
 * - Compares elements as strings
 * - Places undefined and holes at the end
 */
function defaultComparator(a, b) {
  const aUndef = a === undefined;
  const bUndef = b === undefined;

  if (aUndef && bUndef) {
    return 0;
  }

  if (aUndef) {
    return 1;
  } // undefined/hole всегда в конец

  if (bUndef) {
    return -1;
  }

  const aStr = String(a);
  const bStr = String(b);

  if (aStr < bStr) {
    return -1;
  }

  if (aStr > bStr) {
    return 1;
  }

  return 0;
}

/**
 * Custom QuickSort implementation
 * @param {any[]} arr
 * @param {Function} [comparator]
 */
function customQuickSort(arr, comparator = defaultComparator) {
  if (comparator !== undefined && typeof comparator !== 'function') {
    throw new TypeError('The comparison function must be a function');
  }

  function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }

    const pivot = array[array.length >> 1]; // середина
    const left = [];
    const right = [];
    const equal = [];

    for (const item of array) {
      const cmp = comparator(item, pivot);

      if (cmp < 0) {
        left.push(item);
      } else if (cmp > 0) {
        right.push(item);
      } else {
        equal.push(item);
      }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
  }

  return quickSort(arr);
}

/**
 * Attach custom sort2 method to Array.prototype
 */
function applyCustomSort() {
  if (!Array.prototype.sort2) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(Array.prototype, 'sort2', {
      value: function (comparator) {
        const sorted = customQuickSort([...this], comparator);

        // Мутация массива как у нативного sort
        for (let i = 0; i < sorted.length; i++) {
          this[i] = sorted[i];
        }

        return this;
      },
      configurable: true,
      writable: true,
    });
  }
}

module.exports = {
  applyCustomSort,
  customQuickSort, // eslint-disable-line
  defaultComparator, // eslint-disable-line
};
