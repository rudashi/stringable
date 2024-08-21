'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {upper} = require('../src/methods');

test.each([
    ['laravel', 'LARAVEL'],
    ['foo bar baz', 'FOO BAR BAZ'],
    ['foO bAr BaZ', 'FOO BAR BAZ'],
    ['ąęó żźć śńł', 'ĄĘÓ ŻŹĆ ŚŃŁ'],
])('.upper from %p returns %p',
    /**
     * @param {string} string
     * @param {string} expected
     */
    (string, expected) => {
        expect(Stringable.of(string).upper().toString())
            .toBe(expected);

        expect(Str.upper(string))
            .toBe(expected);

        expect(upper(string))
            .toBe(expected);
    }
);
