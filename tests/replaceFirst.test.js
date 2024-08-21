'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {replaceFirst} = require('../src/methods');

test.each([
    ['the quick brown fox jumps over the lazy dog', 'the', 'a', 'a quick brown fox jumps over the lazy dog'],
    ['foobar foobar', 'bar', 'qux', 'fooqux foobar'],
    ['foo/bar? foo/bar?', 'bar?', 'qux?', 'foo/qux? foo/bar?'],
    ['foobar foobar', 'bar', '', 'foo foobar'],
    ['foobar foobar', 'xxx', 'yyy', 'foobar foobar'],
    ['foobar foobar', '', 'yyy', 'foobar foobar'],
    ['0', 0, '1', '1'],
    ['Jönköping Malmö', 'ö', 'xxx', 'Jxxxnköping Malmö'],
    ['Jönköping Malmö', '', 'yyy', 'Jönköping Malmö'],

])('.replaceFirst from %p search %p and replace with %p then returns %p',
    /**
     * @param {string} string
     * @param {string|number} search
     * @param {string} replace
     * @param {string} expected
     */
    (string, search, replace, expected) => {
        expect(Stringable.of(string).replaceFirst(search, replace).toString())
            .toBe(expected);

        expect(Str.replaceFirst(search, replace, string))
            .toBe(expected);

        expect(replaceFirst(search, replace, string))
            .toBe(expected);
    }
);
