export * from './interfaces';
export * from './markdown';

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