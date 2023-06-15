'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    for (let n = 0; n < this.length; n++) {
      for (let i = 0; i < this.length - 1 - n; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }

    return this;
  };

  function defaultFunction(a, b) {
    if (String(a) < String(b)) {
      return -1;
    }

    if (String(a) > String(b)) {
      return 1;
    }

    if (String(a) === String(b)) {
      return 0;
    }
  }
}

module.exports = applyCustomSort;
