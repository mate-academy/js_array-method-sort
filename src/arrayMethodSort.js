'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (!compareFunction) {
          if (this[i].toString() > this[j].toString()) {
            const temp = this[i];
            this[i] = this[j];
            this[j] = temp;
          }
        }
        if (compareFunction) {
          if (compareFunction(this[i].toString(), this[j].toString()) > 0) {
            const temp = this[i];
            this[i] = this[j];
            this[j] = temp;
          }
        }
      }
    }
    
    // console.log(compareFunction)
    return this;
  };
}

module.exports = applyCustomSort;
