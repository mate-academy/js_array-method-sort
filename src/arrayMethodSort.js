'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareValue(prev, cur) {
    const prevS = String(prev);
    const curS = String(cur);

    if (prevS > curS) {
      return 1;
    }

    if (prevS < curS) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function(callback = compareValue) {
    let flag;

    do {
      flag = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const cur = this[i];

        if (callback(prev, cur) > 0) {
          this[i] = prev;
          this[i - 1] = cur;
          flag = true;
        }
      }
    } while (flag);

    return this;
  };
}

module.exports = applyCustomSort;
