'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return a + '' > b + '';
  }) {
    let flag = true;
    let counter = 0;
    console.log (this);

    while (flag === true) {
      for (let i = 0; i < this.length; i++) {
        if (compareFunction(this[i], this[i + 1])) {
          const a = this[i];

          counter++;
          this[i] = this[i + 1];
          this[i + 1] = a;
        }
      }
      (counter === 0) ? flag = false : counter = 0;
    }
    console.log (this);

    return this;
  };
}

module.exports = applyCustomSort;
