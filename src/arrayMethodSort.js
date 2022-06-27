'use strict';

function compareDefault(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let current;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          current = this[i];
          this[i] = this[j];
          this[j] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
