'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length; j++) {
        const prev = this[j];

        if (typeof (compareFunction) === 'function') {
          if ((compareFunction(this[j], this[j + 1])) > 0) {
            this[j] = this[j + 1];
            this[j + 1] = prev;
          }
        } else {
          if (typeof (this[j]) === 'string') {
            if (this[j] > this[j + 1]) {
              this[j] = this[j + 1];
              this[j + 1] = prev;
            }
          } else if (String(this[j]) > String(this[j + 1])) {
            this[j] = this[j + 1];
            this[j + 1] = prev;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
