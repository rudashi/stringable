'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {beforeLast} = require('../src/methods');

test.each([
    ['This is my name', 'is', 'This '],
    ['yvette', 'tte', 'yve'],
    ['yvette', 't', 'yvet'],
    ['ééé yvette', 'yve', 'ééé '],
])('.beforeLast from %p with (%p) returns %p',
    /**
     * @param {string} string
     * @param {string} search
     * @param {string} expected
     */
    (string, search, expected) => {
        expect(Stringable.of(string).beforeLast(search).toString())
            .toBe(expected);

        expect(Str.beforeLast(string, search))
            .toBe(expected);

        expect(beforeLast(string, search))
            .toBe(expected);
    }
);

test.each([
    ['This is my name', 'fake'],
    ['yvette', 'xxx'],
    ['yvette', ''],
])('.beforeLast from %p with (%p) returns base string',
    /**
     * @param {string} expected
     * @param {string} search
     */
    (expected, search) => {
        expect(Stringable.of(expected).beforeLast(search).toString())
            .toBe(expected);

        expect(Str.beforeLast(expected, search))
            .toBe(expected);

        expect(beforeLast(expected, search))
            .toBe(expected);
    }
);

it('should returns empty string if nothing is before', () => {
    expect(Stringable.of('yvette').beforeLast('yve').toString())
        .toBe('');
});
