import type { Edge, Node } from "../types/types";

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

function drawNodes(nodes: Array<Node>, ctx: CanvasRenderingContext2D) {
    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = "#2563eb"; // Tailwind's blue-600
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.font = "16px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.id, node.x, node.y);
    });
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