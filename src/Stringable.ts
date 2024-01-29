import Str, {ExcerptOptions} from './Str';
import {MarkdownConfiguration, defaultConfiguration} from './types/markdown';

type Closure = Function | null | string | { (callback: Stringable, value: string ): Stringable };

type PipeCallback =
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

export const str = (string?: string) => {
    if (string) {
        return Stringable.of(string);
    }

    return Str;
}

export class Stringable {

    private _value: string;

    constructor(string: any) {
        this._value = string === null ? '' : String(string);
    }

    static of(string: any): Stringable {
        return new Stringable(string instanceof Stringable ? string.toString() : string);
    }

    static flushCache(): void {
        Str.flushCache();
    }

    public after = (search: string = ''): this => {
        this._value = Str.after(this._value, search);

        return this;
    }

    public afterLast = (search: string = ''): this => {
        this._value = Str.afterLast(this._value, search);

        return this;
    }

    public append = (...values: Array<string>): this => {

        this._value += values.join('');

        return this;
    }

    public ascii = (): this => {

        this._value = Str.ascii(this._value);

        return this;
    }

    public basename = (extension: string | null = null): this => {
        this._value = this._value.split('/').reverse()[0];

        if (extension) {
            this._value = new Stringable(this._value).before(extension).toString();
        }

        return this;
    }

    public charAt = (index: number): string | false => {
        return Str.charAt(this._value, index);
    }

    public before = (search: string = ''): this => {
        this._value = Str.before(this._value, search);

        return this;
    }

    public beforeLast = (search: string = ''): this => {
        this._value = Str.beforeLast(this._value, search);

        return this;
    }

    public between = (from: string = '', to: string = ''): this => {
        this._value = Str.between(this._value, from, to);

        return this;
    }

    public betweenFirst = (from: string = '', to: string = ''): this => {
        this._value = Str.betweenFirst(this._value, from, to);

        return this;
    }

    public camel = (): this => {
        this._value = Str.camel(this._value);

        return this;
    }

    public contains = (needles: string | Array<string>, ignoreCase: boolean = false): boolean => {
        return Str.contains(this._value, needles, ignoreCase);
    }

    public containsAll = (needles: Array<string>, ignoreCase: boolean = false): boolean => {
        return Str.containsAll(this._value, needles, ignoreCase);
    }

    public dirname = (levels: number = 1): this => {
        const components = this.explode('/', levels * -1);

        this._value = components.join('/');

        return this;
    }

    public endsWith = (needles: null | string | number | Array<string>): boolean => {
        return Str.endsWith(this._value, needles);
    }

    public excerpt = (phrase: string = '', {radius, omission}: ExcerptOptions = {radius: 100, omission: '...'}): this => {
        this._value = Str.excerpt(this._value, phrase, {radius, omission});

        return this;
    }

    public exactly = (value: Stringable | string): boolean => {
        if (value instanceof Stringable) {
            value = value.toString();
        }

        return this._value === value;
    }

    public explode = (delimiter: string, limit?: number): Array<string> => {
        return Str.explode(this._value, delimiter, limit);
    }

    public finish = (cap: string): this => {
        this._value = Str.finish(this._value, cap);

        return this;
    }

    public headline = (): this => {
        this._value = Str.headline(this._value);

        return this;
    }

    public is = (pattern: string | Array<string | null>): boolean => {
        return Str.is(pattern, this._value);
    }

    public isAscii = (): boolean => {
        return Str.isAscii(this._value);
    }

    public isEmpty = (): boolean => {
        return this._value === '';
    }

    public isNotEmpty = (): boolean => {
        return !this.isEmpty();
    }

    public isJson = (): boolean => {
        return Str.isJson(this._value);
    }

    public isUrl = (): boolean => {
        return Str.isUrl(this._value);
    }

    public isUlid = (): boolean => {
        return Str.isUlid(this._value);
    }

    public isUuid = (): boolean => {
        return Str.isUuid(this._value);
    }

    public kebab = (): this => {
        this._value = Str.kebab(this._value);

        return this;
    }

    public lcfirst = (): this => {
        this._value = Str.lcfirst(this._value);

        return this;
    }

    public length = (): number => {
        return this._value.length;
    }

    public limit = (limit: number = 100, end: string = '...'): this => {
        this._value = Str.limit(this._value, limit, end);

        return this;
    }

    public lower = (): this => {

        this._value = Str.lower(this._value);

        return this;
    }

    public ltrim = (characters?: string): this => {
        this._value = Str.ltrim(this._value, characters);

        return this;
    }

    public markdown = (options: MarkdownConfiguration = defaultConfiguration): string => {
        return Str.markdown(this._value, options);
    }

    public inlineMarkdown = (options: MarkdownConfiguration = defaultConfiguration): string => {
        return Str.inlineMarkdown(this._value, options);
    }

    public mask = (character: string, index: number, length: number | null = null): this => {
        this._value = Str.mask(this._value, character, index, length);

        return this;
    }

    public match = (pattern: RegExp | string): string => {
        return Str.match(pattern, this._value);
    }

    public isMatch = (pattern: RegExp | string | Array<string | RegExp>): boolean => {
        return Str.isMatch(pattern, this._value);
    }

    public matchAll = (pattern: RegExp | string): Array<string> => {
        return Str.matchAll(pattern, this._value);
    }

    public newLine = (count: number = 1): this => {
        this.append('\n'.repeat(count));

        return this;
    }

    public padBoth = (length: number = 0, pad: string = ' '): this => {
        this._value = Str.padBoth(this._value, length, pad);

        return this;
    }

    public padLeft = (length: number = 0, pad: string = ' '): this => {
        this._value = Str.padLeft(this._value, length, pad);

        return this;
    }

    public padRight = (length: number = 0, pad: string = ' '): this => {
        this._value = Str.padRight(this._value, length, pad);

        return this;
    }

    public parseCallback = (method: string | null = null): Array<string | null> => {
        return Str.parseCallback(this._value, method);
    }

    public pipe = (callback: PipeCallback): this => {
        this._value = callback instanceof Function
            ? callback(this._value)
            : this._value[callback]();

        return this;
    }

    public prepend = (...values: Array<string>): this => {
        this._value = values.join('') + this._value;

        return this;
    }

    public remove = (search: string | Array<string>, caseSensitive: boolean = true): this => {
        this._value = Str.remove(search, this._value, caseSensitive);

        return this;
    }

    public repeat = (times: number): this => {
        this._value = Str.repeat(this._value, times);

        return this;
    }

    public replace = (search: string | Array<string>, replace: string | Array<string>): this => {
        this._value = Str.replace(search, replace, this._value);

        return this;
    }

    public replaceArray = (search: string, replace: Array<string>): this => {
        this._value = Str.replaceArray(search, replace, this._value);

        return this;
    }

    public replaceFirst = (search: string, replace: string): this => {
        this._value = Str.replaceFirst(search, replace, this._value);

        return this;
    }

    public replaceLast = (search: string, replace: string): this => {
        this._value = Str.replaceLast(search, replace, this._value);

        return this;
    }

    public replaceMatches = (pattern: RegExp | string, replace: string): this => {
        this._value = this._value.replace(new RegExp(pattern, 'g'), replace);

        return this;
    }

    public reverse = (): this => {
        this._value = Str.reverse(this._value);

        return this;
    }

    public rtrim = (characters?: string): this => {
        this._value = Str.rtrim(this._value, characters);

        return this;
    }

    public scan = (format: string): Array<string | null> => {
        const selectors = format.match(new RegExp(/(%\[.*?]|%[.*]|[^%]+|(%.))/, 'g'));
        const result: Array<string> = [];

        if (selectors === null) {
            return [null];
        }

        selectors.map((val) => {
            if (val[0] === '%') {
                result.push((() => {
                    switch (val[1]) {
                        case 's':
                            return '(?:\\s?(.*))';
                        case 'd':
                            return '(\\' + val[1] + '+)';
                        case '[':
                            return '(' + val.substring(1) + '*)';
                        default:
                            return '(.*)';
                    }
                })());
            } else {
                result.push(Str.preg_quote(val, '/'));
            }
        });

        const match = this._value.match(new RegExp(result.join(''), 'u'));

        if (!match || !match[1]) {
            return [null];
        }

        match.shift();

        return match;
    }

    public slug = (separator: string = '-', language: string | null = 'en', dictionary: Record<string, string> = {'@': 'at'}): this => {
        this._value = Str.slug(this._value, separator, language, dictionary);

        return this;
    }

    public snake = (delimiter: string = '_'): this => {
        this._value = Str.snake(this._value, delimiter);

        return this;
    }

    public split = (pattern: RegExp | number | string): Array<string> => {
        if (typeof pattern === 'number') {
            return pattern === 0 ? [] : this.matchAll('.{1,' + pattern + '}');
        }

        const segments = this._value.split(new RegExp(pattern));

        return !(typeof segments === 'undefined' || segments.length < 1) ? segments : [];
    }

    public squish = (): this => {
        this._value = Str.squish(this._value);

        return this;
    }

    public start = (prefix: string): this => {
        this._value = Str.start(this._value, prefix);

        return this;
    }

    public startsWith = (needles: null | string | number | Array<string>): boolean => {
        return Str.startsWith(this._value, needles);
    }

    public stripTags = (allowedTags: string = ''): this => {
        this._value = Str.stripTags(this._value, allowedTags);

        return this;
    }

    public studly = (): this => {
        this._value = Str.studly(this._value);

        return this;
    }

    public substr = (start: number, length: number | null = null): this => {
        this._value = Str.substr(this._value, start, length);

        return this;
    }

    public substrCount = (needle: string, offset: number = 0, length: number = 0): number => {
        return Str.substrCount(this._value, needle, offset, length);
    }

    public substrReplace = (replace: string, offset: number = 0, length: number | null = null): this => {
        this._value = Str.substrReplace(this._value, replace, offset, length);

        return this;
    }

    public swap = (map: Record<string, string>): this => {
        this._value = Str.swap(map, this._value);

        return this;
    }

    public tap = (callback: Function): Stringable => {
        callback(Stringable.of(this._value));

        return this;
    }

    public test = (pattern: RegExp | string): boolean => {
        return new RegExp(pattern).test(this._value);
    }

    public title = (): this => {
        this._value = Str.title(this._value);

        return this;
    }

    public trim = (characters?: string): this => {
        this._value = Str.trim(this._value, characters);

        return this;
    }

    public ucfirst = (): this => {
        this._value = Str.ucfirst(this._value);

        return this;
    }

    public ucsplit = (): Array<string> => {
        return Str.ucsplit(this._value);
    }

    public unless = (value: Function | string | boolean | number, callback: Closure, defaultValue: Closure | string | null = null): this => {
        value = value instanceof Function ? value(this) : value;

        if (!value) {
            return callback instanceof Function
                ? callback(this, String(value)) ?? this
                : Stringable.of(callback);
        } else if (defaultValue) {
            return defaultValue instanceof Function
                ? defaultValue(this, String(value)) ?? this
                : Stringable.of(defaultValue);
        }

        return this;
    }

    public upper = (): this => {
        this._value = Str.upper(this._value);

        return this;
    }

    public when = (value: Function | string | boolean | number, callback: Closure, defaultValue: Closure = null): this => {
        value = value instanceof Function ? value(this) : value;

        if (value) {
            return callback instanceof Function
                ? callback(this, String(value)) ?? this
                : Stringable.of(callback);
        } else if (defaultValue) {
            return defaultValue instanceof Function
                ? defaultValue(this, String(value)) ?? this
                : Stringable.of(defaultValue);
        }

        return this;
    }

    public whenContains = (needles: string | Array<string>, callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.contains(needles), callback, defaultValue);
    }

    public whenContainsAll = (needles: Array<string>, callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.containsAll(needles), callback, defaultValue);
    }

    public whenEmpty = (callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.isEmpty(), callback, defaultValue);
    }

    public whenNotEmpty = (callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.isNotEmpty(), callback, defaultValue);
    }

    public whenEndsWith = (needles: string | Array<string>, callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.endsWith(needles), callback, defaultValue);
    }

    public whenStartsWith = (needles: string | Array<string>, callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.startsWith(needles), callback, defaultValue);
    }

    public whenExactly = (value: string, callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.exactly(value), callback, defaultValue);
    }

    public whenNotExactly = (value: string, callback: Closure, defaultValue: Closure = null): this => {
        return this.when(!this.exactly(value), callback, defaultValue);
    }

    public whenIs = (pattern: string | Array<string>, callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.is(pattern), callback, defaultValue);
    }

    public whenIsAscii = (callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.isAscii(), callback, defaultValue);
    }

    public whenIsUlid = (callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.isUlid(), callback, defaultValue);
    }

    public whenIsUuid = (callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.isUuid(), callback, defaultValue);
    }

    public whenTest = (pattern: RegExp | string, callback: Closure, defaultValue: Closure = null): this => {
        return this.when(this.test(pattern), callback, defaultValue);
    }

    public wordCount = (): number => {
        return Str.wordCount(this._value);
    }

    public words = (words: number = 100, end: string = '...'): this => {
        this._value = Str.words(this._value, words, end);

        return this;
    }

    public wordWrap = (width: number = 75, breaks: string = "\n", cut: boolean = false): this => {
        this._value = Str.wordWrap(this._value, width, breaks, cut);

        return this;
    }

    public wrap = (before: string, after?: string): this => {
        this._value = Str.wrap(this._value, before, after);

        return this;
    }

    public take = (limit: number): this => {
        this._value = Str.take(this._value, limit);

        return this;
    }

    public unwrap = (before: string, after?: string): this => {
        this._value = Str.unwrap(this._value, before, after);

        return this;
    }

    public toHtmlString = (): Element | Node | null => {
        const template = document.createElement('template');

        template.innerHTML = this.toString();

        return template.content.firstChild;
    }

    public dump = (): this => {
        console.log(this._value);

        return this;
    }

    public dd = () => {
        this.dump();
        throw new Error();
    }

    public toString = (): string => {
        return this._value;
    }

    public toInteger = (): number => {
        if (this._value === 'nan') {
            return 0;
        }
        return parseInt(this._value);
    }

    public toFloat = (): number => {
        if (this._value === 'nan') {
            return 0;
        }
        return parseFloat(this._value);
    }

    public toBoolean = (): boolean => {
        switch(this.lower().trim().toString()){
            case 'true':
            case 'yes':
            case 'on':
            case '1':
                return true;
            default:
                return false;
        }
    }

    public toDate = (): Date => {
        if (this.test(/^\d+\.?\d+$/)) {
            return new Date(this.toInteger() * 1000);
        }
        if (this.test(/^\d{2}:\d{2}:\d{2}$/)) {
            const date = new Date();
            const matches = this.split(':');
            date.setHours(parseInt(matches[0]), parseInt(matches[1]), parseInt(matches[2]));

            return date;
        }
        return new Date(this._value);
    }

    public value = (): string => {
        return this.toString();
    }
}

export default Stringable;