'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const array = [...this];

    this.length = 0;

    let compare = compareFunction;

    if (!compareFunction) {
      compare = (a, b) => {
        if (`${a}` > `${b}`) {
          return 1;
        } else if (`${a}` < `${b}`) {
          return -1;
        } else {
          return 0;
        }
      };
    }

    function sort2(arr) {
      if (arr.length <= 1) {
        return arr;
      }

      const pivotIndex = Math.floor(arr.length / 2);
      const pivot = arr[pivotIndex];
      const arrLeft = [];
      const arrRight = [];
      const arrMiddle = [];

      for (let i = 0; i < arr.length; i++) {
        const comparison = compare(arr[i], pivot);

        if (comparison < 0) {
          arrLeft.push(arr[i]);
        } else if (comparison > 0) {
          arrRight.push(arr[i]);
        } else {
          arrMiddle.push(arr[i]);
        }
      }

      return [...sort2(arrLeft), ...arrMiddle, ...sort2(arrRight)];
    }

    const sortedArray = sort2(array);

    for (let i = 0; i < sortedArray.length; i++) {
      this[i] = sortedArray[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
