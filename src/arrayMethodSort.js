'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    function swap(i, j, array) {
      const temp = array[i];

      array[i] = array[j];
      array[j] = temp;
    }

    if (compareFunction === undefined) {
      let flag = false;

      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          const a = this[i].toString().charCodeAt();
          const b = this[j].toString().charCodeAt();

          if (a === b) {
            if (this[i] > this[j]) {
              swap(i, j, this);
              i = j;
              flag = true;
            }
          }

          if (a > b) {
            swap(i, j, this);
            i = j;
            flag = true;
          }
        }

        if (flag) {
          flag = false;
          i = -1;
        }
      }

      return this;
    } else {
      for (let i = 0; i < this.length; i++) {
        let flag = false;

        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            swap(i, j, this);
            flag = true;
          }
        }

        if (flag) {
          i = -1;
        }
      }

      return this;
    }
  };
};

module.exports = applyCustomSort;
