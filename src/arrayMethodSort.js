'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const definedElements = [];
    const undefinedElements = [];
    const emptySlots = [];

    // Separate elements
    for (let i = 0; i < arr.length; i++) {
      if (!(i in arr)) {
        emptySlots.push(i); // Track index of empty slot
      } else if (arr[i] === undefined) {
        undefinedElements.push(arr[i]);
      } else {
        definedElements.push(arr[i]);
      }
    }

    // Default comparator if none provided
    const cmp =
      compareFunction ||
      function (a, b) {
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

    // Simple bubble sort on defined elements
    for (let i = 0; i < definedElements.length; i++) {
      for (let j = 0; j < definedElements.length - 1 - i; j++) {
        if (cmp(definedElements[j], definedElements[j + 1]) > 0) {
          const temp = definedElements[j];

          definedElements[j] = definedElements[j + 1];
          definedElements[j + 1] = temp;
        }
      }
    }

    // Merge back into original array
    let index = 0;

    for (let i = 0; i < definedElements.length; i++) {
      arr[index++] = definedElements[i];
    }

    for (let i = 0; i < undefinedElements.length; i++) {
      arr[index++] = undefinedElements[i];
    }

    for (let i = 0; i < emptySlots.length; i++) {
      delete arr[index++]; // preserve empty slots
    }

    return arr;
  };
}

module.exports = applyCustomSort;
