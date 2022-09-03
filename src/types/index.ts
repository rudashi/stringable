export * from '../../src/types/interfaces';
export * from '../../src/types/markdown';

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