'use strict';
/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        const changeHandler = (a, b) => {
          const temp = this[a];

          this[a] = this[b];
          this[b] = temp;
        };

        if (compareFunction) {
          if (compareFunction(this[i], this[j]) < 0) {
            changeHandler(i, j);
          }

          if (compareFunction(this[i], this[j]) > 0) {
            changeHandler(j, i);
          }
        } else {
          if (`${this[i]}` > `${this[j]}`) {
            changeHandler(i, j);
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
