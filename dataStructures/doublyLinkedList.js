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

  pop() {
    if (!this.length) return undefined;

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.length) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    length++;
    return this;
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
    if (index < 0 || index >= this.length) return null;

    if ((this.length - 1) / 2 < index) return this.getFromEnd(index);
    else return this.getFromStart(index);
  }

  set(index, newVal) {
    const node = this.get(index);

    if (!node) return false;

    node.val = newVal;
    return true;
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

  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    const prevNode = node.prev;
    const nextNode = node.next;

    node.prev = null;
    node.next = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;
    return node;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);

list.unshift(0);
list.push(9);
list.pop();

console.log(list);
console.log(list.get(7));
