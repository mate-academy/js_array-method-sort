'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defCallback = (a, b) => {
    let first = a;
    let second = b;

    if (typeof a === 'number') {
      first = String(a);
      second = String(b);
    }

    if (first > second) {
      return 1;
    };

    if (first < second) {
      return -1;
    };

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = defCallback) {
    const sort = () => {
      for (let i = 0; i < this.length; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const first = this[i];
          const second = this[i + 1];

          this[i] = second;
          this[i + 1] = first;
          sort();
        }
      }
    };

    sort();

    return this;
  };
}

module.exports = applyCustomSort;
