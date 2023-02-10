export interface Item {
    name: string;
    id: number;
    quote: string;
    description: string;
    quality: number;
    unlock: string;
    effects: string;
    notes: string;
}

export interface Trinket {
    name: string;
    id: number;
    pool: string;
    quote: string;
    description: string;
    tags: string;
    unlock: string;
    effects: string;
    notes: string;
}

export interface Character {
    name: string;
    id: number;
}

export interface Synergy {
    source: number;
    destination: number;
    description: string;
}

export interface Interaction {
    source: number;
    destination: number;
    description: string;
}