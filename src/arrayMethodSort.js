'use strict';
/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const sortFunction = compareFunction
      || ((a, b) => (String(a) > String(b) ? 1 : -1));

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (sortFunction(this[i], this[j]) > 0) {
          const cachedValue = this[i];
          this[i] = this[j];
          this[j] = cachedValue;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
