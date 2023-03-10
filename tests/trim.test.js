'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {trim} = require('../src/methods');

it('returns a string after trims', () => {
    expect(Stringable.of('  Laravel  ').trim().toString())
        .toBe('Laravel');

    expect(Stringable.of(' foo ').trim('').toString())
        .toBe('foo');

    expect(Stringable.of('/Laravel/').trim('/').toString())
        .toBe('Laravel');

    expect(Str.trim('  Laravel  '))
        .toBe('Laravel');

    expect(trim('  Laravel  '))
        .toBe('Laravel');
});