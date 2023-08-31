"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.substrCount = exports.substr = exports.stripTags = exports.startsWith = exports.squish = exports.slug = exports.headline = exports.title = exports.upper = exports.start = exports.reverse = exports.remove = exports.replaceLast = exports.replaceFirst = exports.replace = exports.replaceArray = exports.repeat = exports.parseCallback = exports.padRight = exports.padLeft = exports.padBoth = exports.matchAll = exports.isMatch = exports.match = exports.mask = exports.words = exports.lower = exports.limit = exports.length = exports.isUlid = exports.isUuid = exports.isUrl = exports.isJson = exports.isAscii = exports.is = exports.wrap = exports.finish = exports.explode = exports.excerpt = exports.endsWith = exports.containsAll = exports.contains = exports.charAt = exports.betweenFirst = exports.between = exports.beforeLast = exports.before = exports.ascii = exports.afterLast = exports.after = void 0;
exports.preg_quote = exports.wordCount = exports.ucsplit = exports.ucfirst = exports.lcfirst = exports.ltrim = exports.rtrim = exports.trim = exports.swap = exports.substrReplace = void 0;
const after = (subject, search = '') => {
    if (search !== '' && subject.indexOf(search) >= 0) {
        return subject.substring(subject.indexOf(search) + search.length);
    }
    return subject;
};
exports.after = after;
const afterLast = (subject, search = '') => {
    if (search !== '' && subject.indexOf(search) >= 0) {
        return subject.substring(subject.lastIndexOf(search) + search.length);
    }
    return subject;
};
exports.afterLast = afterLast;
const ascii = (value) => {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
exports.ascii = ascii;
const before = (subject, search = '') => {
    if (search !== '' && subject.indexOf(search) >= 0) {
        return subject.substring(0, subject.indexOf(search));
    }
    return subject;
};
exports.before = before;
const beforeLast = (subject, search = '') => {
    if (search !== '' && subject.indexOf(search) >= 0) {
        return subject.substring(0, subject.lastIndexOf(search));
    }
    return subject;
};
exports.beforeLast = beforeLast;
const between = (subject, from = '', to = '') => {
    if (from === '' || to === '') {
        return subject;
    }
    return (0, exports.beforeLast)((0, exports.after)(subject, from), to);
};
exports.between = between;
const betweenFirst = (subject, from = '', to = '') => {
    if (from === '' || to === '') {
        return subject;
    }
    return (0, exports.before)((0, exports.after)(subject, from), to);
};
exports.betweenFirst = betweenFirst;
const charAt = (subject, index) => {
    const pos = index > 0 ? subject.charAt(index) : subject.slice(index, subject.length + index + 1);
    return pos === '' ? false : pos;
};
exports.charAt = charAt;
const contains = (haystack, needles, ignoreCase = false) => {
    if (needles === '') {
        return false;
    }
    let values = Array.isArray(needles) ? needles : [needles];
    if (ignoreCase) {
        values = values.map(needle => needle.toLowerCase());
        haystack = (0, exports.lower)(haystack);
    }
    return values.some(needle => haystack.includes(String(needle)));
};
exports.contains = contains;
const containsAll = (haystack, needles, ignoreCase = false) => {
    if (ignoreCase) {
        needles = needles.map(needle => needle.toLowerCase());
        haystack = (0, exports.lower)(haystack);
    }
    return needles.every(needle => haystack.includes(needle));
};
exports.containsAll = containsAll;
const endsWith = (haystack, needles) => {
    if (needles === null || needles === '') {
        return false;
    }
    let values = Array.isArray(needles) ? needles : [needles];
    return values.some(needle => haystack.endsWith(String(needle)));
};
exports.endsWith = endsWith;
const excerpt = (text, phrase = '', { radius = 100, omission = '...' } = { radius: 100, omission: '...' }) => {
    if (text === phrase) {
        return text;
    }
    const matches = phrase === null
        ? ['', '', '', text.substring(0, radius)]
        : text.match(new RegExp('^(.*?)(' + phrase + ')(.*)$', 'iu'));
    if (!matches) {
        return '';
    }
    let start = matches[1].trimStart();
    let end = matches[3].trimEnd();
    if (radius < start.length) {
        start = omission + start.substring(start.length - radius, start.length);
    }
    if (radius < end.length) {
        end = end.substring(0, radius) + omission;
    }
    return start + matches[2] + end;
};
exports.excerpt = excerpt;
const explode = (text, delimiter, limit) => {
    const array = text.split(delimiter);
    if (limit !== undefined && array.length >= limit) {
        limit < 0
            ? array.splice(limit)
            : array.push(array.splice(limit - 1).join(delimiter));
    }
    return array;
};
exports.explode = explode;
const finish = (value, cap) => {
    const quoted = (0, exports.preg_quote)(cap, '/');
    return value.replace(new RegExp('(?:' + quoted + ')+$', 'g'), '') + cap;
};
exports.finish = finish;
const wrap = (value, before, after) => {
    return before + value + (after !== null && after !== void 0 ? after : before);
};
exports.wrap = wrap;
const is = (pattern, value) => {
    pattern = pattern instanceof Array ? pattern : [pattern];
    if (pattern.length === 0) {
        return false;
    }
    return pattern.some(p => {
        if (p === value) {
            return true;
        }
        if (p === '' || p === null) {
            return false;
        }
        if (p.includes('*')) {
            return (new RegExp(p.replace(/\*/g, '.*'))).test(value);
        }
        return (new RegExp(p, 'u').test(value));
    });
};
exports.is = is;
const isAscii = (value) => {
    if (value === '') {
        return true;
    }
    return !(/[^\x09\x10\x13\x0A\x0D\x20-\x7E]/).test(value);
};
exports.isAscii = isAscii;
const isJson = (value) => {
    if (value === '') {
        return false;
    }
    try {
        JSON.parse(value);
    }
    catch (e) {
        return false;
    }
    return true;
};
exports.isJson = isJson;
const isUrl = (value) => {
    if (value === '') {
        return false;
    }
    if (value.indexOf('//') < 0) {
        return false;
    }
    value = value.substring(0, 2) === '//' ? 'https:' + value : value;
    if (value.indexOf('..') > -1) {
        return false;
    }
    if (new RegExp(/\/{3,}/).test(value)) {
        return false;
    }
    try {
        const url = new URL(value);
        if (['http:', 'https:', 'ftp:', 'ftps:', 'file:', 'git:'].indexOf(url.protocol) < 0) {
            return false;
        }
        return url.host[0] !== '.';
    }
    catch (_) {
        return false;
    }
};
exports.isUrl = isUrl;
const isUuid = (value) => {
    return new RegExp(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i).test(value);
};
exports.isUuid = isUuid;
const isUlid = (value) => {
    if (value.length !== 26) {
        return false;
    }
    if (!new RegExp(/^[a-zA-Z0-9]*$/i).test(value)) {
        return false;
    }
    return value[0] <= '7';
};
exports.isUlid = isUlid;
const length = (value) => {
    return value.length;
};
exports.length = length;
const limit = (value, limit = 100, end = '...') => {
    if (limit >= value.length) {
        return value;
    }
    return value.slice(0, limit).trimEnd() + end;
};
exports.limit = limit;
const lower = (value) => {
    return value.toLocaleLowerCase();
};
exports.lower = lower;
const words = (value, words = 100, end = '...') => {
    if ((0, exports.wordCount)(value) <= words) {
        return value;
    }
    const match = value.match(new RegExp(`^\\s*(?:\\S+\\s*){1,${words}}`, 'u'));
    if (match) {
        return match[0].trimEnd() + end;
    }
    return value;
};
exports.words = words;
const mask = (string, character, index, length = null) => {
    if (character === '') {
        return string;
    }
    const segment = (0, exports.substr)(string, index, length);
    if (segment === '') {
        return string;
    }
    const startIndex = index < 0
        ? index < -string.length ? 0 : string.length + index
        : index;
    const start = string.substring(0, startIndex);
    const mid = character[0].repeat(segment.length);
    const end = string.substring(startIndex + segment.length);
    return start + mid + (mid.length >= end.length ? '' : end);
};
exports.mask = mask;
const match = (pattern, subject) => {
    var _a;
    const matches = subject.match(new RegExp(pattern));
    if (matches) {
        return (_a = matches[1]) !== null && _a !== void 0 ? _a : matches[0];
    }
    return '';
};
exports.match = match;
const isMatch = (pattern, value) => {
    pattern = Array.isArray(pattern) ? pattern : [pattern];
    for (const item of pattern) {
        if (new RegExp(item).test(value)) {
            return true;
        }
    }
    return false;
};
exports.isMatch = isMatch;
const matchAll = (pattern, subject) => {
    var _a;
    const matches = subject.matchAll(new RegExp(pattern, 'g'));
    const result = [];
    for (const match of matches) {
        result.push((_a = match[1]) !== null && _a !== void 0 ? _a : match[0]);
    }
    return result;
};
exports.matchAll = matchAll;
const padBoth = (value, length = 0, pad = ' ') => {
    const half = Math.ceil((length - value.length) / 2) + value.length;
    return (0, exports.padLeft)((0, exports.padRight)(value, half, pad), length, pad);
};
exports.padBoth = padBoth;
const padLeft = (value, length = 0, pad = ' ') => {
    if (length > value.length) {
        return value.padStart(length, pad);
    }
    return value;
};
exports.padLeft = padLeft;
const padRight = (value, length = 0, pad = ' ') => {
    if (length > value.length) {
        return value.padEnd(length, pad);
    }
    return value;
};
exports.padRight = padRight;
const parseCallback = (callback, method = null) => {
    return (0, exports.contains)(callback, '@')
        ? (0, exports.explode)(callback, '@', 2)
        : [callback, method];
};
exports.parseCallback = parseCallback;
const repeat = (string, times) => {
    return string.repeat(times);
};
exports.repeat = repeat;
const replaceArray = (search, replace, subject) => {
    var _a;
    if (typeof replace === 'object') {
        replace = Object.values(replace);
    }
    let segments = subject.split(search);
    let results = (_a = segments.shift()) !== null && _a !== void 0 ? _a : '';
    segments.map(segment => { var _a; return results += ((_a = replace.shift()) !== null && _a !== void 0 ? _a : search) + segment; });
    return results;
};
exports.replaceArray = replaceArray;
const replace = (search, replace, subject) => {
    if (typeof search === 'string' && typeof replace === 'string') {
        return subject.replace(new RegExp((0, exports.preg_quote)(search), 'g'), replace);
    }
    let searchArray = search instanceof Array ? search : [search];
    let replaceArray = replace instanceof Array ? replace : new Array(searchArray.length).fill(replace);
    if (replaceArray.length < searchArray.length) {
        replaceArray.push(...new Array(searchArray.length - replaceArray.length).fill(''));
    }
    for (const index of searchArray.keys()) {
        subject = subject.replace(searchArray[index], replaceArray[index]);
    }
    return subject;
};
exports.replace = replace;
const replaceFirst = (search, replace, subject) => {
    if (search === '') {
        return subject;
    }
    return subject.replace(search, replace);
};
exports.replaceFirst = replaceFirst;
const replaceLast = (search, replace, subject) => {
    if (search === '') {
        return subject;
    }
    const position = subject.lastIndexOf(search);
    if (position >= 0) {
        return subject.substring(0, position)
            + replace
            + subject.substring(position + search.length, subject.length);
    }
    return subject;
};
exports.replaceLast = replaceLast;
const remove = (search, subject, caseSensitive = true) => {
    search = search instanceof Array ? search : [search];
    search.map(e => {
        subject = subject.replace(new RegExp(e, caseSensitive ? 'g' : 'gi'), '');
    });
    return subject;
};
exports.remove = remove;
const reverse = (value) => {
    return [...value].reverse().join('');
};
exports.reverse = reverse;
const start = (value, prefix) => {
    if (!(0, exports.startsWith)(value, prefix)) {
        return `${prefix}${value}`;
    }
    return value;
};
exports.start = start;
const upper = (value) => {
    return value.toLocaleUpperCase();
};
exports.upper = upper;
const title = (value) => {
    return value.toLocaleLowerCase().replace(/(^|\s)\S/g, t => t.toLocaleUpperCase());
};
exports.title = title;
const headline = (value) => {
    let parts = value.split(/\s|_/gu);
    if (parts.length === 1) {
        parts = parts[0].split(/(?=\p{Lu})/u).map(i => i.trim());
    }
    return parts.join('_').split(/[-_]/g).map(p => p.toLocaleLowerCase().replace(/(^|\s)\S/g, t => t.toLocaleUpperCase())).filter(Boolean).join(' ');
};
exports.headline = headline;
const slug = (title, separator = '-', language = 'en', dictionary = { '@': 'at' }) => {
    if (language) {
        title = (0, exports.ascii)(title);
    }
    title = (0, exports.replace)(['-', '_'], separator, title);
    Object.keys(dictionary).map((key) => {
        dictionary[key] = separator + dictionary[key] + separator;
    });
    title = (0, exports.replace)(Object.keys(dictionary), Object.values(dictionary), title);
    title = (0, exports.lower)(title);
    title = title.replace(new RegExp(/\s/, 'g'), separator);
    return title.replace(new RegExp('(' + separator + ')(?=\\1)', 'g'), '');
};
exports.slug = slug;
const squish = (value) => {
    return value.trim().replace(new RegExp(/\s+|\u3164+|\u1160+/, 'g'), ' ');
};
exports.squish = squish;
const startsWith = (haystack, needles) => {
    if (needles === null || needles === '') {
        return false;
    }
    const values = Array.isArray(needles) ? needles : [needles];
    return values.some(needle => haystack.startsWith(String(needle)));
};
exports.startsWith = startsWith;
const stripTags = (string, allowedTags = '') => {
    const tags = /<\/?([a-z\d]*)\b[^>]*>?/gi;
    const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    string = string.replace(new RegExp(commentsAndPhpTags, 'g'), '');
    while (true) {
        const before = string;
        string = before.replace(tags, (g1, g2) => allowedTags.indexOf('<' + g2.toLowerCase() + '>') > -1 ? g1 : '');
        if (before === string) {
            break;
        }
    }
    return string;
};
exports.stripTags = stripTags;
const substr = (value, start, length = null) => {
    if (length === null) {
        if (start < 0) {
            return value.slice(start);
        }
        return value.slice(start, value.length);
    }
    if (!start && length < 0) {
        return value.slice(length);
    }
    if (start < 0 && length > 0) {
        return start <= -value.length
            ? value.substring(0, length)
            : value.slice(start, value.length + start + length);
    }
    if (length < 0) {
        return value.slice(start, length);
    }
    return value.slice(start, start + length);
};
exports.substr = substr;
const substrCount = (haystack, needle, offset = 0, length = 0) => {
    if (haystack.length === 0 || needle.length === 0 || haystack.indexOf(needle) === -1) {
        return 0;
    }
    haystack = haystack.substring(offset >= 0 ? offset : haystack.length + offset);
    haystack = haystack.substring(0, length > 0 ? length : haystack.length + length);
    let match = haystack.match(new RegExp(needle, 'g'));
    return match ? match.length : 0;
};
exports.substrCount = substrCount;
const substrReplace = (string, replace, offset = 0, length = null) => {
    length = length !== null ? length : string.length;
    offset = offset >= 0 ? offset : offset + string.length;
    length = length >= 0 ? length : length + string.length - offset;
    return [
        string.slice(0, offset),
        replace.substring(0, length),
        replace.slice(length),
        string.slice(offset + length)
    ].join('');
};
exports.substrReplace = substrReplace;
const swap = (map, subject) => {
    const keys = Object.keys(map)
        .map((key) => key.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'));
    return subject
        .split(RegExp(`(${keys.join('|')})`))
        .map((key) => map[key] || key)
        .join('');
};
exports.swap = swap;
const trim = (value, characters) => {
    return characters
        ? (0, exports.rtrim)((0, exports.ltrim)(value, characters), characters)
        : value.trim();
};
exports.trim = trim;
const rtrim = (value, characters) => {
    return characters
        ? (0, exports.replaceLast)(characters, '', value)
        : value.trimEnd();
};
exports.rtrim = rtrim;
const ltrim = (value, characters) => {
    return characters
        ? (0, exports.replaceFirst)(characters, '', value)
        : value.trimStart();
};
exports.ltrim = ltrim;
const lcfirst = (string) => {
    return string[0].toLocaleLowerCase() + string.slice(1);
};
exports.lcfirst = lcfirst;
const ucfirst = (string) => {
    return string[0].toLocaleUpperCase() + string.slice(1);
};
exports.ucfirst = ucfirst;
const ucsplit = (string) => {
    return string.split(/(?=\p{Lu})/u).map(i => i.trim());
};
exports.ucsplit = ucsplit;
const wordCount = (value) => {
    return value.trim().split(/\s+/).length;
};
exports.wordCount = wordCount;
const preg_quote = (value, delimiter = '') => {
    return value.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + delimiter + '-]', 'g'), '\\$&');
};
exports.preg_quote = preg_quote;
//# sourceMappingURL=methods.js.map