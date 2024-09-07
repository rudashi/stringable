'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {convertCase} = require('../src/methods');
const {MB_CASE_UPPER, MB_CASE_LOWER, MB_CASE_FOLD, MB_CASE_TITLE} = require('../src/types/case');

it('converts the case of a string', () => {
    expect(Stringable.of('hello').convertCase(MB_CASE_UPPER).toString())
        .toBe('HELLO');

    expect(Stringable.of('WORLD').convertCase(MB_CASE_UPPER).toString())
        .toBe('WORLD');

    expect(Stringable.of('HeLLo').convertCase(MB_CASE_LOWER).toString())
        .toBe('hello');

    expect(Stringable.of('WoRLD').convertCase(MB_CASE_LOWER).toString())
        .toBe('world');

    expect(Stringable.of('HeLLo WoRLD').convertCase(MB_CASE_TITLE).toString())
        .toBe('Hello World');

    expect(Stringable.of('HeLLo').convertCase(MB_CASE_FOLD).toString())
        .toBe('hello');

    expect(Stringable.of('WoRLD').convertCase(MB_CASE_FOLD).toString())
        .toBe('world');

    expect(Stringable.of('üöä').convertCase(MB_CASE_UPPER).toString())
        .toBe('ÜÖÄ');

    expect(Stringable.of('ÜÖÄ').convertCase(MB_CASE_LOWER).toString())
        .toBe('üöä');

    expect(Str.convertCase('hello', MB_CASE_UPPER).toString())
        .toBe('HELLO');

    expect(convertCase('hello', MB_CASE_UPPER).toString())
        .toBe('HELLO');
});

it('returns error on unsupported mode', () => {
    expect(() => Str.convertCase('Hello', -1).toString())
        .toThrowError('Unsupported mode.');
});
