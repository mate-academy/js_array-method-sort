'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let y = 0; y < this.length - 1 - i; y++) {
        const current = this[y];
        const next = this[y + 1];

        let trade;

        if (compareFunction) {
          trade = compareFunction(current, next) > 0;
        } else {
          trade = String(current) > String(next);
        }

        if (trade) {
          this[y] = next;
          this[y + 1] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
