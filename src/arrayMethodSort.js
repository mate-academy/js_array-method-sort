'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    // for (let i = 0; i < this.length - 1; i++) {
    //   // const cur = this[i];

    //   for (let j = i + 1; j < this.length; j++) {
    //     if (compareFunction === undefined) {
    //       if (String(this[i]) > String(this[j])) {
    //         const cur = this[i];

    //         this[i] = this[j];
    //         this[j] = cur;
    //       }
    //     } else if (compareFunction(this[i], this[j]) > 0) {
    //       const cur = this[i];

    //       this[i] = this[j];
    //       this[j] = cur;
    //     }
    //   }
    // }

    // return this;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction === undefined) {
          if (String(this[i]) > String(this[j])) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        } else if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
