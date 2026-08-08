'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      let min = this[i];
      let middleValue = min;

      for (let j = i + 1; j < this.length; j++) {
        if (!compareFunction) {
          if (String(this[j]) < String(min)) {
            min = this[j];
            this[j] = middleValue;
            middleValue = min;
          }
        } else if (
          typeof this[j] === 'string' &&
          compareFunction(this[j].toLowerCase(), min.toLowerCase()) < 0
        ) {
          min = this[j];
          this[j] = middleValue;
          middleValue = min;
        } else if (compareFunction(this[j], min) < 0) {
          min = this[j];
          this[j] = middleValue;
          middleValue = min;
        }
      }

      this[i] = min;
    }

    return this;
  };
}

module.exports = applyCustomSort;

// String(this[j]) < String(min) &&
