'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let madeSwitches = false;
    let replacedTemporary;

    if (arguments.length === 0) {
      do {
        madeSwitches = false;

        for (let i = 0; i < this.length - 1; i++) {
          if (this[i].toString() > this[i + 1].toString()) {
            replacedTemporary = this[i];
            this[i] = this[i + 1];
            this[i + 1] = replacedTemporary;
            madeSwitches = true;
          }
        }
      } while (madeSwitches);
    } else {
      do {
        madeSwitches = false;

        for (let i = 0; i < this.length - 1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            replacedTemporary = this[i];
            this[i] = this[i + 1];
            this[i + 1] = replacedTemporary;
            madeSwitches = true;
          }
        }
      } while (madeSwitches);
    }

    return this;
  };
}

module.exports = applyCustomSort;
