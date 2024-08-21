'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src');
const {between} = require('../src/methods');

test.each([
    ['This is my name', 'This', 'name', ' is my '],
    ['abc', 'a', 'c', 'b'],
    ['dddabc', 'a', 'c', 'b'],
    ['abcddd', 'a', 'c', 'b'],
    ['dddabcddd', 'a', 'c', 'b'],
])('.between from %p with (%p, %p) returns %p',
    /**
     * @param {string} string
     * @param {string} from
     * @param {string} to
     * @param {string} expected
     */
    (string, from, to, expected) => {
        expect(Stringable.of(string).between(from, to).toString())
            .toBe(expected);

        expect(Str.between(string, from, to))
            .toBe(expected);

        expect(between(string, from, to))
            .toBe(expected);
    }
);

test.each([
    ['This is my name', '', 'name'],
    ['abc', '', 'c'],
    ['abc', 'a', ''],
    ['abc', '', ''],
])('.between from %p with (%p, %p) returns base string',
    /**
     * @param {string} expected
     * @param {string} from
     * @param {string} to
     */
    (expected, from, to) => {
        expect(Stringable.of(expected).between(from, to).toString())
            .toBe(expected);

        expect(Str.between(expected, from, to))
            .toBe(expected);

        expect(between(expected, from, to))
            .toBe(expected);
    }
);

it('should returns everything before last value', () => {
    expect(Stringable.of('This is my name').between('That', 'name').toString())
        .toBe('This is my ');
});

it('should returns everything after first value', () => {
    expect(Stringable.of('This is my name').between('This', 'surname').toString())
        .toBe(' is my name');
});