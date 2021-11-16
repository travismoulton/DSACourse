class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    const node = new QueueNode(val);

    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.length;
  }

  dequeue() {
    if (!this.length) return null;

    const node = this.first;

    if (this.length === 1) this.last = null;

    this.first = node.next;

    this.length--;

    return node;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (node.val === currentNode.val) return false;

      if (node.val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = node;
          return this;
        } else currentNode = currentNode.right;
      } else if (node.val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = node;
          return this;
        } else currentNode = currentNode.left;
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) return currentNode;

      if (val > currentNode.val) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }

    return false;
  }

  // Breadth First Search
  bfs() {
    if (!this.root) return [];

    const q = new Queue();
    const visited = [];
    q.enqueue(this.root);

    while (q.first) {
      const node = q.dequeue();
      if (node) {
        visited.push(node.val);
        const { left, right } = node.val;

        if (left) q.enqueue(left);
        if (right) q.enqueue(right);
      }
    }

    return visited;
  }

  // Depth First Search
  dfsPreOrder() {
    if (!this.root) return [];
    const visited = [];

    function traverse(node) {
      visited.push(node);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  dfsPostOrder() {
    if (!this.root) return [];
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      visited.push(node);
    }

    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    if (!this.root) return [];
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      visited.push(node);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

// console.log(tree);
// console.log(tree.find(12));

console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
