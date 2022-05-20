import {Str} from './Str';

export class Stringable {

    private value: string;

    constructor(string: any) {
        this.value = string === null ? '' : String(string);
    }

    static of(string: any): Stringable {
        return new Stringable(string);
    }

    public after = (search: string = ''): this => {

        if (search !== '' && this.value.indexOf(search) >= 0) {
            this.value = this.value.substring(this.value.indexOf(search) + search.length);
        }

        return this;
    }

    public afterLast = (search: string = ''): this => {

        if (search !== '' && this.value.indexOf(search) >= 0) {
            this.value = this.value.substring(this.value.lastIndexOf(search) + search.length);
        }

        return this;
    }

    public append = (...values: Array<string>): this => {

        this.value += values.join('');

        return this;
    }

    public ascii = (): this => {

        this.value = this.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        return this;
    }

    public basename = (extension: string|null = null): this => {

        this.value = this.value.split('/').reverse()[0];

        if (extension) {
            this.value = new Stringable(this.value).before(extension).toString();
        }

        return this;
    }

    public before = (search: string = ''): this => {

        if (search !== '' && this.value.indexOf(search) >= 0) {
            this.value = this.value.substring(0, this.value.indexOf(search));
        }

        return this;
    }

    public beforeLast = (search: string = ''): this => {

        if (search !== '' && this.value.indexOf(search) >= 0) {
            this.value = this.value.substring(0, this.value.lastIndexOf(search));
        }

        return this;
    }

    public between = (from: string = '', to: string = ''): this => {

        if (from === '' || to === '') {
            return this;
        }

        this.value = new Stringable(this.value).after(from).beforeLast(to).toString();

        return this;
    }

    public betweenFirst = (from: string = '', to: string = ''): this => {

        if (from === '' || to === '') {
            return this;
        }

        this.value = new Stringable(this.value).after(from).before(to).toString();

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

        return values.some(needle => this.value.includes(String(needle)));
    }

    public containsAll = (needles: Array<string>, ignoreCase: boolean = false): boolean => {

        if (ignoreCase) {
            needles = needles.map(needle => needle.toLowerCase());
            this.lower();
        }

        return needles.every(needle => this.value.includes(needle));
    }

    public dirname = (levels: number = 1): this => {

        const components = this.explode('/', levels * -1);

        this.value = components.join('/');

        return this;
    }

    public endsWith = (needles: null|string|number|Array<string>): boolean => {

        if (needles === null || needles === '') {
            return false;
        }

        let values = Array.isArray(needles) ? needles : [needles];

        return values.some(needle => this.value.endsWith(String(needle)));
    }

    public exactly = (value: Stringable|string): boolean => {

        if (value instanceof Stringable) {
            value = value.toString();
        }

        return this.value === value;
    }

    public explode = (delimiter: string, limit?: number): Array<string> => {

        const array = this.value.split(delimiter);

        if (limit !== undefined && array.length >= limit) {
            limit < 0
               ? array.splice(limit)
               : array.push(array.splice(limit - 1).join(delimiter));
        }

        return array;
    }

    public finish = (cap: string): this => {

        const quoted = cap.replace(/[-\[\]\/{}()*+?.\\^$|]/g, '\\$&');

        this.replaceMatches('(?:'+quoted+')+$', '').append(cap);

        return this;
    }

    public is = (pattern: string|Array<string>): boolean => {

        pattern = pattern instanceof Array ? pattern : [pattern];

        if (pattern.length === 0) {
            return false;
        }

        return pattern.some(p => {

            if (p === this.value) {
                return true;
            }

            if (p === '' || p === null) {
                return false;
            }

            if (p.includes('*')) {
                return (new RegExp(p.replace(/\*/g, '.*'))).test(this.value);
            }

            return (new RegExp(p, 'u').test(this.value));
        });
    }

    public isEmpty = (): boolean => {
        return this.value === '';
    }

    public isNotEmpty = (): boolean => {
        return ! this.isEmpty();
    }

    public isUuid = (): boolean => {
        return new RegExp(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i).test(this.value);
    }

    public lcfirst = (): this => {

        this.value = this.value[0].toLocaleLowerCase() + this.value.slice(1);

        return this;
    }

    public length = (): number => {

        return this.value.length;
    }

    public limit = (limit: number = 100, end: string = '...'): this => {

        if (limit >= this.length()) {
            return this;
        }

        this.value = this.value.slice(0, limit).trimEnd() + end;

        return this;
    }

    public lower = (): this => {

        this.value = this.value.toLocaleLowerCase();

        return this;
    }

    public ltrim = (characters?: string): this => {

        this.value = characters
            ? this.replaceFirst(characters, '').toString()
            : this.value.trimStart();

        return this;
    }

    public match = (pattern: RegExp|string): string => {

        const matches = this.value.match(new RegExp(pattern));

        if (matches) {
            return matches[1] ?? matches[0];
        }
        return '';
    }

    public matchAll = (pattern: RegExp|string): Array<string> => {

        const matches = this.value.matchAll(new RegExp(pattern, 'g'));
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
            this.value = this.value.padStart(length, pad);
        }

        return this;
    }

    public padRight = (length: number = 0, pad: string = ' '): this => {

        if (length > this.length()) {
            this.value = this.value.padEnd(length, pad);
        }

        return this;
    }

    public prepend = (...values: Array<string>): this => {

        this.value = values.join('') + this.value;

        return this;
    }

    public remove = (search: string|Array<string>, caseSensitive: boolean = true): this => {

        search = search instanceof Array ? search : [search];

        search.map(e => {
            this.value = this.value.replace(new RegExp(e, caseSensitive ? 'g' : 'gi'), '');
        });

        return this;
    }

    public replace = (search: string|Array<string>, replace: string|Array<string>): this => {

        if (typeof search === 'string' && typeof replace === 'string') {
            this.value = this.value.replaceAll(search, replace);

            return this;
        }

        let searchArray = search instanceof Array ? search : [search];
        let replaceArray = replace instanceof Array ? replace : new Array(searchArray.length).fill(replace);

        if (replaceArray.length < searchArray.length) {
            replaceArray.push(...new Array(searchArray.length - replaceArray.length).fill(''));
        }

        for (const index of searchArray.keys()) {
            this.value = this.value.replaceAll(searchArray[index], replaceArray[index]);
        }

        return this;
    }

    public replaceArray = (search: string, replace: Array<string>): this => {

        if (typeof replace === 'object') {
            replace = Object.values(replace);
        }

        let segments = this.value.split(search);
        let results = segments.shift() ?? '';

        segments.map(segment => results += (replace.shift() ?? search) + segment);

        this.value = results;

        return this;
    }

    public replaceFirst = (search: string, replace: string): this => {

        if (search === '') {
            return this;
        }

        this.value = this.value.replace(search, replace);

        return this;
    }

    public replaceLast = (search: string, replace: string): this => {

        if (search === '') {
            return this;
        }

        const position = this.value.lastIndexOf(search);

        if (position >= 0) {
            this.value = this.value.substring(0, position)
                + replace
                + this.value.substring(position + search.length, this.length());
        }

        return this;
    }

    public replaceMatches = (pattern: RegExp|string, replace: string): this => {

        this.value = this.value.replaceAll(new RegExp(pattern, 'g'), replace);

        return this;
    }

    public rtrim = (characters?: string): this => {

        this.value = characters
            ? this.replaceLast(characters, '').toString()
            : this.value.trimEnd();

        return this;
    }

    public squish = (): this => {

        this.trim().replaceMatches(/\s+|\u3164+/g, ' ');

        return this;
    }

    public start = (prefix: string): this => {

        if (!new Stringable(this.value).startsWith(prefix)) {
            this.value = `${prefix}${this.value}`;
        }

        return this;
    }

    public startsWith = (needles: null|string|number|Array<string>): boolean => {

        if (needles === null || needles === '') {
            return false;
        }

        const values = Array.isArray(needles) ? needles : [needles];

        return values.some(needle => this.value.startsWith(String(needle)));
    }

    public substr = (start: number, length: number|null = null): this => {

        this.value = Str.substr(this.value, start, length);

        return this;
    }

    public substrCount = (needle: string, offset: number = 0, length: number = 0): number => {

        if (this.length() === 0 || needle.length === 0 || this.value.indexOf(needle) === -1) {
            return 0;
        }

        let word = this.value;

        word = word.substring(offset >= 0 ? offset : word.length + offset);
        word = word.substring(0, length > 0 ? length : word.length + length);

        let match = word.match(new RegExp(needle, 'g'));

        return match ? match.length : 0;
    }

    public substrReplace = (replace: string, offset: number = 0, length: number|null = null): this => {

        length = length !== null ? length : this.length();
        offset = offset >=0 ? offset : offset + this.length();
        length = length >=0 ? length : length + this.length() - offset;

        this.value = [
            this.value.slice(0, offset),
            replace.substring(0, length),
            replace.slice(length),
            this.value.slice(offset + length)
        ].join('')

        return this;
    }

    public swap = (map: Record<string, string>): this => {

        const keys = Object.keys(map)
            .map((key: string) => key.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'));

        this.value = this.value
            .split(RegExp(`(${keys.join('|')})`))
            .map((key: string) => map[key] || key)
            .join('');

        return this;
    }

    public test = (pattern: RegExp|string): boolean => {

        return new RegExp(pattern).test(this.value);
    }

    public title = (): this => {

        this.value = this.value.toLocaleLowerCase().replace(/(^|\s)\S/g, t => t.toLocaleUpperCase());

        return this;
    }

    public trim = (characters?: string): this => {

        this.value = characters
            ? this.ltrim(characters).rtrim(characters).toString()
            : this.value.trim();

        return this;
    }

    public ucfirst = (): this => {

        this.value = this.value[0].toLocaleUpperCase() + this.value.slice(1);

        return this;
    }

    public ucsplit = (): Array<string> => {
        return this.value.split(/(?=\p{Lu})/u).map(i => i.trim());
    }

    public upper = (): this => {

        this.value = this.value.toLocaleUpperCase();

        return this;
    }

    public wordCount = (): number => {

        return this.value.trim().split(/\s+/).length;
    }

    public words = (words: number = 100, end: string = '...'): this => {

        if (this.wordCount() <= words) {
            return this;
        }

        const match = this.value.match(new RegExp(`^\\s*(?:\\S+\\s*){1,${words}}`, 'u'));

        if (match) {
            this.value = match[0].trimEnd() + end;
        }

        return this;
    }

    public toString = (): string => {
        return this.value;
    }

}