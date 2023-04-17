class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    return ++this.length;
  }

  get(index) {
    if (index < 0) {
      return undefined;
    }
    return this.data[index];
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    --this.length;
    return lastItem;
  }

  delete(index) {
    if (index < 0) {
      return undefined;
    }
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  slice(start, end) {
    let data = {};
    let length = 0;

    start = start || 0;
    end = end || this.length;

    for (let i = start; i < end; i++) {
      data[length] = this.data[i];
      length++;
    }

    return { length: length, data };
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    --this.length;
  }
}

const array = new Array();

array.push(5);
array.push("masud");
array.push(null);
array.push("rana");
console.log(array.push("*"));
// console.log(array.pop());
// console.log(array.delete(2));
console.log(array.slice(1, 4));
console.log(array);
