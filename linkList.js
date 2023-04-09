// const linKList = {
//   head : {
//     value: 10,
//     next : {
//       value : 5,
//       next : {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class LinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.next = {
      value: value,
      next: null,
    };

    this.tail = this.tail.next;
    this.length++;

    return this;
  }

  prepend(value) {
    this.head = {
      value: value,
      next: this.head,
    };

    this.length++;

    return this;
  }
}

const linkList = new LinkList(10);
linkList.append(5).prepend(9).append(16);
// linkList.append(16);
// linkList.prepend(9);
console.log(linkList);
console.log(linkList.head);
