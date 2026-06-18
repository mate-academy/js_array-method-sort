Object.defineProperty([].__proto__, 'sort2', {
  value: function(compareFunction) {
    if (this == null) throw new TypeError('Cannot read property of null or undefined');

    // Only throw if compareFunction is not undefined and not a function
    if (compareFunction !== undefined && typeof compareFunction !== 'function') {
      throw new TypeError('The compareFunction must be a function');
    }

    const arr = this;
    const n = arr.length;

    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);
      return strA < strB ? -1 : strA > strB ? 1 : 0;
    };

    const compare = (compareFunction === undefined) ? defaultCompare : compareFunction;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        const leftExists = j in arr;
        const rightExists = (j + 1) in arr;

        if (!leftExists && !rightExists) continue;
        if (!leftExists) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          continue;
        }
        if (!rightExists) continue;

        const res = Number(compare.call(undefined, arr[j], arr[j + 1]));
        if (res > 0) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return this; // return the array itself
  },
  writable: true,
  configurable: true,
  enumerable: false
});
