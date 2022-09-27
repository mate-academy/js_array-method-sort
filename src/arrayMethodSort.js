'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let switchElements = false;
    let counter = 1;
    const compareFunctionExist = arguments.length;

    while (counter < this.length) {
      if (!compareFunctionExist) {
        switchElements = ('' + this[counter - 1] > '' + this[counter]);
      }

      if (compareFunctionExist) {
        switchElements = (
          (compareFunction(this[counter - 1], this[counter])) > 0
        );
      }

      if (switchElements) {
        [this[counter - 1], this[counter]] = [this[counter], this[counter - 1]];

        counter = (counter > 1)
          ? counter -= 2
          : counter;
      }

      counter++;
      switchElements = false;
    }

    return this;
  };
}

module.exports = applyCustomSort;
