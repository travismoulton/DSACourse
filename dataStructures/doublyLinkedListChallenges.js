class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.length) return undefined;

    const oldHead = this.head;
    const newHead = oldHead.next;

    oldHead.next = null;
    newHead.prev = null;
    this.head = newHead;

    length--;
    return oldHead;
  }

  pop() {
    if (!this.length) return undefined;

    const oldTail = this.tail;
    const newTail = oldTail.prev;

    oldTail.prev = null;
    newTail.next = null;

    length--;
    return oldTail;
  }

  getFromStart(index) {
    let ctr = 0;
    let currentNode = this.head;

    while (ctr !== index) {
      currentNode = currentNode.next;
      ctr++;
    }

    return currentNode;
  }

  getFromEnd(index) {
    let ctr = this.length - 1;
    let currentNode = this.tail;

    while (ctr !== index) {
      currentNode = currentNode.prev;
      ctr--;
    }

    return currentNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return false;

    if (index > (this.length - 1) / 2) return this.getFromEnd(index);
    return this.getFromStart(index);
  }

  set(index, newVal) {
    const node = this.get(index);

    if (!node) return false;

    node.val = newVal;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);

    const prevNode = node.prev;
    const nextNode = node.next;

    node.next = null;
    node.prev = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    length--;
    return node;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) this.unshift(val);
    if (index === this.length) this.push(val);
    if (index === 0 || index === this.length) return true;

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    nextNode.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  reverse() {
    if (!this.length) return this;

    let currentNode = this.tail;
    let prevNode = currentNode.prev;

    for (let i = this.length - 1; i >= 0; i--) {
      currentNode.prev = currentNode.next;
      currentNode.next = prevNode;

      currentNode = prevNode;
      // If check is needed because on the last iteration prevNode will be null which throws an error
      if (prevNode) prevNode = prevNode.prev;
    }

    const oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;

    return this;
  }
}

const list = new DoublyLinkedList();

list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);
// list.push(7);
// list.push(8);
// list.push(9);
// list.push(10);
// list.push(11);

console.log(list.reverse());
