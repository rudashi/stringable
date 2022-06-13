import { Stringable } from '../Stringable';
export declare type SnakeDirectory = {
    [key: string]: Record<string, string>;
};
export declare type StudlyDirectory = {
    [key: string]: string;
};
export declare type CamelDirectory = {
    [key: string]: string;
};
export declare type ExcerptOptions = {
    radius?: number;
    omission?: string;
};
export declare type PipeCallback = Function | 'toLocaleUpperCase' | 'toLocaleLowerCase' | 'toUpperCase' | 'toLowerCase' | 'trim' | 'trimStart' | 'trimEnd' | 'toString';
export declare type Closure = Function | string | null | {
    (callback: Stringable, value: string): Stringable;
};
