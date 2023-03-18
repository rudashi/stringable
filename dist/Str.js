"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Str = void 0;
const methods_1 = require("./methods");
const Stringable_1 = __importDefault(require("./Stringable"));
const crypto_1 = __importDefault(require("crypto"));
const ulid_1 = require("ulid");
const markdown_1 = require("./types/markdown");
const marked_1 = require("marked");
exports.Str = {
    randomStringFactory: null,
    _camelCache: {},
    _studlyCache: {},
    _snakeCache: {},
    of: (string) => {
        return Stringable_1.default.of(string);
    },
    after: methods_1.after,
    afterLast: methods_1.afterLast,
    ascii: methods_1.ascii,
    before: methods_1.before,
    beforeLast: methods_1.beforeLast,
    between: methods_1.between,
    betweenFirst: methods_1.betweenFirst,
    charAt: methods_1.charAt,
    camel: (value) => {
        if (typeof exports.Str._camelCache[value] !== 'undefined') {
            return exports.Str._camelCache[value];
        }
        return exports.Str._camelCache[value] = (0, methods_1.lcfirst)(exports.Str.studly(value));
    },
    contains: methods_1.contains,
    containsAll: methods_1.containsAll,
    endsWith: methods_1.endsWith,
    excerpt: methods_1.excerpt,
    explode: methods_1.explode,
    finish: methods_1.finish,
    wrap: methods_1.wrap,
    is: methods_1.is,
    isAscii: methods_1.isAscii,
    isJson: methods_1.isJson,
    isUuid: methods_1.isUuid,
    isUlid: methods_1.isUlid,
    kebab: (value) => {
        return exports.Str.snake(value, '-');
    },
    length: methods_1.length,
    limit: methods_1.limit,
    lower: methods_1.lower,
    words: methods_1.words,
    markdown: (string, options = markdown_1.defaultConfiguration) => {
        options = Object.assign(Object.assign({}, markdown_1.defaultConfiguration), options);
        if (options.html_input === 'STRIP') {
            string = (0, methods_1.stripTags)(string);
        }
        return marked_1.marked.parse(string, options).trimEnd();
    },
    inlineMarkdown: (string, options = markdown_1.defaultConfiguration) => {
        options = Object.assign(Object.assign({}, markdown_1.defaultConfiguration), options);
        if (options.html_input === 'STRIP') {
            string = (0, methods_1.stripTags)(string);
        }
        return marked_1.marked.parseInline(string, options);
    },
    mask: methods_1.mask,
    match: methods_1.match,
    isMatch: methods_1.isMatch,
    matchAll: methods_1.matchAll,
    padBoth: methods_1.padBoth,
    padLeft: methods_1.padLeft,
    padRight: methods_1.padRight,
    parseCallback: methods_1.parseCallback,
    random: (length = 16) => {
        var _a;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const size = characters.length;
        let string = '';
        return ((_a = exports.Str.randomStringFactory) !== null && _a !== void 0 ? _a : function (length) {
            for (let i = 0; i < length; i++) {
                string += characters.charAt(Math.random() * size);
            }
            return string;
        })(length);
    },
    createRandomStringsUsing: (callable) => {
        exports.Str.randomStringFactory = callable;
    },
    createRandomStringsUsingSequence: (sequence, whenMissing = null) => {
        let next = 0;
        let callable = whenMissing !== null && whenMissing !== void 0 ? whenMissing : function (length) {
            let factoryCache = exports.Str.randomStringFactory;
            exports.Str.randomStringFactory = null;
            let randomString = exports.Str.random(length);
            exports.Str.randomStringFactory = factoryCache;
            next++;
            return randomString;
        };
        exports.Str.createRandomStringsUsing(function (length) {
            if (sequence.hasOwnProperty(next)) {
                return sequence[next++];
            }
            return callable(length);
        });
    },
    createRandomStringsNormally: () => {
        exports.Str.randomStringFactory = null;
    },
    repeat: methods_1.repeat,
    replaceArray: methods_1.replaceArray,
    replace: methods_1.replace,
    replaceFirst: methods_1.replaceFirst,
    replaceLast: methods_1.replaceLast,
    remove: methods_1.remove,
    reverse: methods_1.reverse,
    start: methods_1.start,
    upper: methods_1.upper,
    title: methods_1.title,
    headline: methods_1.headline,
    slug: methods_1.slug,
    snake: (value, delimiter = '_') => {
        const key = value;
        if (typeof exports.Str._snakeCache[key] !== 'undefined' && typeof exports.Str._snakeCache[key][delimiter] !== 'undefined') {
            return exports.Str._snakeCache[key][delimiter];
        }
        if (!(/^[a-z]+$/).test(value)) {
            value = value
                .replace(new RegExp(/(^|\s)\S/, 'gu'), s => s.toLocaleUpperCase())
                .replace(new RegExp(/\s+/, 'gu'), '')
                .replace(new RegExp(/(.)(?=[A-Z])/, 'gu'), '$1' + delimiter)
                .toLocaleLowerCase();
        }
        if (typeof exports.Str._snakeCache[key] !== 'undefined') {
            exports.Str._snakeCache[key][delimiter] = value;
        }
        else {
            exports.Str._snakeCache[key] = { [delimiter]: value };
        }
        return value;
    },
    squish: methods_1.squish,
    startsWith: methods_1.startsWith,
    stripTags: methods_1.stripTags,
    studly: (value) => {
        const key = value;
        if (typeof exports.Str._studlyCache[key] !== 'undefined') {
            return exports.Str._studlyCache[key];
        }
        return exports.Str._studlyCache[key] = value.trim()
            .replace(/[_\-]/g, ' ')
            .replace(/\s+|\u3164+/g, ' ')
            .split(' ')
            .reduce((str, w) => str + w[0].toLocaleUpperCase() + w.slice(1), '');
    },
    substr: methods_1.substr,
    substrCount: methods_1.substrCount,
    substrReplace: methods_1.substrReplace,
    swap: methods_1.swap,
    trim: methods_1.trim,
    ltrim: methods_1.ltrim,
    rtrim: methods_1.rtrim,
    lcfirst: methods_1.lcfirst,
    ucfirst: methods_1.ucfirst,
    ucsplit: methods_1.ucsplit,
    wordCount: methods_1.wordCount,
    uuid: () => {
        return Stringable_1.default.of(crypto_1.default.randomUUID());
    },
    ulid: () => {
        return Stringable_1.default.of((0, ulid_1.ulid)());
    },
    preg_quote: methods_1.preg_quote,
    flushCache() {
        this._camelCache = {};
        this._snakeCache = {};
        this._studlyCache = {};
    },
};
exports.default = exports.Str;
//# sourceMappingURL=Str.js.map