'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {remove} = require('../src/methods');

it('returns a string with the given value removed', () => {
    expect(Stringable.of('Foobar').remove('o').toString())
        .toBe('Fbar');

    expect(Stringable.of('Foobar').remove('bar').toString())
        .toBe('Foo');

    expect(Stringable.of('Foobar').remove('F').toString())
        .toBe('oobar');

    expect(Stringable.of('Foobar').remove('f').toString())
        .toBe('Foobar');

    expect(Stringable.of('Foobar').remove('f', false).toString())
        .toBe('oobar');

    expect(Str.remove('o', 'Foobar'))
        .toBe('Fbar');

    expect(remove('o', 'Foobar'))
        .toBe('Fbar');
});

it('returns a string with an array of values removed', () => {
    expect(Stringable.of('Foobar').remove(['o', 'a']).toString())
        .toBe('Fbr');

    expect(Stringable.of('Foobar').remove(['f', 'b']).toString())
        .toBe('Fooar');

    expect(Stringable.of('Foobar').remove(['f', 'b'], false).toString())
        .toBe('ooar');

    expect(Stringable.of('Foobar').remove(['f', '|']).toString())
        .toBe('Foobar');

    expect(Str.remove(['o', 'a'], 'Foobar'))
        .toBe('Fbr');

    expect(remove(['o', 'a'], 'Foobar'))
        .toBe('Fbr');
});
