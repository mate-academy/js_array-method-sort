'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      function (x, y) {
        if (String(x) > String(y)) {
          return 1;
        }

        if (String(x) < String(y)) {
          return -1;
        }

        return 0;
      };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
