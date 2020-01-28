'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          for (let k = 0; k < String(this[i]).length; k++) {
            if (String(this[i])[k] !== undefined
            && String(this[j])[k] !== undefined
            && String(this[i])[k] !== String(this[j])[k]) {
              if (String(this[i])[k].charCodeAt(0)
              > String(this[j])[k].charCodeAt(0)) {
                const item = this[i];

                this[i] = this[j];
                this[j] = item;
              }
              break;
            } else if (String(this[i])[k] === undefined
            || String(this[j])[k] === undefined) {
              if (String(this[i]).length > String(this[j]).length) {
                const item = this[i];

                this[i] = this[j];
                this[j] = item;
              }
            }
          }
        }
      }

      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const item = this[i];

          this[i] = this[j];
          this[j] = item;
        };
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
