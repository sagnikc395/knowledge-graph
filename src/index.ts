import drawGraph from "./render/rendergraph"

fetch("./data/graph.json").then(r => r.json()).then(({ nodes, edges }) => {
    drawGraph("graphCanvas", nodes, edges);
})