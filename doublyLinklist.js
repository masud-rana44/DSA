class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;

    return this;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;

    this.length++;

    return this;
  }

  print() {
    const list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);

    return this;
  }

  _traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    // Perameter check
    if (index < 0) return undefined;
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);

    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holdingPointer;
    holdingPointer.prev = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    // Parameter check
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      this.length--;
      this.head = this.head.next;
      return this;
    }
    if (index === this.length - 1) {
      this.length--;
      this.tail = this.tail.prev;
      return this;
    }

    const leader = this._traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.next.prev = leader;
    this.length--;

    if (index === this.length) this.tail = leader;

    return this;
  }
}

const doublyLinkList = new DoublyLinkList(10);
doublyLinkList
  .append(5)
  .prepend(9)
  .append(16)
  .prepend(8)
  .insert(3, 17)
  .remove(5)
  .remove(4)
  .insert(5, 100)
  .prepend(777)
  .print();
console.log(doublyLinkList.length);
console.log(doublyLinkList);
