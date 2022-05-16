'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['LARAVEL', 'laravel'],
    ['FOO BAR BAZ', 'foo bar baz'],
    ['foO bAr BaZ', 'foo bar baz'],
    ['ĄĘÓ ŻŹĆ ŚŃŁ', 'ąęó żźć śńł'],
])('.lower from %p returns %p', (string, expected) => {

    expect(Stringable.of(string).lower().toString())
        .toBe(expected);
});
