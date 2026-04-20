'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => `${a}` > `${b}`) {
    for (let i = 0; i < this.length; i++) {
      for (let x = i + 1; x < this.length; x++) {
        if (compareFunction(this[i], this[x]) > 0) {
          [this[i], this[x]] = [this[x], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
