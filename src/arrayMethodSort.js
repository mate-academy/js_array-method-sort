'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // debugger;
    let compareFunctionToUse;

    if (typeof compareFunction !== 'function') {
      compareFunctionToUse = function (a, b) {
        const sA = String(a);
        const sB = String(b);

        if (sA > sB) {
          return 1;
        }

        if (sA < sB) {
          return -1;
        }

        return 0;
      };
    } else {
      compareFunctionToUse = compareFunction;
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunctionToUse(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
