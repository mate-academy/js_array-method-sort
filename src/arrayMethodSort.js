function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) > String(b)) {
    // write code here
    for (let j = 0; j < this.length - 1; j++) {
      for (let i = 0; i < this.length; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            let temp = this[i];
            this[i] = this[i + 1];
            this[i + 1] = temp;
          }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
