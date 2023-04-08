class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // for (let j = 0; j < this.data[i].length; j++) {
        keysArray.push(this.data[i][0][0]);
        // }
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1]);
      }
    }
    return valuesArray;
  }

  entries() {
    const entry = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        entry.push(this.data[i][0]);
      }
    }
    return entry;
  }

  length() {
    let length = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) length++;
    }
    return length;
  }

  delete(key) {
    const address = this._hash(key);
    const item = this.data[address][0];
    this.data[address] = undefined;
    return item;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable._hash("masud25545"));
myHashTable.set("grapes", 1000);
myHashTable.set("masud", "rana");
myHashTable.set("apple", 45);
myHashTable.set("banana", 12);
myHashTable.set("orange", 96);

console.log(myHashTable.get("grapes"));
// console.log(myHashTable.get("masud"));
// console.log(myHashTable.get("masud"));
// console.log(myHashTable.get("masud"));

console.log(myHashTable.delete("masud"));
console.log(myHashTable.keys());
console.log(myHashTable.values());
console.log(myHashTable.entries());
console.log(myHashTable.length());
// console.log(myHashTable.data);
