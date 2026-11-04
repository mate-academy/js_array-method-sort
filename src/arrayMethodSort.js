'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
          if (compareFunction) {
            if (compareFunction(arr[j], arr[j + 1]) > 0) {
              const temp = arr[j]; 
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          } else if (String(arr[j]) > String(arr[j + 1])) { 
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
