'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        const tempI = this[i];
        const tempJ = this[j];

        if (!compareFunction) {
          if (String(tempI) < String(tempJ)) {
            this[i] = tempJ;
            this[j] = tempI;
          }

          continue;
        }

        if (compareFunction(tempI, tempJ) < 0) {
          this[i] = tempJ;
          this[j] = tempI;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
