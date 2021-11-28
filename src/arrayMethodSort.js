'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let myCompare;

    if (compareFunction) {
      myCompare = compareFunction;
    } else {
      myCompare = (a, b) => a.toString() > b.toString();
    }

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        const cmpResult = myCompare(this[i], this[i + 1]);

        if (cmpResult > 0) {
          const x = this[i];

          this[i] = this[i + 1];
          this[i + 1] = x;
        };
      };
    };

    return this;
  };
};

module.exports = applyCustomSort;
