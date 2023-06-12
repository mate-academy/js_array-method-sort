'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      let indexMin = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction) {
          if (compareFunction(this[j], this[indexMin]) < 0) {
            indexMin = j;
          }
        } else {
          if (String(this[j]) < String(this[indexMin])) {
            indexMin = j;
          }
        }
      }

      if (indexMin !== i) {
        const lesser = this[indexMin];

        this[indexMin] = this[i];
        this[i] = lesser;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
