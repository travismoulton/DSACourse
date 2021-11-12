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

    let ctr = 0;
    let currentNode = this.head;

    while (ctr < index) {
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
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.unshift(0);

console.log(list.pop());
console.log(list);

console.log(list.insert(0, "someVal"));
