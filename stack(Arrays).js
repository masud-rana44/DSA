class Stack {
  constructor() {
    this.data = [];
  }

  peak() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }
}

const stack = new Stack();
stack.push("google");
stack.push("youtube");
stack.push("discord");
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.push(15);
stack.push(7);
console.log(stack);
