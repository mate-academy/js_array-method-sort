'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < (this.length - i - 1); j++) {
        let sortMethod = this[j].toString() > this[j + 1].toString();

        if (arguments.length > 0) {
          sortMethod = compareFunction(this[j], this[j + 1]) > 0;
        }

        if (sortMethod) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
