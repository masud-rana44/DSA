class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currNode = this.root;
    while (true) {
      if (value > currNode.value) {
        if (!currNode.right) {
          currNode.right = newNode;
          return this;
        }
        currNode = currNode.right;
      } else {
        if (!currNode.left) {
          currNode.left = newNode;
          return this;
        }
        currNode = currNode.left;
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      else if (value > currentNode.value) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }
    return null;
  }
  remove(value) {
    if (!this.root) return null;
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value === currentNode.value) {
        // We have a match: Get to work
        // Option 1: No right child
        if (!currentNode.right) {
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            // If parent > current value
            if (parentNode.value > currentNode.value)
              parentNode.left = currentNode.left;
            // If current > parent value
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.left;
          }
        }

        // Option 2: Right child, which doesn't have a left child
        else if (!currentNode.right.left) {
          if (!parentNode) {
            this.root = currentNode.right;
            currentNode.right.left = currentNode.left;
          } else {
            // If parent > current value
            if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.right;
              currentNode.right.left = currentNode.left;
            }
            // If current > parent value
            if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
              currentNode.right.left = currentNode.left;
            }
          }
        }

        // Option 3: Right child, that has a left child
        if (currentNode.right.left) {
          if (!parentNode) {
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(170));
console.log(tree.lookup(4));
console.log(tree.lookup(14));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
