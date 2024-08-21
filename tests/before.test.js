'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {before} = require('../src/methods');

test.each([
    ['This is my name', 'my name', 'This is '],
    ['hannah', 'nah', 'han'],
    ['hannah', 'n', 'ha'],
    ['ééé hannah', 'han', 'ééé '],
])('.before from %p with (%p) returns %p',
    /**
     * @param {string} string
     * @param {string} search
     * @param {string} expected
     */
    (string, search, expected) => {
        expect(Stringable.of(string).before(search).toString())
            .toBe(expected);

        expect(Str.before(string, search))
            .toBe(expected);

        expect(before(string, search))
            .toBe(expected);
    }
);

test.each([
    ['This is my name', 'fake'],
    ['hannah', 'xxx'],
    ['hannah', ''],
])('.before from %p with (%p) returns base string',
    /**
     * @param {string} expected
     * @param {string} search
     */
    (expected, search) => {
        expect(Stringable.of(expected).before(search).toString())
            .toBe(expected);

        expect(Str.before(expected, search))
            .toBe(expected);

        expect(before(expected, search))
            .toBe(expected);
    }
);
