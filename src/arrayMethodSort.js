'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (callback) {
    if (callback) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1; j++) {
          const result = callback(this[j], this[j + 1]);

          if (result > 0) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }
    } else if (callback === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1; j++) {
          const firstVariable = String(this[j]);
          const secondVariable = String(this[j + 1]);

          if (firstVariable > secondVariable) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
