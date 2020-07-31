'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let variable;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (this[i].toString() < this[j].toString()) {
          variable = this[i];
          this[i] = this[j];
          this[j] = variable;
        }

        if (compareFunction !== undefined) {
          if (compareFunction(this[i], this[j]) < 0) {
            variable = this[i];
            this[i] = this[j];
            this[j] = variable;
          }
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
