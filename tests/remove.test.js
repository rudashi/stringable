'use strict';

const {Stringable} = require('../src/Stringable');

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

});
