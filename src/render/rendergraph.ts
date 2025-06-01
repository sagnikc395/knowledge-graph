import type { Edge, Node } from "../graph/types";

function drawGraph(canvasId: string, nodes: Array<Node>, edges: Array<Edge>): void {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error(`cannot get 2d canvas contenxt!`);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

export default drawGraph;