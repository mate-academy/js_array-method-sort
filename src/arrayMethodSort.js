'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let isAllNaN = true;

    /* compareFunction is omitted */
    if (!compareFunction) {
      for (let i = 0; i < this.length; i++) {
        if (isAllNaN) {
          isAllNaN = !(typeof this[i] === 'number');
        }
        this[i] = this[i].toString();
      }

      const result = bubbleSort(this, (a, b) => a > b);

      /* if initial array have nums than convert all items back to num */
      if (!isAllNaN) {
        for (let i = 0; i < result.length; i++) {
          result[i] = Number(result[i]);
        }
      }

      return result;
    }

    /* if compareFunction was passed */
    return bubbleSort(this, compareFunction);

    function bubbleSort(array, compareFn) {
      const n = array.length;

      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (compareFn(array[j], array[j + 1]) > 0) {
            const temp = array[j];

            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }

      return array;
    }
  };
}

module.exports = applyCustomSort;
