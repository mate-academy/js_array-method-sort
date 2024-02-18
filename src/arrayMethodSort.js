'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const DEFAULT_CALLBACK = (a, b) => a.toString() > b.toString() ? 1 : -1;

  [].__proto__.sort2 = function(compareFunction = DEFAULT_CALLBACK) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const ruleResult = compareFunction(this[i], this[j]);

        if (ruleResult > 0) {
          const value = this[i];

          this[i] = this[j];
          this[j] = value;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
