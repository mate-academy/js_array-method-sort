'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let template;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (this[i].toString() < this[j].toString()) {
          template = this[i];
          this[i] = this[j];
          this[j] = template;
        }

        if (arguments.length) {
          if (compareFunction(this[i], this[j]) < 0) {
            template = this[i];
            this[i] = this[j];
            this[j] = template;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
