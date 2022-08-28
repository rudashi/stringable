import { Closure, ExcerptOptions, PipeCallback } from './types';
export declare class Stringable {
    private _value;
    private static _camelCache;
    private static _snakeCache;
    private static _studlyCache;
    constructor(string: any);
    static of(string: any): Stringable;
    static flushCache(): void;
    after: (search?: string) => this;
    afterLast: (search?: string) => this;
    append: (...values: Array<string>) => this;
    ascii: () => this;
    basename: (extension?: string | null) => this;
    before: (search?: string) => this;
    beforeLast: (search?: string) => this;
    between: (from?: string, to?: string) => this;
    betweenFirst: (from?: string, to?: string) => this;
    camel: () => this;
    contains: (needles: string | Array<string>, ignoreCase?: boolean) => boolean;
    containsAll: (needles: Array<string>, ignoreCase?: boolean) => boolean;
    dirname: (levels?: number) => this;
    endsWith: (needles: null | string | number | Array<string>) => boolean;
    excerpt: (phrase?: string, { radius, omission }?: ExcerptOptions) => this;
    exactly: (value: Stringable | string) => boolean;
    explode: (delimiter: string, limit?: number) => Array<string>;
    finish: (cap: string) => this;
    headline: () => this;
    is: (pattern: string | Array<string | null>) => boolean;
    isAscii: () => boolean;
    isEmpty: () => boolean;
    isNotEmpty: () => boolean;
    isJson: () => boolean;
    isUuid: () => boolean;
    kebab: () => this;
    lcfirst: () => this;
    length: () => number;
    limit: (limit?: number, end?: string) => this;
    lower: () => this;
    ltrim: (characters?: string) => this;
    mask: (character: string, index: number, length?: number | null) => this;
    match: (pattern: RegExp | string) => string;
    matchAll: (pattern: RegExp | string) => Array<string>;
    newLine: (count?: number) => this;
    padBoth: (length?: number, pad?: string) => this;
    padLeft: (length?: number, pad?: string) => this;
    padRight: (length?: number, pad?: string) => this;
    parseCallback: (method?: string | null) => Array<string | null>;
    pipe: (callback: PipeCallback) => this;
    prepend: (...values: Array<string>) => this;
    remove: (search: string | Array<string>, caseSensitive?: boolean) => this;
    repeat: (times: number) => this;
    replace: (search: string | Array<string>, replace: string | Array<string>) => this;
    replaceArray: (search: string, replace: Array<string>) => this;
    replaceFirst: (search: string, replace: string) => this;
    replaceLast: (search: string, replace: string) => this;
    replaceMatches: (pattern: RegExp | string, replace: string) => this;
    reverse: () => this;
    rtrim: (characters?: string) => this;
    scan: (format: string) => Array<string | null>;
    slug: (separator?: string, language?: string | null) => this;
    snake: (delimiter?: string) => this;
    split: (pattern: RegExp | number | string) => Array<string>;
    squish: () => this;
    start: (prefix: string) => this;
    startsWith: (needles: null | string | number | Array<string>) => boolean;
    stripTags: (allowedTags?: string) => this;
    studly: () => this;
    substr: (start: number, length?: number | null) => this;
    substrCount: (needle: string, offset?: number, length?: number) => number;
    substrReplace: (replace: string, offset?: number, length?: number | null) => this;
    swap: (map: Record<string, string>) => this;
    tap: (callback: Function) => Stringable;
    test: (pattern: RegExp | string) => boolean;
    title: () => this;
    trim: (characters?: string) => this;
    ucfirst: () => this;
    ucsplit: () => Array<string>;
    unless: (value: Function | string | boolean | number, callback: Closure, defaultValue?: Closure | string | null) => this;
    upper: () => this;
    when: (value: Function | string | boolean | number, callback: Closure, defaultValue?: Closure) => this;
    whenContains: (needles: string | Array<string>, callback: Closure, defaultValue?: Closure) => this;
    whenContainsAll: (needles: Array<string>, callback: Closure, defaultValue?: Closure) => this;
    whenEmpty: (callback: Closure, defaultValue?: Closure) => this;
    whenNotEmpty: (callback: Closure, defaultValue?: Closure) => this;
    whenEndsWith: (needles: string | Array<string>, callback: Closure, defaultValue?: Closure) => this;
    whenStartsWith: (needles: string | Array<string>, callback: Closure, defaultValue?: Closure) => this;
    whenExactly: (value: string, callback: Closure, defaultValue?: Closure) => this;
    whenNotExactly: (value: string, callback: Closure, defaultValue?: Closure) => this;
    whenIs: (pattern: string | Array<string>, callback: Closure, defaultValue?: Closure) => this;
    whenIsAscii: (callback: Closure, defaultValue?: Closure) => this;
    whenIsUuid: (callback: Closure, defaultValue?: Closure) => this;
    whenTest: (pattern: RegExp | string, callback: Closure, defaultValue?: Closure) => this;
    wordCount: () => number;
    words: (words?: number, end?: string) => this;
    wrap: (before: string, after?: string) => this;
    toHtmlString: () => Element | Node | null;
    dump: () => this;
    dd: () => never;
    toString: () => string;
    value: () => string;
}
