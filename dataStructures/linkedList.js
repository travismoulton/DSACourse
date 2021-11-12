class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let prevNode = currentNode;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = prevNode;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (!this.head) return undefined;
    const head = this.head;
    this.head = head.next;
    this.length--;

    if (!this.length) this.tail = null;

    return head;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) this.tail = node;

    node.next = this.head;
    this.head = node;
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    console.log(index);

    let ctr = 0;
    let currentNode = this.head;

    while (ctr !== index) {
      currentNode = currentNode.next;
      ctr++;
    }

    return currentNode;
  }

  set(index, val) {
    const node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      const newNode = new Node(val);
      const prevNode = this.get(index - 1);
      const currentNode = prevNode.next;

      prevNode.next = newNode;
      newNode.next = currentNode;
      this.length++;
    }

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return false;

    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift(val);

    const prevNode = this.get(index - 1);
    const nodeAtIndex = prevNode.next;
    prevNode.next = nodeAtIndex.next;
    this.length--;

    return nodeAtIndex;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prevNode = null;
    let nextNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }

    return this;

    // 1, 2, 3, 4
    // 4, 3, 2, 1
  }

  myReverse() {
    for (let i = 1; i < this.length; i++) {
      const prevNode = this.get(this.length - i - 1);
      const currentNode = prevNode.next;

      currentNode.next = prevNode;
    }

    const oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
    this.tail.next = null;

    return this;
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.unshift(0);

console.log(list);

list.myReverse();
console.log(list);
