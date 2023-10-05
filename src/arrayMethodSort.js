'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b)) {
    for (let i = 0; i < this.length; i++) {
      for (let k = i + 1; k < this.length; k++) {
        const curentItem = this[i];
        const nextItem = this[k];

        if (compareFunction(curentItem, nextItem) > 0) {
          this[i] = nextItem;
          this[k] = curentItem;
        };
      };
    };

    return this;
  };
}

module.exports = applyCustomSort;
