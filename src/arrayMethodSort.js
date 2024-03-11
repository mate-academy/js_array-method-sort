'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let arrayToSort;
    let definedCompareFunction;
    let needConvertToInt = 0;
    let arraySorted = [];

    // Settings if compare fuction is given or not.
    if (compareFunction) {
      arrayToSort = this;
      definedCompareFunction = compareFunction;
    } else {
      if (typeof this[0] !== 'string') {
        arrayToSort = this.map((element) => String(element));
        needConvertToInt = 1;
      } else {
        arrayToSort = this.map((element) => element);
      }

      // Notice that is always lexicographic comparation by default
      definedCompareFunction = (a, b) => {
        return a > b ? 1 : -1;
      };
    }

    arraySorted = quick(arrayToSort, definedCompareFunction);

    // Put Values in original array.
    this.length = 0;

    if (needConvertToInt) {
      arraySorted.forEach((e, i) => (this[i] = +e));
    } else {
      arraySorted.forEach((e, i) => (this[i] = e));
    }

    return this;
  };
}

/* This is the quickSort recursive method for sorting */
function quick(arrayToSort, compareFunction) {
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }

  // Whe chose param[0] to simplify the code.
  const pivot = arrayToSort[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arrayToSort.length; i++) {
    if (compareFunction(arrayToSort[i], pivot) < 0) {
      less.push(arrayToSort[i]);
    } else {
      greater.push(arrayToSort[i]);
    }
  }

  return quick(less, compareFunction).concat(
    pivot,
    quick(greater, compareFunction),
  );
}

module.exports = applyCustomSort;
