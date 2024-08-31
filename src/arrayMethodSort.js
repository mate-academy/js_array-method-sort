'use strict';

const compare = (a, b) => {
  return a.toString() > b.toString() ? 1 : -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = compare) {
    let valueCopy = 0;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          valueCopy = this[i];
          this[i] = this[j];
          this[j] = valueCopy;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
