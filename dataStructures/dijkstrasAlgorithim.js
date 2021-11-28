class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  findShortestPath(start, end) {
    const q = new PriorityQueue();
    const distances = {};
    const previous = {};

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        q.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        q.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (q.values.length) {
      const currentNode = q.dequeue().val;

      if (currentNode === end) {
        const returnPath = [];
        let node = currentNode;

        while (previous[node]) {
          returnPath.push(node);
          node = previous[node];
        }

        return returnPath.concat(start).reverse();
      }

      this.adjacencyList[currentNode].forEach((neighbor) => {
        const { weight, node: neighborNode } = neighbor;

        // Distance from the current node to the next node
        const distance = distances[currentNode] + weight;

        if (distance < distances[neighborNode]) {
          distances[neighborNode] = distance;
          previous[neighborNode] = currentNode;

          q.enqueue(neighborNode, distance);
        }
      });
    }
  }

  Dijkstra(start, finish) {
    const nodes = new SimpleQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      console.log(vertex);
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    console.log(distances);

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      console.log(smallest);
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

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

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.findShortestPath("A", "E"));
