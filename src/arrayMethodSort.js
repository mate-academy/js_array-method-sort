'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction) {
          if (compareFunction(this[i], this[j]) > 0) {
            const saveValue = this[j];

            this[j] = this[i];
            this[i] = saveValue;
          }
        } else if (String(this[i]) > String(this[j])) {
          const saveValue = this[j];

          this[j] = this[i];
          this[i] = saveValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
