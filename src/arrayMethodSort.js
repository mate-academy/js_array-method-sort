'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const copyArr = [...this];
    let defaultFn = compareFunction;

    if (!compareFunction) {
      defaultFn = (a, b) => String(a) > String(b);
    }

    for (let i = 0; i < copyArr.length - 1; i++) {
      for (let j = 0; j < copyArr.length - 1 - i; j++) {
        if (defaultFn(copyArr[j], copyArr[j + 1]) > 0) {
          [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];
        }
      }
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = copyArr[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
