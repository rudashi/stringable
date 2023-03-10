'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {finish} = require('../src/methods');

it('returns the string with appended given value if not exists', () => {
    expect(Stringable.of('this/string').finish('/').toString())
        .toBe('this/string/');

    expect(Stringable.of('this/string/').finish('/').toString())
        .toBe('this/string/');

    expect(Stringable.of('ab').finish('bc').toString())
        .toBe('abbc');

    expect(Stringable.of('abbcbc').finish('bc').toString())
        .toBe('abbc');

    expect(Stringable.of('abcbbcbc').finish('bc').toString())
        .toBe('abcbbc');

    expect(Str.finish('this/string', '/'))
        .toBe('this/string/');

    expect(finish('this/string', '/'))
        .toBe('this/string/');
});
