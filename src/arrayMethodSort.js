'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2
    = function(compareFunction = (a, b) => a.toString() > b.toString()) {
      chooseMethod(this, compareFunction);

      return this;

      function chooseMethod(array, method) {
        for (let i = 0; i < array.length; i++) {
          for (let j = i + 1; j < array.length; j++) {
            if (method(array[i], array[j]) > 0) {
              [array[i], array[j]] = [array[j], array[i]];
            }
          }
        }
      }
    };
}

module.exports = applyCustomSort;
