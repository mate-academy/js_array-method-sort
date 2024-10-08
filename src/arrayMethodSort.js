'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let callBack = compareFunction;

    if (!callBack) {
      callBack = function (a, b) {
        return String(a) > String(b) ? 1 : -1;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let a = 0; a < this.length - 1 - i; a++) {
        if (callBack(this[a], this[a + 1]) > 0) {
          const temp = this[a];

          this[a] = this[a + 1];
          this[a + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
