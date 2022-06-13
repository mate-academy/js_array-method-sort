'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareString(a, b) {
    if (String(a) > String(b)) {
      return 1;
    } else if (String(a) < String(b)) {
      return -1;
    } else {
      return 0;
    }
  }

  [].__proto__.sort2 = function(compareFunction = compareString) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (compareFunction(this[j], this[i]) > 0) {
          const temporaryValue = this[i];

          this[i] = this[j];
          this[j] = temporaryValue;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
