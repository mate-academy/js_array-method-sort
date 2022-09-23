'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      let currentElement = String(this[i]);

      for (let j = i + 1; j < this.length; j++) {
        const nextElement = String(this[j]);
        const swapCheck = compareFunction === undefined
          ? currentElement > nextElement
          : compareFunction(this[i], this[j]) > 0;

        if (swapCheck) {
          [
            this[i],
            this[j],
          ] = [
            this[j],
            this[i],
          ];
          currentElement = String(this[i]);
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
