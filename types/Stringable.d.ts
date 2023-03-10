import { ExcerptOptions } from './Str';
import { MarkdownConfiguration } from './types/markdown';
type Closure = Function | null | string | {
    (callback: Stringable, value: string): Stringable;
};
type PipeCallback = Function | 'toLocaleUpperCase' | 'toLocaleLowerCase' | 'toUpperCase' | 'toLowerCase' | 'trim' | 'trimStart' | 'trimEnd' | 'toString';
export declare const str: (string?: string) => Stringable | {
    randomStringFactory: import("./Str").Callable;
    _camelCache: {
        [key: string]: string;
    };
    _studlyCache: {
        [key: string]: string;
    };
    _snakeCache: {
        [key: string]: Record<string, string>;
    };
    of: (string: string) => Stringable;
    after: (subject: string, search?: string) => string;
    afterLast: (subject: string, search?: string) => string;
    ascii: (value: string) => string;
    before: (subject: string, search?: string) => string;
    beforeLast: (subject: string, search?: string) => string;
    between: (subject: string, from?: string, to?: string) => string;
    betweenFirst: (subject: string, from?: string, to?: string) => string;
    camel: (value: string) => string;
    contains: (haystack: string, needles: string | string[], ignoreCase?: boolean) => boolean;
    containsAll: (haystack: string, needles: string[], ignoreCase?: boolean) => boolean;
    endsWith: (haystack: string, needles: string | number | string[] | null) => boolean;
    excerpt: (text: string, phrase?: string, { radius, omission }?: ExcerptOptions) => string;
    explode: (text: string, delimiter: string, limit?: number | undefined) => string[];
    finish: (value: string, cap: string) => string;
    wrap: (value: string, before: string, after?: string | undefined) => string;
    is: (pattern: string | (string | null)[], value: string) => boolean;
    isAscii: (value: string) => boolean;
    isJson: (value: string) => boolean;
    isUuid: (value: string) => boolean;
    isUlid: (value: string) => boolean;
    kebab: (value: string) => string;
    length: (value: string) => number;
    limit: (value: string, limit?: number, end?: string) => string;
    lower: (value: string) => string;
    words: (value: string, words?: number, end?: string) => string;
    markdown: (string: string, options?: MarkdownConfiguration) => string;
    inlineMarkdown: (string: string, options?: MarkdownConfiguration) => string;
    mask: (string: string, character: string, index: number, length?: number | null) => string;
    match: (pattern: string | RegExp, subject: string) => string;
    matchAll: (pattern: string | RegExp, subject: string) => string[];
    padBoth: (value: string, length?: number, pad?: string) => string;
    padLeft: (value: string, length?: number, pad?: string) => string;
    padRight: (value: string, length?: number, pad?: string) => string;
    parseCallback: (callback: string, method?: string | null) => (string | null)[];
    random: (length?: number) => string;
    createRandomStringsUsing: (callable: import("./Str").Callable) => void;
    createRandomStringsUsingSequence: (sequence: import("./Str").AssociativeArray, whenMissing?: import("./Str").Callable) => void;
    createRandomStringsNormally: () => void;
    repeat: (string: string, times: number) => string;
    replaceArray: (search: string, replace: string[], subject: string) => string;
    replace: (search: string | string[], replace: string | string[], subject: string) => string;
    replaceFirst: (search: string, replace: string, subject: string) => string;
    replaceLast: (search: string, replace: string, subject: string) => string;
    remove: (search: string | string[], subject: string, caseSensitive?: boolean) => string;
    reverse: (value: string) => string;
    start: (value: string, prefix: string) => string;
    upper: (value: string) => string;
    title: (value: string) => string;
    headline: (value: string) => string;
    slug: (title: string, separator?: string, language?: string | null, dictionary?: Record<string, string>) => string;
    snake: (value: string, delimiter?: string) => string;
    squish: (value: string) => string;
    startsWith: (haystack: string, needles: string | number | string[] | null) => boolean;
    stripTags: (string: string, allowedTags?: string) => string;
    studly: (value: string) => string;
    substr: (value: string, start: number, length?: number | null) => string;
    substrCount: (haystack: string, needle: string, offset?: number, length?: number) => number;
    substrReplace: (string: string, replace: string, offset?: number, length?: number | null) => string;
    swap: (map: Record<string, string>, subject: string) => string;
    trim: (value: string, characters?: string | undefined) => string;
    ltrim: (value: string, characters?: string | undefined) => string;
    rtrim: (value: string, characters?: string | undefined) => string;
    lcfirst: (string: string) => string;
    ucfirst: (string: string) => string;
    ucsplit: (string: string) => string[];
    wordCount: (value: string) => number;
    uuid: () => Stringable;
    ulid: () => Stringable;
    preg_quote: (value: string, delimiter?: string) => string;
    flushCache(): void;
};
export declare class Stringable {
    private _value;
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
    isUlid: () => boolean;
    isUuid: () => boolean;
    kebab: () => this;
    lcfirst: () => this;
    length: () => number;
    limit: (limit?: number, end?: string) => this;
    lower: () => this;
    ltrim: (characters?: string) => this;
    markdown: (options?: MarkdownConfiguration) => string;
    inlineMarkdown: (options?: MarkdownConfiguration) => string;
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
    slug: (separator?: string, language?: string | null, dictionary?: Record<string, string>) => this;
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
    whenIsUlid: (callback: Closure, defaultValue?: Closure) => this;
    whenIsUuid: (callback: Closure, defaultValue?: Closure) => this;
    whenTest: (pattern: RegExp | string, callback: Closure, defaultValue?: Closure) => this;
    wordCount: () => number;
    words: (words?: number, end?: string) => this;
    wrap: (before: string, after?: string) => this;
    toHtmlString: () => Element | Node | null;
    dump: () => this;
    dd: () => never;
    toString: () => string;
    toInteger: () => number;
    toFloat: () => number;
    toBoolean: () => boolean;
    toDate: () => Date;
    value: () => string;
}
export default Stringable;
