'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = (a, b) => {
    if (String(a) > String(b)) {
      return 1;
    } else if (String(a) < String(b)) {
      return -1;
    } else {
      return 0;
    }
  }) {
    let wasTransposition = false;

    for (let i = 1; i < this.length; i++) {
      if (callback(this[i - 1], this[i]) > 0) {
        [this[i], this[i - 1]] = [this[i - 1], this[i]];
        wasTransposition = true;
      }
    }

    if (wasTransposition) {
      this.sort2(callback);
    }

    return this;
  };
}

module.exports = applyCustomSort;
