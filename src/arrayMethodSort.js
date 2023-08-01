'use strict';

const fun = function(a, b) {
  const A = String(a);
  const B = String(b);

  if (A > B) {
    return 1;
  }

  if (A === B) {
    return 0;
  }

  if (A < B) {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = fun) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (compareFunction(this[j], this[i]) > 0) {
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
