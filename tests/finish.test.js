'use strict';

const {Stringable} = require('../src/Stringable');

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

});
