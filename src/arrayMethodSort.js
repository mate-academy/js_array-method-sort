'use strict';

[].__proto__.sort2 = function (compareFunction) {
  if (compareFunction !== undefined && typeof compareFunction !== 'function') {
    throw new TypeError('The comparison function must be a function');
  }

  if (this == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const arr = Object(this);
  const len = Number(arr.length) >>> 0;

  const defaultComparator = (a, b) => {
    const aU = a === undefined;
    const bU = b === undefined;

    if (aU && bU) {
      return 0;
    }

    if (aU) {
      return 1;
    }

    if (bU) {
      return -1;
    }

    const aStr = String(a);
    const bStr = String(b);

    if (aStr < bStr) {
      return -1;
    }

    if (aStr > bStr) {
      return 1;
    }

    return 0;
  };

  const comparator = compareFunction || defaultComparator;

  for (let i = 0; i < len - 1; i++) {
    let swapped = false;

    for (let j = 0; j < len - 1 - i; j++) {
      const leftHas = arr.hasOwnProperty(j);
      const rightHas = arr.hasOwnProperty(j + 1);

      const left = leftHas ? arr[j] : undefined;
      const right = rightHas ? arr[j + 1] : undefined;

      if (comparator(left, right) > 0) {
        if (leftHas && rightHas) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        } else if (leftHas && !rightHas) {
          arr[j + 1] = left;
          delete arr[j];
        } else if (!leftHas && rightHas) {
          arr[j] = right;
          delete arr[j + 1];
        }
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
};

module.exports = () => {};
