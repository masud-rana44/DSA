class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peak() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.last) this.last.next = newNode;
    if (!this.last) this.first = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const queue = new Queue();
queue.enqueue("John");
queue.enqueue("Masud");
queue.enqueue("Andrew");
console.log(queue.peak());
queue.dequeue();
queue.dequeue();
queue.dequeue().enqueue("rahim");
console.log(queue);
