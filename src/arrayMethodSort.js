'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let v = 0; v < (this.length - i - 1); v++) {
        if (arguments.length === 0) {
          if (this[v].toString() > this[v + 1].toString()) {
            const temp = this[v];

            this[v] = this[v + 1];
            this[v + 1] = temp;
          }
        } else {
          if (compareFunction(this[v], this[v + 1]) > 0) {
            const temp = this[v];

            this[v] = this[v + 1];
            this[v + 1] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
