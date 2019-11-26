'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let k = 0; k < this.length; k++) {
      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currentValue = this[i];

        if ((compareFunction === undefined
            && prevValue.toString() > currentValue.toString())
          || (compareFunction !== undefined
            && compareFunction(prevValue, currentValue) > 0)) {
          this[i] = prevValue;
          this[i - 1] = currentValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
