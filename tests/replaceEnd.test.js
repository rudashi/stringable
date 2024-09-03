'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {replaceEnd} = require('../src/methods');

test.each([
    ['World', 'Laravel', 'Hello World', 'Hello Laravel'],
    ['Hello', 'Laravel', 'Hello World', 'Hello World'],
    ['bar', 'qux', 'foobar foobar', 'foobar fooqux'],
    ['bar?', 'qux?', 'foo/bar? foo/bar?', 'foo/bar? foo/qux?'],
    ['bar', '', 'foobar foobar', 'foobar foo'],
    ['xxx', 'yyy', 'foobar foobar', 'foobar foobar'],
    ['', 'yyy', 'foobar foobar', 'foobar foobar'],
    ['xxx', 'yyy', 'fooxxx foobar', 'fooxxx foobar'],
    ['ö', 'xxx', 'Malmö Jönköping', 'Malmö Jönköping'],
    ['öping', 'yyy', 'Malmö Jönköping', 'Malmö Jönkyyy'],
])('.replaceEnd from %p search %p and replace with %p then returns %p',
    /**
     * @param {string} search
     * @param {string} replace
     * @param {string} string
     * @param {string} expected
     */
    (search, replace, string, expected) => {
        expect(Stringable.of(string).replaceEnd(search, replace).toString())
            .toBe(expected);

        expect(Str.replaceEnd(search, replace, string))
            .toBe(expected);

        expect(replaceEnd(search, replace, string))
            .toBe(expected);
    }
);
