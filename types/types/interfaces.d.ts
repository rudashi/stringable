export interface AssociativeArray {
    [key: string]: string | boolean | number;
}
export interface SnakeDirectory {
    [key: string]: Record<string, string>;
}
export interface StudlyDirectory {
    [key: string]: string;
}
export interface CamelDirectory {
    [key: string]: string;
}
export interface ExcerptOptions {
    radius?: number;
    omission?: string;
}
