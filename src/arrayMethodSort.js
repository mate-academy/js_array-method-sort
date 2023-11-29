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
          const a = `${this[j]}`;
          const b = `${this[j + 1]}`;

          if (a > b) {
            this[j] = this[j + 1];
            this[j + 1] = prev;
          }
        }
      }
    };

    return this;
  };
}

module.exports = applyCustomSort;
