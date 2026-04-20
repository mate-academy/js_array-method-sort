'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (elem1, elem2) => {
      if (elem1 > elem2) {
        return 1;
      } else if (elem1 < elem2) {
        return -1;
      } else {
        return 0;
      }
    },
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const el1 = this[i];
        const el2 = this[j];

        if (compareFunction(String(el1), String(el2)) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
