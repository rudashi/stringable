'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['laravel', 'LARAVEL'],
    ['foo bar baz', 'FOO BAR BAZ'],
    ['foO bAr BaZ', 'FOO BAR BAZ'],
    ['ąęó żźć śńł', 'ĄĘÓ ŻŹĆ ŚŃŁ'],
])('.upper from %p returns %p', (string, expected) => {

    expect(Stringable.of(string).upper().toString())
        .toBe(expected);
});
