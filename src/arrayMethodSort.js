'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let temp = '';
    const swap = (first, second) => {
      let newFirst = first;
      let newSecond = second;
      temp = first.toString();
      newFirst = second.toString();
      newSecond = temp;
      return [newFirst, newSecond];
    };

    if (compareFunction !== undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i].toString(), this[j].toString()) > 0) {
            [this[i], this[j]] = swap(this[i], this[j]);
          }
        }
        if (!isNaN(Number(this[i]))) {
          this[i] = Number(this[i]);
        }
      }
    }

    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (this[i].toString() > this[j].toString()) {
            [this[i], this[j]] = swap(this[i], this[j]);
          }
        }

        if (!isNaN(Number(this[i]))) {
          this[i] = Number(this[i]);
        }
      }
    }
    return this;
  };
}

module.exports = applyCustomSort;
