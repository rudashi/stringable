'use strict';

const {Stringable} = require('../src/Stringable');

it('returns an array matching the given pattern', () => {

    expect(Stringable.of('bar foo bar').matchAll(/bar/))
        .toStrictEqual(['bar', 'bar']);

    expect(Stringable.of('bar fun bar fly').matchAll('f(\\w*)'))
        .toStrictEqual(['un', 'ly']);

    expect(Stringable.of('bar fun bar fly').matchAll(/nothing/))
        .toStrictEqual([]);

});
