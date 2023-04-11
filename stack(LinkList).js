class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    if (this.bottom === null) this.bottom = node;
    this.length++;

    return this;
  }

  pop() {
    if (!this.top) return this;
    if (this.top === this.bottom) this.bottom = null;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  includes(value) {
    let currentNode = this.top;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  concat(...args) {
    for (let i = 0; i < args.length; i++) {
      if (!args[i] instanceof Stack) return undefined;
      let currentNode = args[i].top;
      while (currentNode) {
        this.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }

    return this;
  }
}

const stack = new Stack();
stack.push("Google");
stack.push("Youtube").pop().push(10).pop().pop().pop();
// stack.push("Discord");
console.log(stack);
// console.log(stack.peek());
// console.log(stack.pop());
// stack.clear();
// stack.push("Masud");
// stack.push(10);
// console.log(stack.includes(-10));
// console.log(stack.isEmpty());
// const stack2 = new Stack();
// const stack3 = new Stack();
// stack3.push(102);
// stack3.push(17);
// console.log(stack3);
// stack2.push("Ban");
// stack2.push("Ind");
// stack2.push("Pak");
// stack.concat("dfs", stack2, stack3);
// console.log(stack.peek());
// console.log(stack);
