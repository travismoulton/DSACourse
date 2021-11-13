class Node {
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
    const node = new Node(val);

    if (!this.length) {
      this.frst = node;
      this.last = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return ++this.length;
  }

  dequeue() {
    if (!this.length) return null;

    const node = this.head;

    if (this.length === 1) this.tail = null;

    this.head = node.next;

    this.length--;
    return node;
  }
}
