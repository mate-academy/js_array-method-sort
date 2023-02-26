'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareFunction(a, b) {
    if (String(a) > String(b)) {
      return 1;
    } else if (String(a) === String(b)) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function (callback = compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (callback(this[j], this[i]) < 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
