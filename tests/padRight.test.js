'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {padRight} = require('../src/methods');

it('returns the string with padded right side of a string', () => {
    expect(Stringable.of('James').padRight(10, '-').toString())
        .toBe('James-----');

    expect(Stringable.of('James').padRight(10).toString())
        .toBe('James     ');

    expect(Stringable.of('Alien').padRight(10, '-').toString())
        .toBe('Alien-----');

    expect(Stringable.of('Alien').padRight(10).toString())
        .toBe('Alien     ');

    expect(Stringable.of('❤MultiByte☆').padRight(16).toString())
        .toBe('❤MultiByte☆     ');

    expect(Stringable.of('❤MultiByte☆').padRight(16, '❤☆').toString())
        .toBe('❤MultiByte☆❤☆❤☆❤');

    expect(Str.padRight('James', 10, '-'))
        .toBe('James-----');

    expect(padRight('James', 10, '-'))
        .toBe('James-----');
});
