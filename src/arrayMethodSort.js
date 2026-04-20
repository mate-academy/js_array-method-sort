'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const length = this.length;

    // Helper function to check if a value should be moved to the end
    const isUndefinedOrEmpty = (value) =>
      value === undefined || (!(value in this) && typeof value === 'undefined');

    // First pass: Move undefined and empty slots to the end
    const validElements = [];

    for (let i = 0; i < length; i++) {
      if (!isUndefinedOrEmpty(this[i])) {
        validElements.push(this[i]);
      }
    }

    // Sort valid elements
    for (let i = 0; i < validElements.length - 1; i++) {
      for (let j = 0; j < validElements.length - 1 - i; j++) {
        let shouldSwap;

        if (compareFunction) {
          shouldSwap =
            compareFunction(validElements[j], validElements[j + 1]) > 0;
        } else {
          shouldSwap = String(validElements[j]) > String(validElements[j + 1]);
        }

        if (shouldSwap) {
          [validElements[j], validElements[j + 1]] = [
            validElements[j + 1],
            validElements[j],
          ];
        }
      }
    }

    // Reconstruct the array with sorted elements followed by undefined
    for (let i = 0; i < validElements.length; i++) {
      this[i] = validElements[i];
    }

    for (let i = validElements.length; i < length; i++) {
      this[i] = undefined;
    }

    return this;
  };
}

module.exports = applyCustomSort;
