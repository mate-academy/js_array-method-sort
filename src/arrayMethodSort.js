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
      const last = arr[arr.length - 1];

      let arrRight = arr.filter(el => compare(el, last) > 0);

      let arrLeft = arr.filter(el => compare(el, last) < 0);

      const middle = arr.filter(el => compare(el, last) === 0);

      if (arrRight.length > 1) {
        arrRight = sort2(arrRight);
      }

      if (arrLeft.length > 1) {
        arrLeft = sort2(arrLeft);
      }

      return [...arrLeft, ...middle, ...arrRight];
    };

    sort2(array).forEach((el, i) => {
      this[i] = el;
    });

    return this;
  };
};

module.exports = applyCustomSort;
