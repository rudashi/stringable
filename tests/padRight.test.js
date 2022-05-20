'use strict';

const {Stringable} = require('../src/Stringable');

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

});
