'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let element;

    if (compareFunction === undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        element = this[i];

        for (let j = i + 1; j < this.length; j++) {
          if (element.toString() > this[j].toString()) {
            this[i] = this[j];
            this[j] = element;
            element = this[i];
          }
        }
      }

      return this;
    }

    if (typeof compareFunction === 'function') {
      for (let i = 0; i < this.length - 1; i++) {
        element = this[i];

        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(element.toString(), this[j].toString()) > 0) {
            this[i] = this[j];
            this[j] = element;
            element = this[i];
          }
        }
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
