'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callback = compareFunction;
    const defaultCallback = (f, s) => {
      const a = f.toString();
      const b = s.toString();

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    };

    if (typeof callback !== 'function') {
      callback = defaultCallback;
    }

    let wasChange = false;

    do {
      wasChange = false;

      for (let i = 0; i < this.length - 1; i++) {
        const first = this[i];
        const second = this[i + 1];

        if (callback(first, second) > 0) {
          this[i] = second;
          this[i + 1] = first;
          wasChange = true;
        }
      }
    } while (wasChange);

    return this;
  };
}

module.exports = applyCustomSort;
