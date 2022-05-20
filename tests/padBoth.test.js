'use strict';

const {Stringable} = require('../src/Stringable');

it('returns the string with padded both sides of a string', () => {

    expect(Stringable.of('James').padBoth(10, '_').toString())
        .toBe('__James___');

    expect(Stringable.of('James').padBoth(10).toString())
        .toBe('  James   ');

    expect(Stringable.of('Alien').padBoth(10, '_').toString())
        .toBe('__Alien___');

    expect(Stringable.of('Alien').padBoth(10).toString())
        .toBe('  Alien   ');

    expect(Stringable.of('❤MultiByte☆').padBoth(16).toString())
        .toBe('  ❤MultiByte☆   ');

});
