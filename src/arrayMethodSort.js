'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compareMethod = compareFunction;

    if (!compareFunction || typeof compareFunction !== 'function') {
      compareMethod = function(a, b) {
        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareMethod(this[j].toString(), this[j + 1].toString()) > 0) {
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
