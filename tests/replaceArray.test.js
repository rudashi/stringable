'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {replaceArray} = require('../src/methods');

test.each([
    ['The event will take place between ? and ?', '?', ['8:30', '9:00'], 'The event will take place between 8:30 and 9:00'],
    ['?/?/?', '?', ['foo', 'bar', 'baz'], 'foo/bar/baz'],
    ['?/?/?/?', '?', ['foo', 'bar', 'baz'], 'foo/bar/baz/?'],
    ['?/?', '?', ['foo', 'bar', 'baz'], 'foo/bar'],
    ['?/?/?', 'x', ['foo', 'bar', 'baz'], '?/?/?'],
    ['?/?/?', '?', ['foo?', 'bar', 'baz'], 'foo?/bar/baz'],
    ['?/?', '?', ['foo', 'bar'], 'foo/bar'],
    ['?/?', '?', {'x': 'foo', 'y': 'bar'}, 'foo/bar'],
])('.replaceArray from %p search %p and replace with %p then returns %p', /**
 * @param {string} string
 * @param {string} search
 * @param {Array<string>|Object} replace
 * @param {string} expected
 */
(string, search, replace, expected) => {
    expect(Stringable.of(string).replaceArray(search, replace).toString())
        .toBe(expected);

    expect(Str.replaceArray(search, replace, string))
        .toBe(expected);

    expect(replaceArray(search, replace, string))
        .toBe(expected);
});