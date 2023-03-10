'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {substrCount} = require('../src/methods');

it('returns the number of occurrences of a given value in the given string', () => {
    expect(Stringable.of('If you like ice cream, you will like snow cones.').substrCount('like'))
        .toBe(2);

    expect(Stringable.of('laravelPHPFramework').substrCount('a'))
        .toBe(3);

    expect(Stringable.of('laravelPHPFramework').substrCount('z'))
        .toBe(0);

    expect(Stringable.of('laravelPHPFramework').substrCount('l', 2))
        .toBe(1);

    expect(Stringable.of('laravelPHPFramework').substrCount('z', 2))
        .toBe(0);

    expect(Stringable.of('laravelPHPFramework').substrCount('k', -1))
        .toBe(1);

    expect(Stringable.of('laravelPHPFramework').substrCount('a', 1, 2))
        .toBe(1);

    expect(Stringable.of('laravelPHPFramework').substrCount('a', 1, 2))
        .toBe(1);

    expect(Stringable.of('laravelPHPFramework').substrCount('a', 1, -2))
        .toBe(3);

    expect(Stringable.of('laravelPHPFramework').substrCount('a', -10, -3))
        .toBe(1);

    expect(Str.substrCount('If you like ice cream, you will like snow cones.', 'like'))
        .toBe(2);

    expect(substrCount('If you like ice cream, you will like snow cones.', 'like'))
        .toBe(2);
});
