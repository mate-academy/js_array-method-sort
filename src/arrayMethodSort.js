'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // Define the custom sort2 method on the Array prototype
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this; // Reference to the current array
    const len = arr.length; // Length of the array

    /**
     * Default comparison function (lexicographical order)
     * Converts elements to strings and compares them.
     * @param {*} a - First element to compare
     * @param {*} b - Second element to compare
     * @returns {number} - Negative if a < b, positive if a > b, zero if equal
     */
    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      if (aStr < bStr) {
        return -1;
      }

      if (aStr > bStr) {
        return 1;
      }

      return 0;
    };

    // Check if compareFunction is provided and is a function
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError('compareFunction must be a function');
    }

    // Use the provided compareFunction or the default one
    const compare =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    /**
     * In-place Quicksort implementation
     * @param {number} start - Starting index of the segment to sort
     * @param {number} end - Ending index of the segment to sort
     */
    function quickSort(start, end) {
      // Base case: If the segment has zero or one element, it's already sorted
      if (start >= end) {
        return;
      }

      // Choose the pivot as the last element in the current segment
      const pivot = arr[end];
      let i = start; // Index to track the position for swapping

      // Iterate through the segment and partition the array around the pivot
      for (let j = start; j < end; j++) {
        if (compare(arr[j], pivot) < 0) {
          // Swap arr[i] and arr[j] using array destructuring
          // This moves the smaller element to the "left" side
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++; // Move the boundary for smaller elements
        }
      }

      // After partitioning, place the pivot in its correct sorted position
      // Swap arr[i] (first element greater than pivot) with arr[end] (pivot)
      [arr[i], arr[end]] = [arr[end], arr[i]];
      // Now, arr[i] is in its final sorted position

      // Recursively sort the left partition (elements less than pivot)
      quickSort(start, i - 1);
      // Recursively sort the right partition (elements greater than pivot)
      quickSort(i + 1, end);
    }

    // Initiate the Quicksort on the entire array
    // '0' is the starting index, and 'len - 1' is the ending index
    quickSort(0, len - 1);

    return arr; // Return the sorted array
  };
}

module.exports = applyCustomSort;
