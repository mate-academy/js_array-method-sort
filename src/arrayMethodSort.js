'use strict';

/**
 * Implement method Sort
 */
function appltempCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let compare = compareFunction;

    if (compare === undefined) {
      compare = function(a, b) {
        if (a.toString() >= b.toString()) {
          return 1;
        } else {
          return -1;
        };
      };
    };

    let temp = 0;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        };
      };
    };

    return this;
  };
}

module.exports = appltempCustomSort;
