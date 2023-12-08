'use strict';

function applyCustomSort() {
  function defaultcompareFunction(a, b) {
    if (a.toString() > b.toString()) {
      return 1;
    }

    if (a.toString() < b.toString()) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function(compareFunction = defaultcompareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let k = i + 1; k < this.length; k++) {
        if (compareFunction(this[i], this[k]) > 0) {
          [this[i], this[k]] = [this[k], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
