'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {charAt} = require('../src/methods');

it('returns a character at the specified index', () => {
    expect(Stringable.of('Привет, мир!').charAt(1))
        .toBe('р');

    expect(Stringable.of('「こんにちは世界」').charAt(4))
        .toBe('ち');

    expect(Stringable.of('Привет, world!').charAt(8))
        .toBe('w');

    expect(Stringable.of('「こんにちは世界」').charAt(-2))
        .toBe('界');

    expect(Stringable.of('「こんにちは世界」').charAt(-200))
        .toBe(false);

    expect(Stringable.of('Привет, мир!').charAt(100))
        .toBe(false);

    expect(Str.charAt('Привет, мир!', 1))
        .toBe('р');

    expect(charAt('Привет, мир!', 1))
        .toBe('р');
});