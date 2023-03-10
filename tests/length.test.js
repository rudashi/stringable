'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {length} = require('../src/methods');

it('returns the length of the given string', () => {
    expect(Stringable.of('Laravel').length())
        .toBe(7);

    expect(Stringable.of('foo bar baz').length())
        .toBe(11);

    expect(Str.length('Laravel'))
        .toBe(7);

    expect(length('Laravel'))
        .toBe(7);
});
