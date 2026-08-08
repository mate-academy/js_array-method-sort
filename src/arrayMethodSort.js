'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = () => undefined) {
    for (let i = 0; i < this.length; i++) {
      let min = this[i];
      let middleValue = min;

      for (let j = i + 1; j < this.length; j++) {
        if (
          String(this[j]) < String(min) &&
          compareFunction(this[j], min) === undefined
        ) {
          min = this[j];
          this[j] = middleValue;
          middleValue = min;
        } else if (
          typeof this[j] === 'string' &&
          compareFunction(min.toLowerCase(), this[j].toLowerCase()) === 1
        ) {
          min = this[j];
          this[j] = middleValue;
          middleValue = min;
        } else if (
          typeof this[j] !== 'string' &&
          compareFunction(this[j], min) <= 1
        ) {
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
