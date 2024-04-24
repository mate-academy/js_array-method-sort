'use strict';

function compare(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) === String(b)) {
    return 0;
  }

  if (String(a) < String(b)) {
    return -1;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    for (let a = 0; a < this.length; a++) {
      for (let b = a + 1; b < this.length; b++) {
        if (compareFunction(this[a], this[b]) > 0) {
          const A = this[a];

          this[a] = this[b];
          this[b] = A;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
