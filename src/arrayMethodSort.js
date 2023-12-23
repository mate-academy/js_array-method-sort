'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const inputArray = [...this];

    function compareElements(a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    }

    function reorganiseArray(array, comparison = compareElements) {
      for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
          let firstValue = array[j] + '';
          let secondValue = array[j + 1] + '';

          if (comparison !== compareElements) {
            firstValue = array[j];
            secondValue = array[j + 1];
          }

          if (comparison(firstValue, secondValue) > 0) {
            array[j] = secondValue;
            array[j + 1] = firstValue;
          }
        }
      }
    }

    if (compareFunction === undefined) {
      reorganiseArray(inputArray);

      if (typeof this[0] === 'number') {
        for (let i = 0; i < this.length; i++) {
          this[i] = Number(inputArray[i]);
        }
      } else {
        for (let i = 0; i < this.length; i++) {
          this[i] = inputArray[i];
        }
      }

      return this;
    } else {
      reorganiseArray(inputArray, compareFunction);

      for (let i = 0; i < this.length; i++) {
        this[i] = inputArray[i];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
