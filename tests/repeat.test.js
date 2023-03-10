'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {repeat} = require('../src/methods');

it('returns a repeated N times string', () => {
    expect(Stringable.of('a').repeat(5).toString())
        .toBe('aaaaa');

    expect(Stringable.of('').repeat(5).toString())
        .toBe('');

    expect(Stringable.of('a').repeat(0).toString())
        .toBe('');

    expect(Stringable.of('a').repeat(3.14).toString())
        .toBe('aaa');

    expect(Str.repeat('a', 5))
        .toBe('aaaaa');

    expect(repeat('a', 5))
        .toBe('aaaaa');
});