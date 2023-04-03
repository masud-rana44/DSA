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
    return this.data[`${index}`];
  }
  pop() {
    this.data[this.length] = undefined;
    --this.length;
  }
}

const array = new Array();

array.push(5);
array.push("masud");
array.push(null);
array.pop();
array.pop();

console.log(array.get(2));
console.log(array, Object.values(array.data));
