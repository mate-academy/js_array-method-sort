'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => String(a) === String(b) ? 0 : String(a) > String(b) ? 1 : -1) {
    let checkProceed = true;
    let temporaryContainer;

    while (checkProceed) {
      checkProceed = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          temporaryContainer = this[i];
          this[i] = this[i + 1];
          this[i + 1] = temporaryContainer;
          checkProceed = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
