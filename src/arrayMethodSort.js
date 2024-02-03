'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    function sortString(data) {
      for (let i = 0; i < data.length; i++) {
        let flag = false;

        for (let j = i + 1; j < data.length; j++) {
          const a = data[i].toString();
          const b = data[j].toString();

          if (a === b) {
            if (data[i] > data[j]) {
              const temp = data[i];

              data[i] = data[j];
              data[j] = temp;
              i = j;
              flag = true;
            }
          }

          if (a > b) {
            const temp = data[i];

            data[i] = data[j];
            data[j] = temp;
            i = j;
            flag = true;
          }
        }

        if (flag) {
          flag = false;
          i = -1;
        }
      }
    }

    if (compareFunction === undefined) {
      sortString(this);

      return this;
    }

    if (compareFunction) {
      for (let i = 0; i < this.length; i++) {
        let flag = false;

        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
            flag = true;
            i--;
          } else if (compareFunction(this[i], this[i + 1]) < 0
            || (this[i], this[i + 1]) === 0) {
            continue;
          }
        }

        if ((i === this.length - 1) && flag) {
          i = -1;
        }
      }

      return this;
    }

    return this;
  };
};

module.exports = applyCustomSort;
