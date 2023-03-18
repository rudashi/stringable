'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {isMatch} = require('../src/methods');

it('determines if string matches a given pattern', () => {
    expect(Stringable.of('Hello, Laravel!').isMatch(/.*,.*!/))
        .toBe(true);

    expect(Stringable.of('Hello, Laravel!').isMatch(/^.*$(.*)/))
        .toBe(true);

    expect(Stringable.of('Hello, Laravel!').isMatch(/laravel/i))
        .toBe(true);

    expect(Stringable.of('Hello, Laravel!').isMatch(/^(.*(.*(.*)))/))
        .toBe(true);

    expect(Stringable.of('Hello, Laravel!').isMatch(/H.o/))
        .toBe(false);

    expect(Stringable.of('Hello, Laravel!').isMatch(/^laravel!/i))
        .toBe(false);

    expect(Stringable.of('Hello, Laravel!').isMatch(/laravel!(.*)/))
        .toBe(false);

    expect(Stringable.of('Hello, Laravel!').isMatch(/^[a-zA-Z,!]+$/))
        .toBe(false);

    expect(Str.isMatch(/.*,.*!/, 'Hello, Laravel!'))
        .toBe(true);

    expect(isMatch(/.*,.*!/, 'Hello, Laravel!'))
        .toBe(true);
});

it('determines if string matches a given string pattern', () => {
    expect(Stringable.of('Hello, Laravel!').isMatch('.*,.*!'))
        .toBe(true);
});

it('determines if string matches an array of patterns', () => {
    expect(Stringable.of('Hello, Laravel!').isMatch([/.*,.*!/, /H.o/]))
        .toBe(true);

    expect(Stringable.of('Hello, Laravel!').isMatch([/^laravel!/i, /^.*$(.*)/]))
        .toBe(true);

    expect(Stringable.of('Hello, Laravel!').isMatch([/laravel/i, /laravel!(.*)/]))
        .toBe(true);

    expect(Stringable.of('Hello, Laravel!').isMatch([/^[a-zA-Z,!]+$/, /^(.*(.*(.*)))/]))
        .toBe(true);
});