'use strict';

/**
 * Implement method Sort
 */
const compareFunctionByDefault = (a, b) => {
  const stringA = a.toString();
  const stringB = b.toString();

  return stringA > stringB ? 1 : 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFunctionByDefault) {
    // write code here

    for (let x = 0; x < this.length - 1; x++) {
      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction.bind(this)(a, b) > 0) {
          this[i] = typeof this[i] === 'number' ? +b : b;
          this[i + 1] = typeof this[i] === 'number' ? +a : a;
        };
      };
    };

    return this;
  };
}

module.exports = applyCustomSort;
