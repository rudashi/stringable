'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {padLeft} = require('../src/methods');

it('returns the string with padded left side of a string', () => {
    expect(Stringable.of('James').padLeft(10, '-=').toString())
        .toBe('-=-=-James');

    expect(Stringable.of('James').padLeft(10).toString())
        .toBe('     James');

    expect(Stringable.of('Alien').padLeft(10, '-=').toString())
        .toBe('-=-=-Alien');

    expect(Stringable.of('Alien').padLeft(10).toString())
        .toBe('     Alien');

    expect(Stringable.of('❤MultiByte☆').padLeft(16).toString())
        .toBe('     ❤MultiByte☆');

    expect(Stringable.of('❤MultiByte☆').padLeft(16, '❤☆').toString())
        .toBe('❤☆❤☆❤❤MultiByte☆');

    expect(Str.padLeft('James', 10, '-='))
        .toBe('-=-=-James');

    expect(padLeft('James', 10, '-='))
        .toBe('-=-=-James');
});
