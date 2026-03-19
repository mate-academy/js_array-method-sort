'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let temporaryValue;
    let hasChanged = true;

    while (hasChanged === true) {
      hasChanged = false;

      for (let i = 1; i < this.length; i++) {
        if (typeof compareFunction === 'function') {
          if (compareFunction(this[i - 1], this[i]) > 0) {
            temporaryValue = this[i - 1];
            this[i - 1] = this[i];
            this[i] = temporaryValue;
            hasChanged = true;
          }
        } else {
          if (this[i - 1].toString() > this[i].toString()) {
            temporaryValue = this[i - 1];
            this[i - 1] = this[i];
            this[i] = temporaryValue;
            hasChanged = true;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
