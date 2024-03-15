function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    for (let j = 0; j < this.length - 1; j++) {
      for (let i = 0; i < this.length; i++) {
          if (compareFunction(this[i], this[i + 1])) {
            let temp = this[i];
            this[i] = this[i + 1];
            this[i + 1] = temp;
          }
      }
    }
  };

  let array = [1, 2, 3];
  array.sort2((a, b) => a  < b);

  return array;
}

applyCustomSort();
