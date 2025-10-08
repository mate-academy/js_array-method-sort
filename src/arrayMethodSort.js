'use strict';

[].__proto__.sort2 = function (compareFunction) {
  const arr = this;
  const len = arr.length;

  const defaultComparator = (a, b) => {
    const aIsUndefined = a === undefined;
    const bIsUndefined = b === undefined;

    if (aIsUndefined && bIsUndefined) {
      return 0;
    }

    if (aIsUndefined) {
      return 1;
    }

    if (bIsUndefined) {
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

  const comparator =
    typeof compareFunction === 'function' ? compareFunction : defaultComparator;

  for (let i = 0; i < len - 1; i++) {
    let swapped = false;

    for (let j = 0; j < len - 1 - i; j++) {
      const leftExists = arr.hasOwnProperty(j);
      const rightExists = arr.hasOwnProperty(j + 1);

      const left = leftExists ? arr[j] : undefined;
      const right = rightExists ? arr[j + 1] : undefined;

      if (comparator(left, right) > 0) {
        if (leftExists && rightExists) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        } else if (leftExists && !rightExists) {
          arr[j + 1] = left;
          delete arr[j];
        } else if (!leftExists && rightExists) {
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
