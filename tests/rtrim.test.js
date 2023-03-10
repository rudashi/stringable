'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {rtrim} = require('../src/methods');

it('returns a string after trims the right side', () => {
    expect(Stringable.of('  Laravel  ').rtrim().toString())
        .toBe('  Laravel');

    expect(Stringable.of(' foo ').rtrim('').toString())
        .toBe(' foo');

    expect(Stringable.of('/Laravel/').rtrim('/').toString())
        .toBe('/Laravel');

    expect(Str.rtrim('  Laravel  '))
        .toBe('  Laravel');

    expect(rtrim('  Laravel  '))
        .toBe('  Laravel');
});