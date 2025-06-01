export type Node = {
    id: string;
    x: number;
    y: number;
};

export type Edge = {
    from: string;
    to: string;
};

export type GraphSpec = {
    nodes: Array<Node>,
    edges: Array<Edge>,
};