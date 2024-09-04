'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {replaceStart} = require('../src/methods');

test.each([
    ['Hello', 'Laravel', 'Hello World', 'Laravel World'],
    ['World', 'Laravel', 'Hello World', 'Hello World'],
    ['bar', 'qux', 'foobar foobar', 'foobar foobar'],
    ['bar?', 'qux?', 'foo/bar? foo/bar?', 'foo/bar? foo/bar?'],
    ['foo', 'qux', 'foobar foobar', 'quxbar foobar'],
    ['foo/bar?', 'qux?', 'foo/bar? foo/bar?', 'qux? foo/bar?'],
    ['foo', '', 'foobar foobar', 'bar foobar'],
    [0, '1', '0', '1'],
    ['Jö', 'xxx', 'Jönköping Malmö', 'xxxnköping Malmö'],
    ['', 'yyy', 'Jönköping Malmö', 'Jönköping Malmö'],
])('.replaceEnd from %p search %p and replace with %p then returns %p',
    /**
     * @param {string} search
     * @param {string} replace
     * @param {string} subject
     * @param {string} expected
     */
    (search, replace, subject, expected) => {
        expect(Stringable.of(subject).replaceStart(search, replace).toString())
            .toBe(expected);

        expect(Str.replaceStart(search, replace, subject))
            .toBe(expected);

        expect(replaceStart(search, replace, subject))
            .toBe(expected);
    }
);
