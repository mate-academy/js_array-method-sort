'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {

        if (compareFunction !== undefined ) {
          if (compareFunction(this[i], this[j]) > 0) {
            [this[i], this[j]] = [this[j], this[i]];
          }

        } else if (`${this[i]}` > `${this[j]}`) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}


module.exports = applyCustomSort;
