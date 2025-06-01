import { GraphSpec } from "../types/types";

async function fetchGraphSpec(path: string): Promise<GraphSpec> {
    const response = await fetch(path);
    return response.json();
}

export default fetchGraphSpec;