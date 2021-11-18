class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(x, y) {
    return ([this.values[x], this.values[y]] = [
      this.values[y],
      this.values[x],
    ]);
  }

  bubbleUp() {
    let newElIndex = this.values.length - 1;
    let parentIndex = Math.floor((newElIndex - 1) / 2);

    while (
      this.values[newElIndex] > this.values[parentIndex] &&
      newElIndex > 0
    ) {
      this.swap(newElIndex, parentIndex);

      newElIndex = parentIndex;
      parentIndex = Math.floor((newElIndex - 1) / 2);
    }
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleDown() {
    let nodeIndex = 0;
    const node = this.values[0];
    const length = this.values.length;

    while (true) {
      // For the right and left child, use the ternary to make sure the value isn't out of bounds
      const leftChildIndex = 2 * nodeIndex + 1 < length && 2 * nodeIndex + 1;

      const rightChildIndex = 2 * nodeIndex + 2 < length && 2 * nodeIndex + 2;

      const leftChild = leftChildIndex
        ? this.values[leftChildIndex]
        : -Infinity;
      const rightChild = rightChildIndex
        ? this.values[rightChildIndex]
        : -Infinity;

      const greatestValue = Math.max(node, leftChild, rightChild);

      const greatestIndex =
        greatestValue === this.values[nodeIndex]
          ? nodeIndex
          : greatestValue === leftChild
          ? leftChildIndex
          : rightChildIndex;

      if (greatestIndex === nodeIndex) break;

      this.swap(nodeIndex, greatestIndex);
      nodeIndex = greatestIndex;
    }
  }

  sinkDown() {
    let nodeIndex = 0;
    const length = this.values.length;
    const node = this.values[0];

    while (true) {
      const leftChildIndex = 2 * nodeIndex + 1;
      const rightChildIndex = 2 * nodeIndex + 2;
      const leftChild = leftChildIndex < length && this.values[leftChildIndex];
      const rightChild =
        rightChildIndex < length && this.values[rightChildIndex];

      let swap = null;

      if (leftChild && leftChild > node) swap = leftChildIndex;
      if (
        (!swap && rightChild && rightChild > node) ||
        (swap && rightChild > leftChild)
      )
        swap = rightChildIndex;

      if (!swap) break;

      this.swap(nodeIndex, swap);

      nodeIndex = swap;
    }
  }

  extractMax() {
    this.swap(0, this.values.length - 1);
    const max = this.values.pop();

    // this.sinkDown();
    this.bubbleDown();

    return max;
  }
}

const heap = new MaxBinaryHeap();

heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(0);
heap.insert(-1);
heap.insert(8);
heap.insert(2);
heap.insert(2);
heap.insert(5);
heap.insert(5);
heap.insert(2);
heap.insert(2);

// console.log(heap.values);

heap.extractMax();

console.log(heap.values);
