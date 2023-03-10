'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {explode} = require('../src/methods');

it('returns the array containing each section of the split string', () => {
    expect(Stringable.of('foo bar baz').explode(' '))
        .toStrictEqual(['foo', 'bar', 'baz']);

    expect(Stringable.of('one|two|three|four').explode('|', 2))
        .toStrictEqual(['one', 'two|three|four']);

    expect(Stringable.of('one|two|three|four').explode('|', -1))
        .toStrictEqual(['one', 'two', 'three']);

    expect(Stringable.of('one|two|three|four').explode('|', -2))
        .toStrictEqual(['one', 'two']);

    expect(Stringable.of('one|two|three|four').explode('|', -4))
        .toStrictEqual([]);

    expect(Str.explode('foo bar baz', ' '))
        .toStrictEqual(['foo', 'bar', 'baz']);

    expect(explode('foo bar baz', ' '))
        .toStrictEqual(['foo', 'bar', 'baz']);
});
