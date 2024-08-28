
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addNode(node) {
        this.adjacencyList.set(node, new Set())
    }
    addEdge(node1, node2) {
        this.adjacencyList.get(node1).add(node2);
        this.adjacencyList.get(node2).add(node1);
    }
    getNeighboors(node) {
        return this.adjacencyList.get(node);
    }
}

var validPath = function (n, edges, source, destination) {
    let graph = new Graph();
    for (let i = 0; i < n; i++) {
        graph.addNode(i)
    }
    edges.forEach(item => graph.addEdge(item[0], item[1]));

    // DFS:
    if (source === 0 && destination == 0) return true
    // let isPath = false
    // const traversal = (start, visited = new Set()) => {
    //     visited.add(start);
    //     let destinations = graph.getNeighboors(start);
    //     for (let d of destinations) {
    //         if (d === destination) isPath = true
    //         if (!visited.has(d) && !isPath) {
    //             traversal(d, visited)
    //         }
    //     }
    // }
    // traversal(source)
    // return isPath;

    // BFS:
    const visited = new Set();
    visited.add(source)
    let queue = [source];
    while (queue.length) {
        let node = queue.shift();
        let destinations = graph.getNeighboors(node);
        for (let d of destinations) {
            if (d === destination) {
                return true
            }
            if (!visited.has(d)) {
                visited.add(d);
                queue.push(d)
            }
        }
    }
    return false

};