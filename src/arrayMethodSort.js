'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (this.length < 2) {
      return this;
    }

    const isFunc = compareFunction !== undefined ? 1 : 0;
    let res = [];

    const startItem = this[0];
    const lessThenStart = [];
    const biggerThenStart = [];
    const equalStart = [startItem];

    for (let i = 1; i < this.length; i++) {
      if (!isFunc) {
        if (startItem.toString() > this[i].toString()) {
          lessThenStart.push(this[i]);
        } else if (startItem.toString() < this[i].toString()) {
          biggerThenStart.push(this[i]);
        } else {
          equalStart.push(this[i]);
        }
      } else {
        if (compareFunction(startItem, this[i]) > 0) {
          lessThenStart.push(this[i]);
        } else if (compareFunction(startItem, this[i]) < 0) {
          biggerThenStart.push(this[i]);
        } else {
          equalStart.push(this[i]);
        }
      }
    }

    res = lessThenStart.sort2().concat(
      equalStart.sort2(),
      biggerThenStart.sort2());

    for (let i = 0; i < this.length; i++) {
      this[i] = res[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
