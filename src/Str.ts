import {
    after,
    afterLast,
    ascii,
    before,
    beforeLast,
    between,
    betweenFirst,
    charAt,
    contains,
    containsAll,
    endsWith,
    excerpt,
    explode,
    finish,
    wrap,
    is,
    isAscii,
    isJson,
    isUuid,
    isUlid,
    length,
    limit,
    lower,
    words,
    mask,
    match,
    matchAll,
    padBoth,
    padLeft,
    padRight,
    parseCallback,
    repeat,
    replaceArray,
    replace,
    replaceFirst,
    replaceLast,
    remove,
    reverse,
    start,
    upper,
    title,
    headline,
    slug,
    squish,
    startsWith,
    stripTags,
    substr,
    substrCount,
    substrReplace,
    swap,
    trim,
    ltrim,
    rtrim,
    lcfirst,
    ucfirst,
    ucsplit,
    wordCount,
    preg_quote,
    ExcerptOptions,
} from './methods';
import Stringable from './Stringable';
import crypto from 'crypto';
import {ulid} from 'ulid'
import {defaultConfiguration, MarkdownConfiguration} from './types/markdown';
import {marked} from 'marked';

export {ExcerptOptions};

export type AssociativeArray = {
    [key: string]: string | boolean | number
};

export type Callable = Function | null;

export const Str = {
    randomStringFactory: <Callable> null,
    _camelCache: <{[key: string]: string}> {},
    _studlyCache: <{[key: string]: string}> {},
    _snakeCache: <{[key: string]: Record<string, string>}> {},

    of: (string: string): Stringable => {
        return Stringable.of(string);
    },
    after,
    afterLast,
    ascii,
    before,
    beforeLast,
    between,
    betweenFirst,
    charAt,
    camel: (value: string): string => {
        if (typeof Str._camelCache[value] !== 'undefined') {
            return Str._camelCache[value];
        }

        return Str._camelCache[value] = lcfirst(Str.studly(value));
    },
    contains,
    containsAll,
    endsWith,
    excerpt,
    explode,
    finish,
    wrap,
    is,
    isAscii,
    isJson,
    isUuid,
    isUlid,
    kebab: (value: string): string => {
        return Str.snake(value, '-');
    },
    length,
    limit,
    lower,
    words,
    markdown: (string: string, options: MarkdownConfiguration = defaultConfiguration): string => {
        options = {...defaultConfiguration, ...options};

        if (options.html_input === 'STRIP') {
            string = stripTags(string);
        }

        return marked.parse(string, options).trimEnd();
    },
    inlineMarkdown: (string: string, options: MarkdownConfiguration = defaultConfiguration): string => {
        options = {...defaultConfiguration, ...options};

        if (options.html_input === 'STRIP') {
            string = stripTags(string);
        }

        return marked.parseInline(string, options);
    },
    mask,
    match,
    matchAll,
    padBoth,
    padLeft,
    padRight,
    parseCallback,
    random: (length: number = 16): string => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const size = characters.length;
        let string = '';

        return (Str.randomStringFactory ?? function (length: number) {
            for (let i = 0; i < length; i++) {
                string += characters.charAt(Math.random() * size);
            }

            return string;
        })(length);
    },
    createRandomStringsUsing: (callable: Callable): void => {
        Str.randomStringFactory = callable;
    },
    createRandomStringsUsingSequence: (sequence: AssociativeArray, whenMissing: Callable = null): void => {
        let next = 0;
        let callable: Function = whenMissing ?? function (length: number) {
            let factoryCache = Str.randomStringFactory;

            Str.randomStringFactory = null;

            let randomString = Str.random(length);

            Str.randomStringFactory = factoryCache;

            next++;

            return randomString;
        };

        Str.createRandomStringsUsing(function (length: number) {
            if (sequence.hasOwnProperty(next)) {
                return sequence[next++];
            }
            return callable(length);
        });
    },
    createRandomStringsNormally: (): void => {
        Str.randomStringFactory = null;
    },
    repeat,
    replaceArray,
    replace,
    replaceFirst,
    replaceLast,
    remove,
    reverse,
    start,
    upper,
    title,
    headline,
    slug,
    snake: (value: string, delimiter: string = '_'): string => {
        const key = value;

        if (typeof Str._snakeCache[key] !== 'undefined' && typeof Str._snakeCache[key][delimiter] !== 'undefined') {
            return Str._snakeCache[key][delimiter];
        }

        if (!(/^[a-z]+$/).test(value)) {
            value = value
                .replace(new RegExp(/(^|\s)\S/, 'gu'), s => s.toLocaleUpperCase())
                .replace(new RegExp(/\s+/, 'gu'), '')
                .replace(new RegExp(/(.)(?=[A-Z])/, 'gu'), '$1' + delimiter)
                .toLocaleLowerCase();
        }

        if (typeof Str._snakeCache[key] !== 'undefined') {
            Str._snakeCache[key][delimiter] = value;
        } else {
            Str._snakeCache[key] = {[delimiter]: value};
        }

        return value;
    },
    squish,
    startsWith,
    stripTags,
    studly: (value: string): string => {
        const key = value;

        if (typeof Str._studlyCache[key] !== 'undefined') {
            return Str._studlyCache[key];
        }

        return Str._studlyCache[key] = value.trim()
            .replace(/[_\-]/g, ' ')
            .replace(/\s+|\u3164+/g, ' ')
            .split(' ')
            .reduce((str, w) => str + w[0].toLocaleUpperCase() + w.slice(1), '');
    },
    substr,
    substrCount,
    substrReplace,
    swap,
    trim,
    ltrim,
    rtrim,
    lcfirst,
    ucfirst,
    ucsplit,
    wordCount,
    uuid: (): Stringable => {
        return Stringable.of(crypto.randomUUID());
    },
    ulid: (): Stringable => {
        return Stringable.of(ulid());
    },
    preg_quote,
    flushCache(): void {
        this._camelCache = {};
        this._snakeCache = {};
        this._studlyCache = {};
    },
}

export default Str;
