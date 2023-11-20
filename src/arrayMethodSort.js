'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction === undefined) {
      const copyArray = [...this];
      const sortArray = [];

      for (let j = 0; j < this.length; j++) {
        let minValue = copyArray[0];
        let count = 0;

        for (let i = 0; i < copyArray.length; i++) {
          if (String(minValue) > String(copyArray[i])) {
            minValue = copyArray[i]; // find the smallest value
            count = i;
          }
        }
        sortArray[j] = minValue; // add the value
        // replace the value with the last one in the array
        copyArray[count] = copyArray[copyArray.length - 1];
        copyArray.length -= 1; // make the array shorter
        count = 0; // reset the counter
      }

      for (let k = 0; k < sortArray.length; k++) {
        this[k] = sortArray[k]; // change the input array
      }

      return this;
    }

    let changeCount = this.length;
    let change = 0;
    let difArray = [...this];

    while (changeCount !== 0) {
      for (let i = 0; i < this.length; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction(a, b) > 0) { // sort neighboring elements
          this[i] = difArray[i + 1];
          this[i + 1] = difArray[i];
          difArray = [...this];
          change++; // the cycle will end when there are no permutations
        }
      }
      changeCount = change;
      change = 0;
    }

    return this;
  };
}

module.exports = applyCustomSort;
