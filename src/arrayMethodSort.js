'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compareFunctionMain = compareFunction;

    if (typeof compareFunction === 'function') {
      compareFunctionMain = (a, b) => {
        const valueA = '' + a;
        const valueB = '' + b;

        if (valueA > valueB) {
          return 1;
        }

        if (valueA < valueB) {
          return -1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunctionMain(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
