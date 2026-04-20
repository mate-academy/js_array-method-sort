'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = undefined) {
    const compareDefault = (a, b) => {
      const stringA = String(a);
      const stringB = String(b);

      if (stringA > stringB) {
        return 1;
      }

      if (stringA < stringB) {
        return -1;
      }

      return 0;
    };

    const compare = compareFunction || compareDefault;
    const holeArr = [];

    for (let i = 0; i < this.length; i++) {
      if (!(i in this)) {
        holeArr.push(this[i]);
      }
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          if (this[j] === undefined || this[j + 1] === undefined) {
            continue;
          }

          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    for (const hole of holeArr) {
      this.push(hole);
    }

    return this;
  };
}

module.exports = applyCustomSort;
