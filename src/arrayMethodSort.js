'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      if (!compareFunction) {
        for (let k = i; k < this.length; k++) {
          if (String(this[k]) < String(this[i])) {
            this.splice(i, 0, this[k]);
            this.splice(k + 1, 1);
          }
        }
      }

      if (compareFunction) {
        for (let j = i; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) === 1) {
            this.splice(i, 0, this[j]);
            this.splice(j + 1, 1);
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
