'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (this.length < 2) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < (this.length - i - 1); j++) {
        if ((compareFunction !== undefined
          && (compareFunction(this[j], this[j + 1]) > 0))
          || (compareFunction === undefined
          && (this[j].toString() > this[j + 1].toString()))) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
