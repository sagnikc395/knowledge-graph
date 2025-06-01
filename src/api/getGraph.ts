import { GraphSpec } from "../graph/types";

async function fetchGraphSpec(path: string): Promise<GraphSpec> {
    const response = await fetch(path);
    return response.json();
}

export default fetchGraphSpec;