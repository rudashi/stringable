'use strict';

const {Stringable} = require('../src/Stringable');

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

});
