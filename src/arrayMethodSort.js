'use strict';

/**
 * Implement method Sort
//  */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let value1 = '';
    let value2 = '';

    if (!compareFunction) {
      for (let a = this.length; a >= 0; a--) {
        for (let i = 0; i < this.length - 1; i++) {
          value1 = this[i];
          value2 = this[i + 1];

          if ((value1).toString() > (value2).toString()) {
            this[i] = value2;
            this[i + 1] = value1;
          }
        }
      }
    } else {
      for (let a = this.length; a >= 0; a--) {
        for (let i = 0; i < this.length - 1; i++) {
          value1 = this[i];
          value2 = this[i + 1];

          if (compareFunction(value1, value2) > 0) {
            this[i] = value2;
            this[i + 1] = value1;
          }
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
