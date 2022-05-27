import {Str} from './Str';
import {
    CamelDirectory,
    ExcerptOptions,
    PipeCallback,
    SnakeDirectory,
    StudlyDirectory
} from './types';

export class Stringable {

    private _value: string;

    private static camelCache: CamelDirectory = {};

    private static snakeCache: SnakeDirectory = {};

    private static studlyCache: StudlyDirectory = {};

    constructor(string: any) {
        this._value = string === null ? '' : String(string);
    }

    static of(string: any): Stringable {
        return new Stringable(string instanceof Stringable ? string.toString() : string);
    }

    public after = (search: string = ''): this => {

        if (search !== '' && this._value.indexOf(search) >= 0) {
            this._value = this._value.substring(this._value.indexOf(search) + search.length);
        }

        return this;
    }

    public afterLast = (search: string = ''): this => {

        if (search !== '' && this._value.indexOf(search) >= 0) {
            this._value = this._value.substring(this._value.lastIndexOf(search) + search.length);
        }

        return this;
    }

    public append = (...values: Array<string>): this => {

        this._value += values.join('');

        return this;
    }

    public ascii = (): this => {

        this._value = this._value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return this;
    }

    public basename = (extension: string|null = null): this => {

        this._value = this._value.split('/').reverse()[0];

        if (extension) {
            this._value = new Stringable(this._value).before(extension).toString();
        }

        return this;
    }

    public before = (search: string = ''): this => {

        if (search !== '' && this._value.indexOf(search) >= 0) {
            this._value = this._value.substring(0, this._value.indexOf(search));
        }

        return this;
    }

    public beforeLast = (search: string = ''): this => {

        if (search !== '' && this._value.indexOf(search) >= 0) {
            this._value = this._value.substring(0, this._value.lastIndexOf(search));
        }

        return this;
    }

    public between = (from: string = '', to: string = ''): this => {

        if (from === '' || to === '') {
            return this;
        }

        this._value = new Stringable(this._value).after(from).beforeLast(to).toString();

        return this;
    }

    public betweenFirst = (from: string = '', to: string = ''): this => {

        if (from === '' || to === '') {
            return this;
        }

        this._value = new Stringable(this._value).after(from).before(to).toString();

        return this;
    }

    public camel = (): this => {

        const key = this._value;

        if (typeof Stringable.camelCache[key] !== 'undefined') {
            this._value = Stringable.camelCache[key];

            return this;
        }

        this._value = Stringable.camelCache[key] = this.studly().lcfirst().toString();

        return this;
    }

    public contains = (needles: string|Array<string>, ignoreCase: boolean = false): boolean => {

        if (needles === '') {
            return false;
        }

        let values = Array.isArray(needles) ? needles : [needles];

        if (ignoreCase) {
            values = values.map(needle => needle.toLowerCase());
            this.lower();
        }

        return values.some(needle => this._value.includes(String(needle)));
    }

    public containsAll = (needles: Array<string>, ignoreCase: boolean = false): boolean => {

        if (ignoreCase) {
            needles = needles.map(needle => needle.toLowerCase());
            this.lower();
        }

        return needles.every(needle => this._value.includes(needle));
    }

    public dirname = (levels: number = 1): this => {

        const components = this.explode('/', levels * -1);

        this._value = components.join('/');

        return this;
    }

    public endsWith = (needles: null|string|number|Array<string>): boolean => {

        if (needles === null || needles === '') {
            return false;
        }

        let values = Array.isArray(needles) ? needles : [needles];

        return values.some(needle => this._value.endsWith(String(needle)));
    }

    public excerpt = (phrase: string = '', {radius = 100, omission = '...'}: ExcerptOptions = {radius: 100, omission: '...'}): this => {

        if (this._value === phrase) {
            return this;
        }

        const matches = phrase === null
            ? ['', '', '', this._value.substring(0, radius)]
            : this._value.match(new RegExp('^(.*?)('+phrase+')(.*)$', 'iu'));

        if (!matches) {
            this._value = '';

            return this;
        }

        let start = matches[1].trimStart();
        let end = matches[3].trimEnd();

        if (radius < start.length) {
            start = omission + start.substring(start.length - radius, start.length);
        }
        if (radius < end.length) {
            end = end.substring(0, radius) + omission;
        }

        this._value = start + matches[2] + end;

        return this;
    }

    public exactly = (value: Stringable|string): boolean => {

        if (value instanceof Stringable) {
            value = value.toString();
        }

        return this._value === value;
    }

    public explode = (delimiter: string, limit?: number): Array<string> => {

        const array = this._value.split(delimiter);

        if (limit !== undefined && array.length >= limit) {
            limit < 0
               ? array.splice(limit)
               : array.push(array.splice(limit - 1).join(delimiter));
        }

        return array;
    }

    public finish = (cap: string): this => {

        const quoted = Str.preg_quote(cap, '/');

        this.replaceMatches('(?:'+quoted+')+$', '').append(cap);

        return this;
    }

    public headline = (): this => {

        let parts = this._value.split(/\s|_/gu);

        if (parts.length === 1) {
            parts = parts[0].split(/(?=\p{Lu})/u).map(i => i.trim());
        }
        this._value = parts.join('_').split(/[-_]/g).map(p =>
            p.toLocaleLowerCase().replace(/(^|\s)\S/g, t => t.toLocaleUpperCase())
        ).filter(Boolean).join(' ');

        return this;
    }

    public is = (pattern: string|Array<string>): boolean => {

        pattern = pattern instanceof Array ? pattern : [pattern];

        if (pattern.length === 0) {
            return false;
        }

        return pattern.some(p => {

            if (p === this._value) {
                return true;
            }

            if (p === '' || p === null) {
                return false;
            }

            if (p.includes('*')) {
                return (new RegExp(p.replace(/\*/g, '.*'))).test(this._value);
            }

            return (new RegExp(p, 'u').test(this._value));
        });
    }

    public isAscii = (): boolean => {

        if (this._value === '') {
            return true;
        }

        return !(/[^\x09\x10\x13\x0A\x0D\x20-\x7E]/).test(this._value);
    }

    public isEmpty = (): boolean => {
        return this._value === '';
    }

    public isNotEmpty = (): boolean => {
        return ! this.isEmpty();
    }

    public isUuid = (): boolean => {
        return new RegExp(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i).test(this._value);
    }

    public kebab = (): this => {
        return this.snake('-');
    }

    public lcfirst = (): this => {

        this._value = this._value[0].toLocaleLowerCase() + this._value.slice(1);

        return this;
    }

    public length = (): number => {

        return this._value.length;
    }

    public limit = (limit: number = 100, end: string = '...'): this => {

        if (limit >= this.length()) {
            return this;
        }

        this._value = this._value.slice(0, limit).trimEnd() + end;

        return this;
    }

    public lower = (): this => {

        this._value = this._value.toLocaleLowerCase();

        return this;
    }

    public ltrim = (characters?: string): this => {

        this._value = characters
            ? this.replaceFirst(characters, '').toString()
            : this._value.trimStart();

        return this;
    }

    public mask = ($character: string, $index: number, $length: number|null = null): this => {

        if ($character === '') {
            return this;
        }

        const $segment = Str.substr(this._value, $index, $length);

        if ($segment === '') {
            return this;
        }

        const $startIndex = $index < 0
            ? $index < -this._value.length ? 0 : this._value.length + $index
            : $index;

        const $start = this._value.substring(0, $startIndex);
        const $mid   = $character[0].repeat($segment.length);
        const $end   = this._value.substring($startIndex + $segment.length);

        this._value =  $start + $mid + ($mid.length >= $end.length ? '' : $end);

        return this;
    }

    public match = (pattern: RegExp|string): string => {

        const matches = this._value.match(new RegExp(pattern));

        if (matches) {
            return matches[1] ?? matches[0];
        }
        return '';
    }

    public matchAll = (pattern: RegExp|string): Array<string> => {

        const matches = this._value.matchAll(new RegExp(pattern, 'g'));
        const result = [];

        for (const match of matches) {
            result.push(match[1] ?? match[0]);
        }

        return result;
    }

    public newLine = (count: number = 1): this => {

        this.append('\n'.repeat(count));

        return this;
    }

    public padBoth = (length: number = 0, pad: string = ' '): this => {

        const half = Math.ceil((length - this.length()) / 2) + this.length();

        this.padRight(half, pad).padLeft(length, pad);

        return this;
    }

    public padLeft = (length: number = 0, pad: string = ' '): this => {

        if (length > this.length()) {
            this._value = this._value.padStart(length, pad);
        }

        return this;
    }

    public padRight = (length: number = 0, pad: string = ' '): this => {

        if (length > this.length()) {
            this._value = this._value.padEnd(length, pad);
        }

        return this;
    }

    public parseCallback = (method: string | null = null): Array<string|null> => {

        return this.contains('@')
            ? this.explode('@', 2)
            : [this._value, method];
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

    public remove = (search: string|Array<string>, caseSensitive: boolean = true): this => {

        search = search instanceof Array ? search : [search];

        search.map(e => {
            this._value = this._value.replace(new RegExp(e, caseSensitive ? 'g' : 'gi'), '');
        });

        return this;
    }

    public repeat = (times: number): this => {

        this._value =  this._value.repeat(times)

        return this;
    }

    public replace = (search: string|Array<string>, replace: string|Array<string>): this => {

        if (typeof search === 'string' && typeof replace === 'string') {
            this._value = this._value.replaceAll(search, replace);

            return this;
        }

        let searchArray = search instanceof Array ? search : [search];
        let replaceArray = replace instanceof Array ? replace : new Array(searchArray.length).fill(replace);

        if (replaceArray.length < searchArray.length) {
            replaceArray.push(...new Array(searchArray.length - replaceArray.length).fill(''));
        }

        for (const index of searchArray.keys()) {
            this._value = this._value.replaceAll(searchArray[index], replaceArray[index]);
        }

        return this;
    }

    public replaceArray = (search: string, replace: Array<string>): this => {

        if (typeof replace === 'object') {
            replace = Object.values(replace);
        }

        let segments = this._value.split(search);
        let results = segments.shift() ?? '';

        segments.map(segment => results += (replace.shift() ?? search) + segment);

        this._value = results;

        return this;
    }

    public replaceFirst = (search: string, replace: string): this => {

        if (search === '') {
            return this;
        }

        this._value = this._value.replace(search, replace);

        return this;
    }

    public replaceLast = (search: string, replace: string): this => {

        if (search === '') {
            return this;
        }

        const position = this._value.lastIndexOf(search);

        if (position >= 0) {
            this._value = this._value.substring(0, position)
                + replace
                + this._value.substring(position + search.length, this.length());
        }

        return this;
    }

    public replaceMatches = (pattern: RegExp|string, replace: string): this => {

        this._value = this._value.replaceAll(new RegExp(pattern, 'g'), replace);

        return this;
    }

    public reverse = (): this => {

        this._value = [...this._value].reverse().join('');

        return this;
    }

    public rtrim = (characters?: string): this => {

        this._value = characters
            ? this.replaceLast(characters, '').toString()
            : this._value.trimEnd();

        return this;
    }

    public scan = (format: string): Array<string|null> => {

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

    public slug = (separator: string = '-', language: string|null = 'en'): this => {

        if (language) {
            this.ascii();
        }

        this.replace(['-', '_'], separator)
            .replace('@', separator + 'at' + separator)
            .snake(separator).trim();

        return this;
    }

    public snake = (delimiter: string = '_'): this => {

        const key = this._value;

        if (typeof Stringable.snakeCache[key] !== 'undefined' && typeof Stringable.snakeCache[key][delimiter] !== 'undefined') {
            this._value = Stringable.snakeCache[key][delimiter];

            return this;
        }

        if (!(/^[a-z]+$/).test(this._value)) {
            this._value = this._value
                .replace(new RegExp(/(?<= )\S|^./, 'gu'), s => s.toLocaleUpperCase())
                .replace(new RegExp(/\s+/, 'gu'),'')
                .replace(new RegExp(/(.)(?=[A-Z])/, 'gu'),'$1'+delimiter)
                .toLocaleLowerCase();
        }

        return this;
    }

    public split = (pattern: RegExp|number|string): Array<string> => {

        if (typeof pattern === 'number') {
            return pattern === 0 ? [] : this.matchAll('.{1,' + pattern + '}');
        }

        const segments = this._value.split(new RegExp(pattern));

        return ! (typeof segments === 'undefined' || segments.length < 1) ? segments : [];
    }

    public squish = (): this => {

        this.trim().replaceMatches(/\s+|\u3164+/, ' ');

        return this;
    }

    public start = (prefix: string): this => {

        if (!new Stringable(this._value).startsWith(prefix)) {
            this._value = `${prefix}${this._value}`;
        }

        return this;
    }

    public startsWith = (needles: null|string|number|Array<string>): boolean => {

        if (needles === null || needles === '') {
            return false;
        }

        const values = Array.isArray(needles) ? needles : [needles];

        return values.some(needle => this._value.startsWith(String(needle)));
    }

    public stripTags = (allowedTags: string = ''): this => {

        const tags = /<\/?([a-z\d]*)\b[^>]*>?/gi;
        const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

        this.replaceMatches(commentsAndPhpTags, '');

        while (true) {
            const before = this._value

            this._value = before.replace(tags, function ($0, $1) {
                return allowedTags.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
            })

            if (before === this._value) {
                break;
            }
        }

        return this;
    }

    public studly = (): this => {

        const key = this._value;

        if (typeof Stringable.studlyCache[key] !== 'undefined') {
            this._value = Stringable.studlyCache[key];

            return this;
        }

        this._value = Stringable.studlyCache[key] = this._value.trim()
            .replace(/[_\-]/g, ' ')
            .replace(/\s+|\u3164+/g, ' ')
            .split(' ')
            .reduce((str, w) => str + w[0].toLocaleUpperCase() + w.slice(1), '');

        return this;
    }

    public substr = (start: number, length: number|null = null): this => {

        this._value = Str.substr(this._value, start, length);

        return this;
    }

    public substrCount = (needle: string, offset: number = 0, length: number = 0): number => {

        if (this.length() === 0 || needle.length === 0 || this._value.indexOf(needle) === -1) {
            return 0;
        }

        let word = this._value;

        word = word.substring(offset >= 0 ? offset : word.length + offset);
        word = word.substring(0, length > 0 ? length : word.length + length);

        let match = word.match(new RegExp(needle, 'g'));

        return match ? match.length : 0;
    }

    public substrReplace = (replace: string, offset: number = 0, length: number|null = null): this => {

        length = length !== null ? length : this.length();
        offset = offset >=0 ? offset : offset + this.length();
        length = length >=0 ? length : length + this.length() - offset;

        this._value = [
            this._value.slice(0, offset),
            replace.substring(0, length),
            replace.slice(length),
            this._value.slice(offset + length)
        ].join('')

        return this;
    }

    public swap = (map: Record<string, string>): this => {

        const keys = Object.keys(map)
            .map((key: string) => key.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'));

        this._value = this._value
            .split(RegExp(`(${keys.join('|')})`))
            .map((key: string) => map[key] || key)
            .join('');

        return this;
    }

    public tap = (callback: Function): Stringable => {
        return Str.tap(this, callback);
    }

    public test = (pattern: RegExp|string): boolean => {

        return new RegExp(pattern).test(this._value);
    }

    public title = (): this => {

        this._value = this._value.toLocaleLowerCase().replace(/(^|\s)\S/g, t => t.toLocaleUpperCase());

        return this;
    }

    public trim = (characters?: string): this => {

        this._value = characters
            ? this.ltrim(characters).rtrim(characters).toString()
            : this._value.trim();

        return this;
    }

    public ucfirst = (): this => {

        this._value = this._value[0].toLocaleUpperCase() + this._value.slice(1);

        return this;
    }

    public ucsplit = (): Array<string> => {
        return this._value.split(/(?=\p{Lu})/u).map(i => i.trim());
    }

    public upper = (): this => {

        this._value = this._value.toLocaleUpperCase();

        return this;
    }

    public wordCount = (): number => {

        return this._value.trim().split(/\s+/).length;
    }

    public words = (words: number = 100, end: string = '...'): this => {

        if (this.wordCount() <= words) {
            return this;
        }

        const match = this._value.match(new RegExp(`^\\s*(?:\\S+\\s*){1,${words}}`, 'u'));

        if (match) {
            this._value = match[0].trimEnd() + end;
        }

        return this;
    }

    public wrap = (before: string, after?: string): this => {

        this.prepend(before).append(after ?? before);

        return this;
    }

    public toHtmlString = (): Element|Node|null => {

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

    public value = (): string => {
        return this.toString();
    }

}