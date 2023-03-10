'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {wordCount} = require('../src/methods');

it('returns the number of words in string', () => {
    expect(Stringable.of('Hello, world!').wordCount())
        .toBe(2);

    expect(Stringable.of('Hi, this is my first contribution to the Laravel framework.').wordCount())
        .toBe(10);

    expect(Stringable.of('мама').wordCount())
        .toBe(1);

    expect(Stringable.of('мама мыла раму').wordCount())
        .toBe(3);

    expect(Stringable.of('мама').wordCount())
        .toBe(1);

    expect(Stringable.of('мама мыла раму').wordCount())
        .toBe(3);

    expect(Stringable.of('МАМА').wordCount())
        .toBe(1);

    expect(Stringable.of('МАМА МЫЛА РАМУ').wordCount())
        .toBe(3);

    expect(Stringable.of(' Taylor Otwell ').wordCount())
        .toBe(2);

    expect(Str.wordCount('Hello, world!'))
        .toBe(2);

    expect(wordCount('Hello, world!'))
        .toBe(2);
});