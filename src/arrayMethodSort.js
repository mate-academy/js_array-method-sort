'use strict';

/**
 * Implement method Sort
 */
const compareFunctionDefault = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFunctionDefault) {
    let booleanVariable;

    for (let i = 0; i < this.length; i++) {
      booleanVariable = false;

      for (let j = i + 1; j < this.length; j++) {
        if ((compareFunction(this[i], this[j]) > 0)) {
          [this[i], this[j]] = [this[j], this[i]];
          booleanVariable = true;
        }
      }

      if (!booleanVariable) {
        return this;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
