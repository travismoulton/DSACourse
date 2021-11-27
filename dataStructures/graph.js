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
}

const graph = new Graph();

graph.addVertex("Weymouth");
graph.addVertex("Quincy");
graph.addVertex("Boston");

graph.addEdge("Weymouth", "Boston");
graph.addEdge("Quincy", "Boston");

// graph.removeEdge("Quincy", "Boston");
graph.removeVertex("Boston");

console.log(graph);
