'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunc = (a, b) => String(a) > String(b)) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunc(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
