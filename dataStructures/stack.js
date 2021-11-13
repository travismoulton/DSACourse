class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      const oldFirst = this.first;
      node.next = oldFirst;
      this.first = node;
    }

    return ++this.length;
  }

  pop() {
    if (!this.length) return null;
    if (this.length === 1) this.tail = null;

    const oldFirst = this.first;
    this.first = oldFirst.next;
    oldFirst.next = null;

    this.length--;
    return oldFirst.val;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);

console.log(stack);
