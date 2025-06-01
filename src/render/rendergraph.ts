import type { Edge, Node } from "../graph/types";

//draw the edges of the graph 

function drawEdges(nodes: Array<Node>, edges: Array<Edge>, ctx: CanvasRenderingContext2D) {
    for (const edge of edges) {
        const fromNode = nodes.find(n => n.id === edge.from);
        const toNode = nodes.find(n => n.id === edge.to);

        if (!fromNode || !toNode) {
            throw new Error(`starting node or ending node not found!`)
        }
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = "#555";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

}



function drawGraph(canvasId: string, nodes: Array<Node>, edges: Array<Edge>): void {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error(`cannot get 2d canvas contenxt!`);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

export default drawGraph;