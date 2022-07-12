'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let madeSwitches = false;
    let replacedTemporary;
    let comparement;

    if (arguments.length === 0) {
      comparement = (first, second) => first.toString() > second.toString();
    } else {
      comparement = compareFunction;
    }

    do {
      madeSwitches = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (comparement(this[i], this[i + 1]) > 0) {
          replacedTemporary = this[i];
          this[i] = this[i + 1];
          this[i + 1] = replacedTemporary;
          madeSwitches = true;
        }
      }
    } while (madeSwitches);

    return this;
  };
}

module.exports = applyCustomSort;
