'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['[a] bc [d]', '[', ']', 'a'],
    ['abc', 'a', 'c', 'b'],
    ['dddabc', 'a', 'c', 'b'],
    ['abcddd', 'a', 'c', 'b'],
    ['dddabcddd', 'a', 'c', 'b'],
])('.betweenFirst from %p with (%p, %p) returns %p', (string, from, to, expected) => {
    expect(Stringable.of(string).betweenFirst(from, to).toString())
        .toBe(expected);
});

test.each([
    ['abc', '', 'c'],
    ['abc', 'a', ''],
    ['abc', '', ''],
])('.betweenFirst from %p with (%p, %p) returns base string', (expected, from, to) => {
    expect(Stringable.of(expected).between(from, to).toString())
        .toBe(expected);
});

it('should returns empty string if nothing is between two values', () => {

    expect(Stringable.of('foobarbar').betweenFirst('foo', 'bar').toString())
        .toBe('');
});