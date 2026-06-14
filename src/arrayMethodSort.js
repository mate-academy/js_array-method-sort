'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Validate the compareFunction
    if (compareFunction && typeof compareFunction !== 'function') {
      throw new TypeError('The compareFunction must be a function');
    }

    // Quick sort implementation without array methods
    const quickSort = (array, left, right) => {
      if (left >= right) {
        return;
      }

      const pivotIndex = partition(array, left, right);

      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    };

    const partition = (array, left, right) => {
      const pivot = array[right]; // Use the last element as the pivot
      let i = left - 1;

      for (let j = left; j < right; j++) {
        const comparison = compareFunction
          ? compareFunction(array[j], pivot)
          : defaultCompare(array[j], pivot);

        if (comparison < 0) {
          i++;
          // Swap array[i] and array[j]

          const temp = array[i];

          array[i] = array[j];
          array[j] = temp;
        }
      }

      // Swap array[i + 1] and array[right] (pivot)
      const pivotTemp = array[i + 1];

      array[i + 1] = array[right];
      array[right] = pivotTemp;

      return i + 1; // Return the pivot index
    };

    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      return aStr < bStr ? -1 : aStr > bStr ? 1 : 0; // Lexicographic comparison
    };

    // Sort the array in place
    quickSort(this, 0, this.length - 1);

    return this; // Return the sorted array
  };
}

// Example Usage:
applyCustomSort();

module.exports = applyCustomSort;
