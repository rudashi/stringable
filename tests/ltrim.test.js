'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {ltrim} = require('../src/methods');

it('returns a string after trims the left side', () => {
    expect(Stringable.of('  Laravel  ').ltrim().toString())
        .toBe('Laravel  ');

    expect(Stringable.of(' foo ').ltrim('').toString())
        .toBe('foo ');

    expect(Stringable.of('/Laravel/').ltrim('/').toString())
        .toBe('Laravel/');

    expect(Str.ltrim('  Laravel  '))
        .toBe('Laravel  ');

    expect(ltrim('  Laravel  '))
        .toBe('Laravel  ');
});