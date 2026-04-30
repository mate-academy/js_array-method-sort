'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      ((a, b) => (String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0));

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
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
