"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stringable = exports.str = void 0;
const Str_1 = __importDefault(require("./Str"));
const markdown_1 = require("./types/markdown");
const str = (string) => {
    if (string) {
        return Stringable.of(string);
    }
    return Str_1.default;
};
exports.str = str;
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
                this._value = Str_1.default.after(this._value, search);
                return this;
            }
        });
        Object.defineProperty(this, "afterLast", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search = '') => {
                this._value = Str_1.default.afterLast(this._value, search);
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
                this._value = Str_1.default.ascii(this._value);
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
        Object.defineProperty(this, "charAt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (index) => {
                return Str_1.default.charAt(this._value, index);
            }
        });
        Object.defineProperty(this, "before", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search = '') => {
                this._value = Str_1.default.before(this._value, search);
                return this;
            }
        });
        Object.defineProperty(this, "beforeLast", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search = '') => {
                this._value = Str_1.default.beforeLast(this._value, search);
                return this;
            }
        });
        Object.defineProperty(this, "between", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (from = '', to = '') => {
                this._value = Str_1.default.between(this._value, from, to);
                return this;
            }
        });
        Object.defineProperty(this, "betweenFirst", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (from = '', to = '') => {
                this._value = Str_1.default.betweenFirst(this._value, from, to);
                return this;
            }
        });
        Object.defineProperty(this, "camel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = Str_1.default.camel(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "contains", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles, ignoreCase = false) => {
                return Str_1.default.contains(this._value, needles, ignoreCase);
            }
        });
        Object.defineProperty(this, "containsAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles, ignoreCase = false) => {
                return Str_1.default.containsAll(this._value, needles, ignoreCase);
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
                return Str_1.default.endsWith(this._value, needles);
            }
        });
        Object.defineProperty(this, "excerpt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (phrase = '', { radius, omission } = { radius: 100, omission: '...' }) => {
                this._value = Str_1.default.excerpt(this._value, phrase, { radius, omission });
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
                return Str_1.default.explode(this._value, delimiter, limit);
            }
        });
        Object.defineProperty(this, "finish", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (cap) => {
                this._value = Str_1.default.finish(this._value, cap);
                return this;
            }
        });
        Object.defineProperty(this, "headline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = Str_1.default.headline(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "is", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern) => {
                return Str_1.default.is(pattern, this._value);
            }
        });
        Object.defineProperty(this, "isAscii", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return Str_1.default.isAscii(this._value);
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
                return Str_1.default.isJson(this._value);
            }
        });
        Object.defineProperty(this, "isUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return Str_1.default.isUrl(this._value);
            }
        });
        Object.defineProperty(this, "isUlid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return Str_1.default.isUlid(this._value);
            }
        });
        Object.defineProperty(this, "isUuid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return Str_1.default.isUuid(this._value);
            }
        });
        Object.defineProperty(this, "kebab", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = Str_1.default.kebab(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "lcfirst", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = Str_1.default.lcfirst(this._value);
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
                this._value = Str_1.default.limit(this._value, limit, end);
                return this;
            }
        });
        Object.defineProperty(this, "lower", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = Str_1.default.lower(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "ltrim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (characters) => {
                this._value = Str_1.default.ltrim(this._value, characters);
                return this;
            }
        });
        Object.defineProperty(this, "markdown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (options = markdown_1.defaultConfiguration) => {
                return Str_1.default.markdown(this._value, options);
            }
        });
        Object.defineProperty(this, "inlineMarkdown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (options = markdown_1.defaultConfiguration) => {
                return Str_1.default.inlineMarkdown(this._value, options);
            }
        });
        Object.defineProperty(this, "mask", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (character, index, length = null) => {
                this._value = Str_1.default.mask(this._value, character, index, length);
                return this;
            }
        });
        Object.defineProperty(this, "match", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern) => {
                return Str_1.default.match(pattern, this._value);
            }
        });
        Object.defineProperty(this, "isMatch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern) => {
                return Str_1.default.isMatch(pattern, this._value);
            }
        });
        Object.defineProperty(this, "matchAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (pattern) => {
                return Str_1.default.matchAll(pattern, this._value);
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
                this._value = Str_1.default.padBoth(this._value, length, pad);
                return this;
            }
        });
        Object.defineProperty(this, "padLeft", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (length = 0, pad = ' ') => {
                this._value = Str_1.default.padLeft(this._value, length, pad);
                return this;
            }
        });
        Object.defineProperty(this, "padRight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (length = 0, pad = ' ') => {
                this._value = Str_1.default.padRight(this._value, length, pad);
                return this;
            }
        });
        Object.defineProperty(this, "parseCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (method = null) => {
                return Str_1.default.parseCallback(this._value, method);
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
                this._value = Str_1.default.remove(search, this._value, caseSensitive);
                return this;
            }
        });
        Object.defineProperty(this, "repeat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (times) => {
                this._value = Str_1.default.repeat(this._value, times);
                return this;
            }
        });
        Object.defineProperty(this, "replace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search, replace) => {
                this._value = Str_1.default.replace(search, replace, this._value);
                return this;
            }
        });
        Object.defineProperty(this, "replaceArray", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search, replace) => {
                this._value = Str_1.default.replaceArray(search, replace, this._value);
                return this;
            }
        });
        Object.defineProperty(this, "replaceFirst", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search, replace) => {
                this._value = Str_1.default.replaceFirst(search, replace, this._value);
                return this;
            }
        });
        Object.defineProperty(this, "replaceLast", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (search, replace) => {
                this._value = Str_1.default.replaceLast(search, replace, this._value);
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
                this._value = Str_1.default.reverse(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "rtrim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (characters) => {
                this._value = Str_1.default.rtrim(this._value, characters);
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
                        result.push(Str_1.default.preg_quote(val, '/'));
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
            value: (separator = '-', language = 'en', dictionary = { '@': 'at' }) => {
                this._value = Str_1.default.slug(this._value, separator, language, dictionary);
                return this;
            }
        });
        Object.defineProperty(this, "snake", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (delimiter = '_') => {
                this._value = Str_1.default.snake(this._value, delimiter);
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
                this._value = Str_1.default.squish(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (prefix) => {
                this._value = Str_1.default.start(this._value, prefix);
                return this;
            }
        });
        Object.defineProperty(this, "startsWith", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needles) => {
                return Str_1.default.startsWith(this._value, needles);
            }
        });
        Object.defineProperty(this, "stripTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (allowedTags = '') => {
                this._value = Str_1.default.stripTags(this._value, allowedTags);
                return this;
            }
        });
        Object.defineProperty(this, "studly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = Str_1.default.studly(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "substr", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (start, length = null) => {
                this._value = Str_1.default.substr(this._value, start, length);
                return this;
            }
        });
        Object.defineProperty(this, "substrCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (needle, offset = 0, length = 0) => {
                return Str_1.default.substrCount(this._value, needle, offset, length);
            }
        });
        Object.defineProperty(this, "substrReplace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (replace, offset = 0, length = null) => {
                this._value = Str_1.default.substrReplace(this._value, replace, offset, length);
                return this;
            }
        });
        Object.defineProperty(this, "swap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (map) => {
                this._value = Str_1.default.swap(map, this._value);
                return this;
            }
        });
        Object.defineProperty(this, "tap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (callback) => {
                callback(Stringable.of(this._value));
                return this;
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
                this._value = Str_1.default.title(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "trim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (characters) => {
                this._value = Str_1.default.trim(this._value, characters);
                return this;
            }
        });
        Object.defineProperty(this, "ucfirst", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this._value = Str_1.default.ucfirst(this._value);
                return this;
            }
        });
        Object.defineProperty(this, "ucsplit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return Str_1.default.ucsplit(this._value);
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
                this._value = Str_1.default.upper(this._value);
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
                return Str_1.default.wordCount(this._value);
            }
        });
        Object.defineProperty(this, "words", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (words = 100, end = '...') => {
                this._value = Str_1.default.words(this._value, words, end);
                return this;
            }
        });
        Object.defineProperty(this, "wordWrap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (width = 75, breaks = "\n", cut = false) => {
                this._value = Str_1.default.wordWrap(this._value, width, breaks, cut);
                return this;
            }
        });
        Object.defineProperty(this, "wrap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (before, after) => {
                this._value = Str_1.default.wrap(this._value, before, after);
                return this;
            }
        });
        Object.defineProperty(this, "take", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (limit) => {
                this._value = Str_1.default.take(this._value, limit);
                return this;
            }
        });
        Object.defineProperty(this, "unwrap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (before, after) => {
                this._value = Str_1.default.unwrap(this._value, before, after);
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
        Str_1.default.flushCache();
    }
}
exports.Stringable = Stringable;
exports.default = Stringable;
//# sourceMappingURL=Stringable.js.map