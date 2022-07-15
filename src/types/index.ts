import {Stringable} from '../Stringable';

export type AssociativeArray = {
    [key: string]: string | boolean | number;
}

export type SnakeDirectory = {
    [key: string]: Record<string, string>
}

export type StudlyDirectory = {
    [key: string]: string
}

export type CamelDirectory = {
    [key: string]: string
}

export type ExcerptOptions = {
    radius?: number,
    omission?: string
}

export type PipeCallback =
    Function
    | 'toLocaleUpperCase'
    | 'toLocaleLowerCase'
    | 'toUpperCase'
    | 'toLowerCase'
    | 'trim'
    | 'trimStart'
    | 'trimEnd'
    | 'toString'
;

export type Callable = Function | null;

export type Closure = Callable | string | { (callback: Stringable, value: string ): Stringable };
