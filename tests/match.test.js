'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {match} = require('../src/methods');

it('returns a string matching the given pattern', () => {
    expect(Stringable.of('foo bar').match(/bar/))
        .toBe('bar');

    expect(Stringable.of('foo bar').match('foo (.*)'))
        .toBe('bar');

    expect(Stringable.of('foo bar').match(/nothing/))
        .toBe('');

    expect(Str.match(/bar/, 'foo bar'))
        .toBe('bar');

    expect(match(/bar/, 'foo bar'))
        .toBe('bar');
});
