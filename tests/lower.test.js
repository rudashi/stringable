'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {lower} = require('../src/methods');

test.each([
    ['LARAVEL', 'laravel'],
    ['FOO BAR BAZ', 'foo bar baz'],
    ['foO bAr BaZ', 'foo bar baz'],
    ['ĄĘÓ ŻŹĆ ŚŃŁ', 'ąęó żźć śńł'],
])('.lower from %p returns %p',
    /**
     * @param {string} string
     * @param {string} expected
     */
    (string, expected) => {
        expect(Stringable.of(string).lower().toString())
            .toBe(expected);

        expect(Str.lower(string))
            .toBe(expected);

        expect(lower(string))
            .toBe(expected);
    }
);
