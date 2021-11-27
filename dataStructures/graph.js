class Graph {
  constructor() {
    this.adjacenyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1].push(vertex2);
    this.adjacenyList[vertex2].push(vertex1);
  }

  removeEdge(v1, v2) {
    this.adjacenyList[v1] = this.adjacenyList[v1].filter((el) => el !== v2);

    this.adjacenyList[v2] = this.adjacenyList[v2].filter((el) => el !== v1);
  }

  removeVertex(vertex) {
    this.adjacenyList[vertex].forEach((connectedVertex) => {
      this.removeEdge(vertex, connectedVertex);
    });

    delete this.adjacenyList[vertex];
  }

  dfsRecursive(vertex) {
    const results = [];
    const visitedObj = {};

    const traverseGraph = (vertex) => {
      if (!vertex) return;

      visitedObj[vertex] = true;
      results.push(vertex);

      this.adjacenyList[vertex].forEach((connectedVertex) => {
        if (!visitedObj[connectedVertex]) traverseGraph(connectedVertex);
      });
    };

    traverseGraph(vertex);

    return results;
  }

  dfsIterative(startingVertex) {
    const stack = [startingVertex];
    const results = [];
    const visitedObj = {};

    while (stack.length) {
      const vertex = stack.pop();

      if (!visitedObj[vertex]) {
        visitedObj[vertex] = true;
        results.push(vertex);

        this.adjacenyList[vertex].forEach((neighbor) => {
          !visitedObj[neighbor] && stack.push(neighbor);
        });
      }
    }

    return results;
  }

  bfs(statingVertex) {
    const queue = [statingVertex];
    const results = [];
    const visitedObj = {};

    while (queue.length) {
      const vertex = queue.shift();

      if (!visitedObj[vertex]) {
        visitedObj[vertex] = true;
        results.push(vertex);

        this.adjacenyList[vertex].forEach((neighbor) => {
          !visitedObj[neighbor] && queue.push(neighbor);
        });
      }
    }

    return results;
  }
}

const graph = new Graph();

graph.addVertex("Weymouth");
graph.addVertex("Quincy");
graph.addVertex("Boston");

graph.addEdge("Weymouth", "Boston");
graph.addEdge("Quincy", "Boston");

graph.removeEdge("Quincy", "Boston");
graph.removeVertex("Boston");

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.bfs("A"));
