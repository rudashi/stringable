'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['This is my name', 'This', 'name', ' is my '],
    ['abc', 'a', 'c', 'b'],
    ['dddabc', 'a', 'c', 'b'],
    ['abcddd', 'a', 'c', 'b'],
    ['dddabcddd', 'a', 'c', 'b'],
])('.between from %p with (%p, %p) returns %p', (string, from, to, expected) => {
    expect(Stringable.of(string).between(from, to).toString())
        .toBe(expected);
});

test.each([
    ['This is my name', '', 'name'],
    ['abc', '', 'c'],
    ['abc', 'a', ''],
    ['abc', '', ''],
])('.between from %p with (%p, %p) returns base string', (expected, from, to) => {
    expect(Stringable.of(expected).between(from, to).toString())
        .toBe(expected);
});

it('It should returns everything before last value', () => {

    expect(Stringable.of('This is my name').between('That', 'name').toString())
        .toBe('This is my ');
});

it('It should returns everything after first value', () => {

    expect(Stringable.of('This is my name').between('This', 'surname').toString())
        .toBe(' is my name');
});