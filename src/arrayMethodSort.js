'use strict';

function applyCustomSort() {
  const compareString = (a, b) => {
    const A = String(a);
    const B = String(b);

    if (A > B) {
      return 1;
    }

    if (A === B) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareString) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const current = this[i];

          this[i] = this[j];
          this[j] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
