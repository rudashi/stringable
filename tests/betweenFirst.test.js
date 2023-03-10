'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src');
const {betweenFirst} = require('../src/methods');

test.each([
    ['[a] bc [d]', '[', ']', 'a'],
    ['abc', 'a', 'c', 'b'],
    ['dddabc', 'a', 'c', 'b'],
    ['abcddd', 'a', 'c', 'b'],
    ['dddabcddd', 'a', 'c', 'b'],
])('.betweenFirst from %p with (%p, %p) returns %p', (string, from, to, expected) => {
    expect(Stringable.of(string).betweenFirst(from, to).toString())
        .toBe(expected);

    expect(Str.betweenFirst(string, from, to))
        .toBe(expected);

    expect(betweenFirst(string, from, to))
        .toBe(expected);
});

test.each([
    ['abc', '', 'c'],
    ['abc', 'a', ''],
    ['abc', '', ''],
])('.betweenFirst from %p with (%p, %p) returns base string', (expected, from, to) => {
    expect(Stringable.of(expected).between(from, to).toString())
        .toBe(expected);

    expect(Str.betweenFirst(expected, from, to))
        .toBe(expected);

    expect(betweenFirst(expected, from, to))
        .toBe(expected);
});

it('should returns empty string if nothing is between two values', () => {
    const string = 'foobarbar';
    const from = 'foo'
    const to = 'bar'

    expect(Stringable.of(string).betweenFirst(from, to).toString())
        .toBe('');

    expect(Str.betweenFirst(string, from, to))
        .toBe('');

    expect(betweenFirst(string, from, to))
        .toBe('');
});