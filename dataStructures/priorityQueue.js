class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(x, y) {
    return ([this.values[x], this.values[y]] = [
      this.values[y],
      this.values[x],
    ]);
  }

  bubbleDown() {
    let index = 0;
    const node = this.values[0].priority;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      const leftChild =
        leftChildIndex < this.values.length
          ? this.values[leftChildIndex].priority
          : Infinity;

      const rightChild =
        rightChildIndex < this.values.length
          ? this.values[rightChildIndex].priority
          : Infinity;

      const minValue = Math.min(node, leftChild, rightChild);

      const minIndex =
        minValue === node
          ? index
          : minValue === leftChild
          ? leftChildIndex
          : rightChildIndex;

      if (minIndex === index) break;

      this.swap(index, minIndex);
      index = minIndex;
    }
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const node = this.values[index].priority;

    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && node < this.values[parentIndex].priority) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);

    this.values.push(newNode);

    this.bubbleUp();
  }

  dequeue() {
    this.swap(0, this.values.length - 1);
    const minPriority = this.values.pop();

    this.bubbleDown();

    return minPriority;
  }
}

const q = new PriorityQueue();

q.enqueue("desc", 1);
q.enqueue("desc", 8);
q.enqueue("desc", 7);
q.enqueue("desc", 6);
q.enqueue("desc", 5);
q.enqueue("desc", 4);
q.enqueue("desc", 3);
q.enqueue("desc", 2);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q.values);
