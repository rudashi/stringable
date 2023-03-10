'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {substrReplace} = require('../src/methods');

it('returns a string with replaced text within a portion of a string', () => {
    expect(Stringable.of('1300').substrReplace(':', 2).toString())
        .toBe('13:');

    expect(Stringable.of('The Framework').substrReplace(' Laravel', 3, 0).toString())
        .toBe('The Laravel Framework');

    expect(Stringable.of('1200').substrReplace(':', 2, 0).toString())
        .toBe('12:00');

    expect(Stringable.of('The Framework').substrReplace('Laravel ', 4, 0).toString())
        .toBe('The Laravel Framework');

    expect(Stringable.of('Laravel Framework').substrReplace('– The PHP Framework for Web Artisans', 8).toString())
        .toBe('Laravel – The PHP Framework for Web Artisans');

    expect(Stringable.of('ABCDEFGH:/MNRPQR/').substrReplace('bob', -7, -1).toString())
        .toBe('ABCDEFGH:/bob/');

    expect(Str.substrReplace('1300', ':', 2))
        .toBe('13:');

    expect(substrReplace('1300', ':', 2))
        .toBe('13:');
});