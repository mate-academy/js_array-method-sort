'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const array = [...this];

    this.length = 0;

    const sortLikeAString = function sort2(arr) {
      let arrRight = arr.filter(el => `${el}`
      > `${arr[arr.length - 1]}`);

      let arrLeft = arr.filter(el => `${el}`
      < `${arr[arr.length - 1]}`);

      const middle = arr.filter(el => `${el}`
      === `${arr[arr.length - 1]}`);

      if (arrRight.length > 1) {
        arrRight = sort2(arrRight);
      }

      if (arrLeft.length > 1) {
        arrLeft = sort2(arrLeft);
      }

      return [...arrLeft, ...middle, ...arrRight];
    };

    const sortNumbers = function sort2(arr) {
      const last = arr[arr.length - 1];

      let arrRight = arr.filter(el => compareFunction(el, last) > 0);

      let arrLeft = arr.filter(el => compareFunction(el, last) < 0);

      const middle = arr.filter(el => compareFunction(el, last) === 0);

      if (arrRight.length > 1) {
        arrRight = sort2(arrRight);
      }

      if (arrLeft.length > 1) {
        arrLeft = sort2(arrLeft);
      }

      return [...arrLeft, ...middle, ...arrRight];
    };

    !compareFunction ? sortLikeAString(array).forEach((el, i) => {
      this[i] = el;
    }) : sortNumbers(array).forEach((el, i) => {
      this[i] = el;
    });

    return this;
  };
};

module.exports = applyCustomSort;

const source = [3, 12, 2, 2, 11, 233, 234, 23, 35, 53, 35, 23, 5, 6, 6, 6, 565];

applyCustomSort();

console.log(source.sort2((a, b) => a - b));
