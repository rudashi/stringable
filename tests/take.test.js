'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {take} = require('../src/methods');

it('returns a specified number of characters from the beginning of a string', () => {
    expect(Stringable.of('Build something amazing!').take(5).toString())
        .toBe('Build');

    expect(Stringable.of('abcdef').take(2).toString())
        .toBe('ab');

    expect(Stringable.of('abcdef').take(-2).toString())
        .toBe('ef');

    expect(Str.take('abcdef', 2))
        .toBe('ab');

    expect(take('abcdef', 2))
        .toBe('ab');
});