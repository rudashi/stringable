export type ExcerptOptions = {
    radius?: number,
    omission?: string,
};

export const after = (subject: string, search: string = ''): string => {

    if (search !== '' && subject.indexOf(search) >= 0) {
        return subject.substring(subject.indexOf(search) + search.length);
    }

    return subject;
}

export const afterLast = (subject: string, search: string = ''): string => {
    if (search !== '' && subject.indexOf(search) >= 0) {
        return subject.substring(subject.lastIndexOf(search) + search.length);
    }

    return subject;
}

export const ascii = (value: string): string => {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const before = (subject: string, search: string = ''): string => {

    if (search !== '' && subject.indexOf(search) >= 0) {
        return subject.substring(0, subject.indexOf(search));
    }

    return subject;
}

export const beforeLast = (subject: string, search: string = ''): string => {

    if (search !== '' && subject.indexOf(search) >= 0) {
        return subject.substring(0, subject.lastIndexOf(search));
    }

    return subject;
}

export const between = (subject: string, from: string = '', to: string = ''): string => {
    if (from === '' || to === '') {
        return subject;
    }

    return beforeLast(after(subject, from), to);
};

export const betweenFirst = (subject: string, from: string = '', to: string = ''): string => {

    if (from === '' || to === '') {
        return subject;
    }

    return before(after(subject, from), to);
}

export const charAt = (subject: string, index: number): string | false => {
    const pos = index > 0 ? subject.charAt(index) : subject.slice(index, subject.length + index + 1);

    return pos === '' ? false : pos;
}

export const contains = (haystack: string, needles: string | Array<string>, ignoreCase: boolean = false): boolean => {
    if (needles === '') {
        return false;
    }

    let values = Array.isArray(needles) ? needles : [needles];

    if (ignoreCase) {
        values = values.map(needle => needle.toLowerCase());
        haystack = lower(haystack);
    }

    return values.some(needle => haystack.includes(String(needle)));
}

export const containsAll = (haystack: string, needles: Array<string>, ignoreCase: boolean = false): boolean => {
    if (ignoreCase) {
        needles = needles.map(needle => needle.toLowerCase());
        haystack = lower(haystack);
    }

    return needles.every(needle => haystack.includes(needle));
}

export const endsWith = (haystack: string, needles: null | string | number | Array<string>): boolean => {
    if (needles === null || needles === '') {
        return false;
    }

    let values = Array.isArray(needles) ? needles : [needles];

    return values.some(needle => haystack.endsWith(String(needle)));
}

export const excerpt = (text: string, phrase: string = '', {radius = 100, omission = '...'}: ExcerptOptions = {radius: 100, omission: '...'}): string => {
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
}

export const explode = (text: string, delimiter: string, limit?: number): Array<string> => {
    const array = text.split(delimiter);

    if (limit !== undefined && array.length >= limit) {
        limit < 0
            ? array.splice(limit)
            : array.push(array.splice(limit - 1).join(delimiter));
    }

    return array;
}

export const finish = (value: string, cap: string): string => {
    const quoted = preg_quote(cap, '/');

    return value.replace(new RegExp('(?:' + quoted + ')+$', 'g'), '') + cap;
}

export const wrap = (value: string, before: string, after?: string): string => {
    return before + value + (after ?? before);
}

export const is = (pattern: string | Array<string | null>, value: string): boolean => {
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
}

export const isAscii = (value: string): boolean => {
    if (value === '') {
        return true;
    }

    return !(/[^\x09\x10\x13\x0A\x0D\x20-\x7E]/).test(value);
}

export const isJson = (value: string): boolean => {
    if (value === '') {
        return false;
    }

    try {
        JSON.parse(value);
    } catch (e) {
        return false;
    }

    return true;
}

export const isUuid = (value: string): boolean => {
    return new RegExp(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i).test(value);
}

export const isUlid = (value: string): boolean => {
    if (value.length !== 26) {
        return false;
    }

    if (!new RegExp(/^[a-zA-Z0-9]*$/i).test(value)) {
        return false;
    }

    return value[0] <= '7';
}

export const length = (value: string): number => {
    return value.length;
}

export const limit = (value: string, limit: number = 100, end: string = '...'): string => {
    if (limit >= value.length) {
        return value;
    }

    return value.slice(0, limit).trimEnd() + end;
}

export const lower = (value: string): string => {
    return value.toLocaleLowerCase();
}

export const words = (value: string, words: number = 100, end: string = '...'): string => {
    if (wordCount(value) <= words) {
        return value;
    }

    const match = value.match(new RegExp(`^\\s*(?:\\S+\\s*){1,${words}}`, 'u'));

    if (match) {
        return match[0].trimEnd() + end;
    }

    return value;
}

export const mask = (string: string, character: string, index: number, length: number | null = null): string => {
    if (character === '') {
        return string;
    }

    const segment = substr(string, index, length);

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
}

export const match = (pattern: RegExp | string, subject: string): string => {
    const matches = subject.match(new RegExp(pattern));

    if (matches) {
        return matches[1] ?? matches[0];
    }

    return '';
}

export const isMatch = (pattern: RegExp | string | Array<string | RegExp>, value: string): boolean => {
    pattern = Array.isArray(pattern) ? pattern : [pattern];

    for (const item of pattern) {
        if (new RegExp(item).test(value)) {
            return true;
        }
    }

    return false;
}

export const matchAll = (pattern: RegExp | string, subject: string): Array<string> => {
    const matches = subject.matchAll(new RegExp(pattern, 'g'));
    const result = [];

    for (const match of matches) {
        result.push(match[1] ?? match[0]);
    }

    return result;
}

export const padBoth = (value: string, length: number = 0, pad: string = ' '): string => {
    const half = Math.ceil((length - value.length) / 2) + value.length;

    return padLeft(padRight(value, half, pad), length, pad);
}

export const padLeft = (value: string, length: number = 0, pad: string = ' '): string => {
    if (length > value.length) {
        return value.padStart(length, pad);
    }

    return value;
}

export const padRight = (value: string, length: number = 0, pad: string = ' '): string => {
    if (length > value.length) {
        return value.padEnd(length, pad);
    }

    return value;
}

export const parseCallback = (callback: string, method: string | null = null): Array<string | null> => {
    return contains(callback, '@')
        ? explode(callback, '@', 2)
        : [callback, method];
}

export const repeat = (string: string, times: number): string => {
    return string.repeat(times)
}

export const replaceArray = (search: string, replace: Array<string>, subject: string): string => {
    if (typeof replace === 'object') {
        replace = Object.values(replace);
    }

    let segments = subject.split(search);
    let results = segments.shift() ?? '';

    segments.map(segment => results += (replace.shift() ?? search) + segment);

    return results;
}

export const replace = (search: string | Array<string>, replace: string | Array<string>, subject: string): string => {
    if (typeof search === 'string' && typeof replace === 'string') {
        return subject.replace(new RegExp(preg_quote(search), 'g'), replace);
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
}

export const replaceFirst = (search: string, replace: string, subject: string): string => {
    if (search === '') {
        return subject;
    }

    return subject.replace(search, replace);
}

export const replaceLast = (search: string, replace: string, subject: string): string => {
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
}

export const remove = (search: string | Array<string>, subject: string, caseSensitive: boolean = true): string => {
    search = search instanceof Array ? search : [search];

    search.map(e => {
        subject = subject.replace(new RegExp(e, caseSensitive ? 'g' : 'gi'), '');
    });

    return subject;
}

export const reverse = (value: string): string => {
    return [...value].reverse().join('');
}

export const start = (value: string, prefix: string): string => {
    if (! startsWith(value, prefix)) {
        return `${prefix}${value}`;
    }

    return value;
}

export const upper = (value: string): string => {
    return value.toLocaleUpperCase();
}

export const title = (value: string): string => {
    return value.toLocaleLowerCase().replace(/(^|\s)\S/g, t => t.toLocaleUpperCase());
}

export const headline = (value: string): string => {
    let parts = value.split(/\s|_/gu);

    if (parts.length === 1) {
        parts = parts[0].split(/(?=\p{Lu})/u).map(i => i.trim());
    }
    return parts.join('_').split(/[-_]/g).map(p =>
        p.toLocaleLowerCase().replace(/(^|\s)\S/g, t => t.toLocaleUpperCase())
    ).filter(Boolean).join(' ');
}

export const slug = (title: string, separator: string = '-', language: string | null = 'en', dictionary: Record<string, string> = {'@': 'at'}): string => {
    if (language) {
        title = ascii(title);
    }

    title = replace(['-', '_'], separator, title);

    Object.keys(dictionary).map((key: string) => {
        dictionary[key] = separator + dictionary[key] + separator;
    });

    title = replace(Object.keys(dictionary), Object.values(dictionary), title);
    title = lower(title);
    title = title.replace(new RegExp(/\s/, 'g'), separator)

    return title.replace(new RegExp('('+separator+')(?=\\1)', 'g'), '');
}

export const squish = (value: string): string => {
    return value.trim().replace(new RegExp(/\s+|\u3164+|\u1160+/, 'g'), ' ');
}

export const startsWith = (haystack: string, needles: null | string | number | Array<string>): boolean => {
    if (needles === null || needles === '') {
        return false;
    }

    const values = Array.isArray(needles) ? needles : [needles];

    return values.some(needle => haystack.startsWith(String(needle)));
}

export const stripTags = (string: string, allowedTags: string = ''): string => {
    const tags = /<\/?([a-z\d]*)\b[^>]*>?/gi;
    const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

    string = string.replace(new RegExp(commentsAndPhpTags, 'g'), '');

    while (true) {
        const before = string

        string = before.replace(tags, (g1: string, g2: string) => allowedTags.indexOf('<' + g2.toLowerCase() + '>') > -1 ? g1 : '')

        if (before === string) {
            break;
        }
    }

    return string;
}

export const substr = (value: string, start: number, length: number | null = null): string => {
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
            : value.slice(start, value.length + start + length)
    }

    if (length < 0) {
        return value.slice(start, length);
    }

    return value.slice(start, start + length);
}

export const substrCount = (haystack: string, needle: string, offset: number = 0, length: number = 0): number => {
    if (haystack.length === 0 || needle.length === 0 || haystack.indexOf(needle) === -1) {
        return 0;
    }

    haystack = haystack.substring(offset >= 0 ? offset : haystack.length + offset);
    haystack = haystack.substring(0, length > 0 ? length : haystack.length + length);

    let match = haystack.match(new RegExp(needle, 'g'));

    return match ? match.length : 0;
}

export const substrReplace = (string: string, replace: string, offset: number = 0, length: number | null = null): string => {
    length = length !== null ? length : string.length;
    offset = offset >= 0 ? offset : offset + string.length;
    length = length >= 0 ? length : length + string.length - offset;

    return [
        string.slice(0, offset),
        replace.substring(0, length),
        replace.slice(length),
        string.slice(offset + length)
    ].join('')
}

export const swap = (map: Record<string, string>, subject: string): string => {
    const keys = Object.keys(map)
        .map((key: string) => key.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'));

    return subject
        .split(RegExp(`(${keys.join('|')})`))
        .map((key: string) => map[key] || key)
        .join('');
}

export const trim = (value: string, characters?: string): string => {
    return characters
        ? rtrim(ltrim(value, characters), characters)
        : value.trim();
}

export const rtrim = (value: string, characters?: string): string => {
    return characters
        ? replaceLast(characters, '', value)
        : value.trimEnd();
}

export const ltrim = (value: string, characters?: string): string => {
    return characters
        ? replaceFirst(characters, '', value)
        : value.trimStart();
}

export const lcfirst = (string: string): string => {
    return string[0].toLocaleLowerCase() + string.slice(1);
}

export const ucfirst = (string: string): string => {
    return string[0].toLocaleUpperCase() + string.slice(1);
}

export const ucsplit = (string: string): Array<string> => {
    return string.split(/(?=\p{Lu})/u).map(i => i.trim());
}

export const wordCount = (value: string): number => {
    return value.trim().split(/\s+/).length;
}

export const preg_quote = (value: string, delimiter: string = ''): string => {
    return value.replace(
        new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + delimiter + '-]', 'g'),
        '\\$&'
    );
}
