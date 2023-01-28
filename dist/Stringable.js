"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stringable = void 0;
const Str_1 = require("./Str");
const marked_1 = require("marked");
const markdown_1 = require("./types/markdown");
class Stringable {
    constructor(string) {
        Object.defineProperty(this, "_value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "after", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search = '') => {
                if (search !== '' && this._value.indexOf(search) >= 0) {
                    this._value = this._value.substring(this._value.indexOf(search) + search.length);
                }
                return this;
            }
        });
        Object.defineProperty(this, "afterLast", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search = '') => {
                if (search !== '' && this._value.indexOf(search) >= 0) {
                    this._value = this._value.substring(this._value.lastIndexOf(search) + search.length);
                }
                return this;
            }
        });
        Object.defineProperty(this, "append", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...values) => {
                this._value += values.join('');
                return this;
            }
        });
        Object.defineProperty(this, "ascii", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = this._value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                return this;
            }
        });
        Object.defineProperty(this, "basename", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (extension = null) => {
                this._value = this._value.split('/').reverse()[0];
                if (extension) {
                    this._value = new Stringable(this._value).before(extension).toString();
                }
                return this;
            }
        });
        Object.defineProperty(this, "before", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search = '') => {
                if (search !== '' && this._value.indexOf(search) >= 0) {
                    this._value = this._value.substring(0, this._value.indexOf(search));
                }
                return this;
            }
        });
        Object.defineProperty(this, "beforeLast", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search = '') => {
                if (search !== '' && this._value.indexOf(search) >= 0) {
                    this._value = this._value.substring(0, this._value.lastIndexOf(search));
                }
                return this;
            }
        });
        Object.defineProperty(this, "between", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (from = '', to = '') => {
                if (from === '' || to === '') {
                    return this;
                }
                this._value = new Stringable(this._value).after(from).beforeLast(to).toString();
                return this;
            }
        });
        Object.defineProperty(this, "betweenFirst", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (from = '', to = '') => {
                if (from === '' || to === '') {
                    return this;
                }
                this._value = new Stringable(this._value).after(from).before(to).toString();
                return this;
            }
        });
        Object.defineProperty(this, "camel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                const key = this._value;
                if (typeof Stringable._camelCache[key] !== 'undefined') {
                    this._value = Stringable._camelCache[key];
                    return this;
                }
                this._value = Stringable._camelCache[key] = this.studly().lcfirst().toString();
                return this;
            }
        });
        Object.defineProperty(this, "contains", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles, ignoreCase = false) => {
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
        });
        Object.defineProperty(this, "containsAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles, ignoreCase = false) => {
                if (ignoreCase) {
                    needles = needles.map(needle => needle.toLowerCase());
                    this.lower();
                }
                return needles.every(needle => this._value.includes(needle));
            }
        });
        Object.defineProperty(this, "dirname", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (levels = 1) => {
                const components = this.explode('/', levels * -1);
                this._value = components.join('/');
                return this;
            }
        });
        Object.defineProperty(this, "endsWith", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles) => {
                if (needles === null || needles === '') {
                    return false;
                }
                let values = Array.isArray(needles) ? needles : [needles];
                return values.some(needle => this._value.endsWith(String(needle)));
            }
        });
        Object.defineProperty(this, "excerpt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (phrase = '', { radius = 100, omission = '...' } = {
                radius: 100,
                omission: '...'
            }) => {
                if (this._value === phrase) {
                    return this;
                }
                const matches = phrase === null
                    ? ['', '', '', this._value.substring(0, radius)]
                    : this._value.match(new RegExp('^(.*?)(' + phrase + ')(.*)$', 'iu'));
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
        });
        Object.defineProperty(this, "exactly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (value) => {
                if (value instanceof Stringable) {
                    value = value.toString();
                }
                return this._value === value;
            }
        });
        Object.defineProperty(this, "explode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (delimiter, limit) => {
                const array = this._value.split(delimiter);
                if (limit !== undefined && array.length >= limit) {
                    limit < 0
                        ? array.splice(limit)
                        : array.push(array.splice(limit - 1).join(delimiter));
                }
                return array;
            }
        });
        Object.defineProperty(this, "finish", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (cap) => {
                const quoted = Str_1.Str.preg_quote(cap, '/');
                this.replaceMatches('(?:' + quoted + ')+$', '').append(cap);
                return this;
            }
        });
        Object.defineProperty(this, "headline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                let parts = this._value.split(/\s|_/gu);
                if (parts.length === 1) {
                    parts = parts[0].split(/(?=\p{Lu})/u).map(i => i.trim());
                }
                this._value = parts.join('_').split(/[-_]/g).map(p => p.toLocaleLowerCase().replace(/(^|\s)\S/g, t => t.toLocaleUpperCase())).filter(Boolean).join(' ');
                return this;
            }
        });
        Object.defineProperty(this, "is", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern) => {
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
        });
        Object.defineProperty(this, "isAscii", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                if (this._value === '') {
                    return true;
                }
                return !(/[^\x09\x10\x13\x0A\x0D\x20-\x7E]/).test(this._value);
            }
        });
        Object.defineProperty(this, "isEmpty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return this._value === '';
            }
        });
        Object.defineProperty(this, "isNotEmpty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return !this.isEmpty();
            }
        });
        Object.defineProperty(this, "isJson", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                if (this.isEmpty()) {
                    return false;
                }
                try {
                    JSON.parse(this._value);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
        });
        Object.defineProperty(this, "isUlid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                if (this._value.length !== 26) {
                    return false;
                }
                if (!new RegExp(/^[a-zA-Z0-9]*$/i).test(this._value)) {
                    return false;
                }
                return this._value[0] <= '7';
            }
        });
        Object.defineProperty(this, "isUuid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return new RegExp(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i).test(this._value);
            }
        });
        Object.defineProperty(this, "kebab", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return this.snake('-');
            }
        });
        Object.defineProperty(this, "lcfirst", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = this._value[0].toLocaleLowerCase() + this._value.slice(1);
                return this;
            }
        });
        Object.defineProperty(this, "length", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return this._value.length;
            }
        });
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (limit = 100, end = '...') => {
                if (limit >= this.length()) {
                    return this;
                }
                this._value = this._value.slice(0, limit).trimEnd() + end;
                return this;
            }
        });
        Object.defineProperty(this, "lower", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = this._value.toLocaleLowerCase();
                return this;
            }
        });
        Object.defineProperty(this, "ltrim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (characters) => {
                this._value = characters
                    ? this.replaceFirst(characters, '').toString()
                    : this._value.trimStart();
                return this;
            }
        });
        Object.defineProperty(this, "markdown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (options = markdown_1.defaultConfiguration) => {
                options = Object.assign(Object.assign({}, markdown_1.defaultConfiguration), options);
                if (options.html_input === 'STRIP') {
                    this.stripTags();
                }
                return marked_1.marked.parse(this._value, options).trimEnd();
            }
        });
        Object.defineProperty(this, "inlineMarkdown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (options = markdown_1.defaultConfiguration) => {
                options = Object.assign(Object.assign({}, markdown_1.defaultConfiguration), options);
                if (options.html_input === 'STRIP') {
                    this.stripTags();
                }
                return marked_1.marked.parseInline(this._value, options);
            }
        });
        Object.defineProperty(this, "mask", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (character, index, length = null) => {
                if (character === '') {
                    return this;
                }
                const segment = Str_1.Str.substr(this._value, index, length);
                if (segment === '') {
                    return this;
                }
                const startIndex = index < 0
                    ? index < -this._value.length ? 0 : this._value.length + index
                    : index;
                const start = this._value.substring(0, startIndex);
                const mid = character[0].repeat(segment.length);
                const end = this._value.substring(startIndex + segment.length);
                this._value = start + mid + (mid.length >= end.length ? '' : end);
                return this;
            }
        });
        Object.defineProperty(this, "match", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern) => {
                var _a;
                const matches = this._value.match(new RegExp(pattern));
                if (matches) {
                    return (_a = matches[1]) !== null && _a !== void 0 ? _a : matches[0];
                }
                return '';
            }
        });
        Object.defineProperty(this, "matchAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern) => {
                var _a;
                const matches = this._value.matchAll(new RegExp(pattern, 'g'));
                const result = [];
                for (const match of matches) {
                    result.push((_a = match[1]) !== null && _a !== void 0 ? _a : match[0]);
                }
                return result;
            }
        });
        Object.defineProperty(this, "newLine", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (count = 1) => {
                this.append('\n'.repeat(count));
                return this;
            }
        });
        Object.defineProperty(this, "padBoth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (length = 0, pad = ' ') => {
                const half = Math.ceil((length - this.length()) / 2) + this.length();
                this.padRight(half, pad).padLeft(length, pad);
                return this;
            }
        });
        Object.defineProperty(this, "padLeft", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (length = 0, pad = ' ') => {
                if (length > this.length()) {
                    this._value = this._value.padStart(length, pad);
                }
                return this;
            }
        });
        Object.defineProperty(this, "padRight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (length = 0, pad = ' ') => {
                if (length > this.length()) {
                    this._value = this._value.padEnd(length, pad);
                }
                return this;
            }
        });
        Object.defineProperty(this, "parseCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (method = null) => {
                return this.contains('@')
                    ? this.explode('@', 2)
                    : [this._value, method];
            }
        });
        Object.defineProperty(this, "pipe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (callback) => {
                this._value = callback instanceof Function
                    ? callback(this._value)
                    : this._value[callback]();
                return this;
            }
        });
        Object.defineProperty(this, "prepend", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...values) => {
                this._value = values.join('') + this._value;
                return this;
            }
        });
        Object.defineProperty(this, "remove", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search, caseSensitive = true) => {
                search = search instanceof Array ? search : [search];
                search.map(e => {
                    this._value = this._value.replace(new RegExp(e, caseSensitive ? 'g' : 'gi'), '');
                });
                return this;
            }
        });
        Object.defineProperty(this, "repeat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (times) => {
                this._value = this._value.repeat(times);
                return this;
            }
        });
        Object.defineProperty(this, "replace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search, replace) => {
                if (typeof search === 'string' && typeof replace === 'string') {
                    return this.replaceMatches(Str_1.Str.preg_quote(search), replace);
                }
                let searchArray = search instanceof Array ? search : [search];
                let replaceArray = replace instanceof Array ? replace : new Array(searchArray.length).fill(replace);
                if (replaceArray.length < searchArray.length) {
                    replaceArray.push(...new Array(searchArray.length - replaceArray.length).fill(''));
                }
                for (const index of searchArray.keys()) {
                    this._value = this._value.replace(searchArray[index], replaceArray[index]);
                }
                return this;
            }
        });
        Object.defineProperty(this, "replaceArray", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search, replace) => {
                var _a;
                if (typeof replace === 'object') {
                    replace = Object.values(replace);
                }
                let segments = this._value.split(search);
                let results = (_a = segments.shift()) !== null && _a !== void 0 ? _a : '';
                segments.map(segment => { var _a; return results += ((_a = replace.shift()) !== null && _a !== void 0 ? _a : search) + segment; });
                this._value = results;
                return this;
            }
        });
        Object.defineProperty(this, "replaceFirst", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search, replace) => {
                if (search === '') {
                    return this;
                }
                this._value = this._value.replace(search, replace);
                return this;
            }
        });
        Object.defineProperty(this, "replaceLast", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search, replace) => {
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
        });
        Object.defineProperty(this, "replaceMatches", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern, replace) => {
                this._value = this._value.replace(new RegExp(pattern, 'g'), replace);
                return this;
            }
        });
        Object.defineProperty(this, "reverse", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = [...this._value].reverse().join('');
                return this;
            }
        });
        Object.defineProperty(this, "rtrim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (characters) => {
                this._value = characters
                    ? this.replaceLast(characters, '').toString()
                    : this._value.trimEnd();
                return this;
            }
        });
        Object.defineProperty(this, "scan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (format) => {
                const selectors = format.match(new RegExp(/(%\[.*?]|%[.*]|[^%]+|(%.))/, 'g'));
                const result = [];
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
                    }
                    else {
                        result.push(Str_1.Str.preg_quote(val, '/'));
                    }
                });
                const match = this._value.match(new RegExp(result.join(''), 'u'));
                if (!match || !match[1]) {
                    return [null];
                }
                match.shift();
                return match;
            }
        });
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (separator = '-', language = 'en') => {
                if (language) {
                    this.ascii();
                }
                this.replace(['-', '_'], separator)
                    .replace('@', separator + 'at' + separator)
                    .snake(separator).trim();
                return this;
            }
        });
        Object.defineProperty(this, "snake", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (delimiter = '_') => {
                const key = this._value;
                if (typeof Stringable._snakeCache[key] !== 'undefined' && typeof Stringable._snakeCache[key][delimiter] !== 'undefined') {
                    this._value = Stringable._snakeCache[key][delimiter];
                    return this;
                }
                if (!(/^[a-z]+$/).test(this._value)) {
                    this._value = this._value
                        .replace(new RegExp(/(?<= )\S|^./, 'gu'), s => s.toLocaleUpperCase())
                        .replace(new RegExp(/\s+/, 'gu'), '')
                        .replace(new RegExp(/(.)(?=[A-Z])/, 'gu'), '$1' + delimiter)
                        .toLocaleLowerCase();
                }
                if (typeof Stringable._snakeCache[key] !== 'undefined') {
                    Stringable._snakeCache[key][delimiter] = this._value;
                }
                else {
                    Stringable._snakeCache[key] = { [delimiter]: this._value };
                }
                return this;
            }
        });
        Object.defineProperty(this, "split", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern) => {
                if (typeof pattern === 'number') {
                    return pattern === 0 ? [] : this.matchAll('.{1,' + pattern + '}');
                }
                const segments = this._value.split(new RegExp(pattern));
                return !(typeof segments === 'undefined' || segments.length < 1) ? segments : [];
            }
        });
        Object.defineProperty(this, "squish", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.trim().replaceMatches(/\s+|\u3164+/, ' ');
                return this;
            }
        });
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (prefix) => {
                if (!new Stringable(this._value).startsWith(prefix)) {
                    this._value = `${prefix}${this._value}`;
                }
                return this;
            }
        });
        Object.defineProperty(this, "startsWith", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles) => {
                if (needles === null || needles === '') {
                    return false;
                }
                const values = Array.isArray(needles) ? needles : [needles];
                return values.some(needle => this._value.startsWith(String(needle)));
            }
        });
        Object.defineProperty(this, "stripTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (allowedTags = '') => {
                const tags = /<\/?([a-z\d]*)\b[^>]*>?/gi;
                const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
                this.replaceMatches(commentsAndPhpTags, '');
                while (true) {
                    const before = this._value;
                    this._value = before.replace(tags, (g1, g2) => allowedTags.indexOf('<' + g2.toLowerCase() + '>') > -1 ? g1 : '');
                    if (before === this._value) {
                        break;
                    }
                }
                return this;
            }
        });
        Object.defineProperty(this, "studly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                const key = this._value;
                if (typeof Stringable._studlyCache[key] !== 'undefined') {
                    this._value = Stringable._studlyCache[key];
                    return this;
                }
                this._value = Stringable._studlyCache[key] = this._value.trim()
                    .replace(/[_\-]/g, ' ')
                    .replace(/\s+|\u3164+/g, ' ')
                    .split(' ')
                    .reduce((str, w) => str + w[0].toLocaleUpperCase() + w.slice(1), '');
                return this;
            }
        });
        Object.defineProperty(this, "substr", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (start, length = null) => {
                this._value = Str_1.Str.substr(this._value, start, length);
                return this;
            }
        });
        Object.defineProperty(this, "substrCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needle, offset = 0, length = 0) => {
                if (this.length() === 0 || needle.length === 0 || this._value.indexOf(needle) === -1) {
                    return 0;
                }
                let word = this._value;
                word = word.substring(offset >= 0 ? offset : word.length + offset);
                word = word.substring(0, length > 0 ? length : word.length + length);
                let match = word.match(new RegExp(needle, 'g'));
                return match ? match.length : 0;
            }
        });
        Object.defineProperty(this, "substrReplace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (replace, offset = 0, length = null) => {
                length = length !== null ? length : this.length();
                offset = offset >= 0 ? offset : offset + this.length();
                length = length >= 0 ? length : length + this.length() - offset;
                this._value = [
                    this._value.slice(0, offset),
                    replace.substring(0, length),
                    replace.slice(length),
                    this._value.slice(offset + length)
                ].join('');
                return this;
            }
        });
        Object.defineProperty(this, "swap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (map) => {
                const keys = Object.keys(map)
                    .map((key) => key.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'));
                this._value = this._value
                    .split(RegExp(`(${keys.join('|')})`))
                    .map((key) => map[key] || key)
                    .join('');
                return this;
            }
        });
        Object.defineProperty(this, "tap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (callback) => {
                return Str_1.Str.tap(this, callback);
            }
        });
        Object.defineProperty(this, "test", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern) => {
                return new RegExp(pattern).test(this._value);
            }
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = this._value.toLocaleLowerCase().replace(/(^|\s)\S/g, t => t.toLocaleUpperCase());
                return this;
            }
        });
        Object.defineProperty(this, "trim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (characters) => {
                this._value = characters
                    ? this.ltrim(characters).rtrim(characters).toString()
                    : this._value.trim();
                return this;
            }
        });
        Object.defineProperty(this, "ucfirst", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = this._value[0].toLocaleUpperCase() + this._value.slice(1);
                return this;
            }
        });
        Object.defineProperty(this, "ucsplit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return this._value.split(/(?=\p{Lu})/u).map(i => i.trim());
            }
        });
        Object.defineProperty(this, "unless", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (value, callback, defaultValue = null) => {
                var _a, _b;
                value = value instanceof Function ? value(this) : value;
                if (!value) {
                    return callback instanceof Function
                        ? (_a = callback(this, String(value))) !== null && _a !== void 0 ? _a : this
                        : Stringable.of(callback);
                }
                else if (defaultValue) {
                    return defaultValue instanceof Function
                        ? (_b = defaultValue(this, String(value))) !== null && _b !== void 0 ? _b : this
                        : Stringable.of(defaultValue);
                }
                return this;
            }
        });
        Object.defineProperty(this, "upper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = this._value.toLocaleUpperCase();
                return this;
            }
        });
        Object.defineProperty(this, "when", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (value, callback, defaultValue = null) => {
                var _a, _b;
                value = value instanceof Function ? value(this) : value;
                if (value) {
                    return callback instanceof Function
                        ? (_a = callback(this, String(value))) !== null && _a !== void 0 ? _a : this
                        : Stringable.of(callback);
                }
                else if (defaultValue) {
                    return defaultValue instanceof Function
                        ? (_b = defaultValue(this, String(value))) !== null && _b !== void 0 ? _b : this
                        : Stringable.of(defaultValue);
                }
                return this;
            }
        });
        Object.defineProperty(this, "whenContains", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles, callback, defaultValue = null) => {
                return this.when(this.contains(needles), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenContainsAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles, callback, defaultValue = null) => {
                return this.when(this.containsAll(needles), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenEmpty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (callback, defaultValue = null) => {
                return this.when(this.isEmpty(), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenNotEmpty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (callback, defaultValue = null) => {
                return this.when(this.isNotEmpty(), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenEndsWith", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles, callback, defaultValue = null) => {
                return this.when(this.endsWith(needles), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenStartsWith", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles, callback, defaultValue = null) => {
                return this.when(this.startsWith(needles), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenExactly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (value, callback, defaultValue = null) => {
                return this.when(this.exactly(value), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenNotExactly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (value, callback, defaultValue = null) => {
                return this.when(!this.exactly(value), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenIs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern, callback, defaultValue = null) => {
                return this.when(this.is(pattern), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenIsAscii", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (callback, defaultValue = null) => {
                return this.when(this.isAscii(), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenIsUlid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (callback, defaultValue = null) => {
                return this.when(this.isUlid(), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenIsUuid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (callback, defaultValue = null) => {
                return this.when(this.isUuid(), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "whenTest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern, callback, defaultValue = null) => {
                return this.when(this.test(pattern), callback, defaultValue);
            }
        });
        Object.defineProperty(this, "wordCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return this._value.trim().split(/\s+/).length;
            }
        });
        Object.defineProperty(this, "words", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (words = 100, end = '...') => {
                if (this.wordCount() <= words) {
                    return this;
                }
                const match = this._value.match(new RegExp(`^\\s*(?:\\S+\\s*){1,${words}}`, 'u'));
                if (match) {
                    this._value = match[0].trimEnd() + end;
                }
                return this;
            }
        });
        Object.defineProperty(this, "wrap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (before, after) => {
                this.prepend(before).append(after !== null && after !== void 0 ? after : before);
                return this;
            }
        });
        Object.defineProperty(this, "toHtmlString", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                const template = document.createElement('template');
                template.innerHTML = this.toString();
                return template.content.firstChild;
            }
        });
        Object.defineProperty(this, "dump", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                console.log(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "dd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.dump();
                throw new Error();
            }
        });
        Object.defineProperty(this, "toString", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return this._value;
            }
        });
        Object.defineProperty(this, "toInteger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                if (this._value === 'nan') {
                    return 0;
                }
                return parseInt(this._value);
            }
        });
        Object.defineProperty(this, "toFloat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                if (this._value === 'nan') {
                    return 0;
                }
                return parseFloat(this._value);
            }
        });
        Object.defineProperty(this, "toBoolean", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                switch (this.lower().trim().toString()) {
                    case 'true':
                    case 'yes':
                    case 'on':
                    case '1':
                        return true;
                    default:
                        return false;
                }
            }
        });
        Object.defineProperty(this, "toDate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
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
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return this.toString();
            }
        });
        this._value = string === null ? '' : String(string);
    }
    static of(string) {
        return new Stringable(string instanceof Stringable ? string.toString() : string);
    }
    static flushCache() {
        Stringable._camelCache = {};
        Stringable._snakeCache = {};
        Stringable._studlyCache = {};
    }
}
exports.Stringable = Stringable;
Object.defineProperty(Stringable, "_camelCache", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {}
});
Object.defineProperty(Stringable, "_snakeCache", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {}
});
Object.defineProperty(Stringable, "_studlyCache", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {}
});
exports.default = Stringable;
//# sourceMappingURL=Stringable.js.map