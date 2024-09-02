'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {position} = require('../src/methods');

it('returns a position of the first occurrence of a given substring in the given string', () => {
    expect(Stringable.of('Hello, World!').position('W'))
        .toBe(7);

    expect(Stringable.of('This is a test string.').position('test'))
        .toBe(10);

    expect(Stringable.of('This is a test string, test again.').position('test', 15))
        .toBe(23);

    expect(Stringable.of('Hello, World!').position('Hello'))
        .toBe(0);

    expect(Stringable.of('Hello, World!').position('World!'))
        .toBe(7);

    expect(Stringable.of('This is a tEsT string.').position('tEsT'))
        .toBe(10);

    expect(Stringable.of('Hello, World!').position('W', -6))
        .toBe(7);

    expect(Stringable.of('Äpfel, Birnen und Kirschen').position('Kirschen', -10))
        .toBe(18);

    expect(Stringable.of('@%€/=!"][$').position('$'))
        .toBe(9);

    expect(Str.position('Hello, World!', 'W'))
        .toBe(7);

    expect(position('Hello, World!', 'W'))
        .toBe(7);
});

it('should return false when substring not exists in the given string', () => {
    expect(Stringable.of('Hello, World!').position('w'))
        .toBe(false);

    expect(Stringable.of('Hello, World!').position('X'))
        .toBe(false);

    expect(Stringable.of('').position('test'))
        .toBe(false);

    expect(Stringable.of('Hello, World!').position('X'))
        .toBe(false);
});
