'use strict';

/**
 * Implement method Sort
 */
const defaultSort = function (val1, val2) {
  const string1 = String(val1);
  const string2 = String(val2);
  const minLength = Math.min(string1.length, string2.length);

  for (let i = 0; i < minLength; i++) {
    const isLast = i === minLength - 1;
    const isValidCodeOrder = string1.charCodeAt(i) <= string2.charCodeAt(i);
    const isValidLengthOrder = string1.length <= string2.length;
    const isEqual = string1.charCodeAt(i) === string2.charCodeAt(i);

    if (!isValidCodeOrder) {
      return 1;
    }

    if (!isLast) {
      continue;
    }

    if (isValidLengthOrder) {
      return -1;
    }

    if (isEqual) {
      return 1;
    }
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultSort) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        const callback = compareFunction(this[i], this[j]);

        if (callback <= 0) {
          continue;
        }

        const remember = this[i];

        this[i] = this[j];
        this[j] = remember;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
