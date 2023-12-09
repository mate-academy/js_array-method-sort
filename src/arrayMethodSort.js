'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const inputArray = [...this];

    if (compareFunction === undefined) {
      for (let l = 0; l < inputArray.length; l++) {
        inputArray[l] += '';
      }

      for (let i = 0; i <= this.length - 1; i++) {
        for (let j = 0; j < this.length - 1; j++) {
          for (let k = 0; k <= inputArray[j].length - 1; k++) {
            const firstValue = inputArray[j];
            const secondValue = inputArray[j + 1];

            if (firstValue.charCodeAt(k) === secondValue.charCodeAt(k)) {
              continue;
            } else if (firstValue.charCodeAt(k) > secondValue.charCodeAt(k)) {
              inputArray[j + 1] = firstValue;
              inputArray[j] = secondValue;
              break;
            } else {
              break;
            }
          }
        }
      }

      if (typeof this[0] === 'number') {
        for (let i = 0; i < this.length; i++) {
          this[i] = Number(inputArray[i]);
        }
      } else {
        for (let i = 0; i < this.length; i++) {
          this[i] = inputArray[i];
        }
      }

      return this;
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j <= this.length - 2; j++) {
          const firstValue = inputArray[j];
          const secondValue = inputArray[j + 1];

          if (compareFunction(inputArray[j], inputArray[j + 1]) > 0) {
            inputArray[j] = secondValue;
            inputArray[j + 1] = firstValue;
          };
        }
      }

      for (let i = 0; i < this.length; i++) {
        this[i] = inputArray[i];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
