'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare = (a, b) => {
      if (String(a) > String(b)) {
        return 1;
      } else if (String(a) < String(b)) {
        return -1;
      }

      return 0;
    };

    if (typeof compareFunction === 'function') {
      compare = compareFunction;
    }

    for (let prev = 0; prev < this.length; prev++) {
      for (let next = prev + 1; next < this.length; next++) {
        if (compare(this[prev], this[next]) > 0) {
          const temp = this[prev];

          this[prev] = this[next];
          this[next] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
