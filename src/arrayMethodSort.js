'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let toSort;
    let compFun;
    let convert = 0;
    let sorted = [];

    // Settings if compare fuction is given or not.
    if (compareFunction) {
      toSort = this;
      compFun = compareFunction;
    } else {
      if (typeof this[0] !== typeof '') {
        toSort = this.map((element) => String(element));
        convert = 1;
      } else {
        toSort = this.map((element) => element);
      }

      // Notice that is always lexicographic comparation by default
      compFun = (a, b) => {
        return a > b ? 1 : -1;
      };
    }

    sorted = quick(toSort, compFun);

    // Put Values in original array.
    this.length = 0;

    if (convert) {
      sorted.forEach((e, i) => (this[i] = +e));
    } else {
      sorted.forEach((e, i) => (this[i] = e));
    }

    return this;
  };
}

/* This is the quickSort recursive method for sorting */
function quick(param, funC) {
  if (param.length < 2) {
    return param;
  }

  // Whe chose param[0] to simplify the code.
  const pivot = param[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < param.length; i++) {
    if (funC(param[i], pivot) < 0) {
      less.push(param[i]);
    } else {
      greater.push(param[i]);
    }
  }

  return quick(less, funC).concat(pivot, quick(greater, funC));
}

module.exports = applyCustomSort;
