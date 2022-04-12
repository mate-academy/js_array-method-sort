'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let permanent;
    let changes = 0;

    if (arguments.length === 0) {
      do {
        changes = 0;

        for (let i = 0; i < this.length - 1; i++) {
          if (this[i].toString() > this[i + 1].toString()) {
            permanent = this[i];
            this[i] = this[i + 1];
            this[i + 1] = permanent;
            changes++;
          }
        }
      } while (changes > 0);
    }

    if (arguments.length > 0) {
      do {
        changes = 0;

        for (let i = 0; i < this.length - 1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            permanent = this[i];
            this[i] = this[i + 1];
            this[i + 1] = permanent;
            changes++;
          }
        }
      } while (changes > 0);
    }

    return this;
  };
}

module.exports = applyCustomSort;
