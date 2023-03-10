'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {matchAll} = require('../src/methods');

it('returns an array matching the given pattern', () => {
    expect(Stringable.of('bar foo bar').matchAll(/bar/))
        .toStrictEqual(['bar', 'bar']);

    expect(Stringable.of('bar fun bar fly').matchAll('f(\\w*)'))
        .toStrictEqual(['un', 'ly']);

    expect(Stringable.of('bar fun bar fly').matchAll(/nothing/))
        .toStrictEqual([]);

    expect(Str.matchAll(/bar/, 'bar foo bar'))
        .toStrictEqual(['bar', 'bar']);

    expect(matchAll(/bar/, 'bar foo bar'))
        .toStrictEqual(['bar', 'bar']);
});
