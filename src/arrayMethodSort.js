'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (String(a) < String(b)) {
        return -1;
      } else if (String(a) > String(b)) {
        return 1;
      }

      return 0;
    },
  ) {
    for (let originI = 0; originI < this.length - 1; originI++) {
      for (let compareI = originI + 1; compareI < this.length; compareI++) {
        if (compareFunction(this[originI], this[compareI]) > 0) {
          const buf = this[originI];

          this[originI] = this[compareI];
          this[compareI] = buf;
        }
      }
    }

    // for (let i = 0; i < this.length - 1; ) {
    //   const a = this[i];
    //   const b = this[i + 1];

    //   if (compareFunction(a, b) > 0) {
    //     this[i] = b;
    //     this[i + 1] = a;
    //     i = 0;
    //   } else {
    //     i++;
    //   }
    // }

    return this;
  };
}

module.exports = applyCustomSort;
