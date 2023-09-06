'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let copyCompare = compareFunction;

    if (compareFunction === undefined && typeof this[0] === 'string') {
      copyCompare = (firstElement, secondElement) =>
        firstElement > (secondElement);

      do {
        for (let i = 0; i < this.length - 1; i++) {
          const first = '' + this[i];
          const second = '' + this[i + 1];

          if (copyCompare(first, second) === true) {
            this[i] = second;
            this[i + 1] = first;
          }
        }
      } while (copyCompare(this[0], this[1]) === true);
    }

    if (compareFunction !== undefined && typeof this[0] === 'string') {
      do {
        for (let i = 0; i < this.length - 1; i++) {
          const first = '' + this[i];
          const second = '' + this[i + 1];

          if (copyCompare(first, second) === 1) {
            this[i] = second;
            this[i + 1] = first;
          }
        }
      } while (copyCompare(this[0], this[1]) === 1);
    }

    if (compareFunction === undefined && typeof this[0] === 'number') {
      copyCompare = (firstElement, secondElement) =>
        firstElement > secondElement;

      do {
        for (let i = 0; i < this.length - 1; i++) {
          const first = '' + this[i];
          const second = '' + this[i + 1];

          if (copyCompare(first, second) === true) {
            this[i] = +second;
            this[i + 1] = +first;
          }
        }
      } while (copyCompare(this[0], this[1]) === true);
    }

    if (compareFunction !== undefined && typeof this[0] === 'number') {
      do {
        for (let i = 0; i < this.length - 1; i++) {
          const first = this[i];
          const second = this[i + 1];

          if (copyCompare(first, second) > 0) {
            this[i] = second;
            this[i + 1] = first;
          }
        }
      } while (copyCompare(this[0], this[1]) > 0);
    }

    do {
      for (let i = 0; i < this.length - 1; i++) {
        const first = '' + this[i];
        const second = '' + this[i + 1];

        if (copyCompare(first, second) === 1) {
          this[i] = second;
          this[i + 1] = first;
        }
      }
    } while (copyCompare(this[0], this[1]) === 1);

    return this;
  };
}
module.exports = applyCustomSort;
