import {Str} from './Str';

export class Stringable {

    private value: string;

    constructor(string: any) {
        this.value = string === null ? '' : String(string);
    }

    static of(string: any) {
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

    public append = (...values: string[]): this => {

        this.value += values.join('');

        return this;
    }

    public ascii = (): this => {

        this.value = this.value !== null
            ? this.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            : '';

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

    public lower = (): this => {

        this.value = this.value.toLocaleLowerCase();

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

    public substr = (start: number, length:number|null = null): this => {

        this.value = Str.substr(this.value, start, length);

        return this;
    }

    public upper = (): this => {

        this.value = this.value.toLocaleUpperCase();

        return this;
    }

    public toString = (): string => {
        return this.value;
    }

}