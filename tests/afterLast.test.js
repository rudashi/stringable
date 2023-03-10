'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {afterLast} = require('../src/methods');

test.each([
    ['App\\Http\\Controllers\\Controller', '\\', 'Controller'],
    ['yvette', 'yve', 'tte'],
    ['yvette', 't', 'e'],
    ['ééé yvette', 't', 'e'],
])('.afterLast from %p with (%p) returns %p', (string, search, expected) => {
    expect(Stringable.of(string).afterLast(search).toString())
        .toBe(expected);

    expect(Str.afterLast(string, search))
        .toBe(expected);

    expect(afterLast(string, search))
        .toBe(expected);
});

test.each([
    ['App\\Http\\Controllers\\Controller', 'fake'],
    ['yvette', 'xxx'],
    ['yvette', ''],
])('.afterLast from %p with (%p) returns base string', (expected, search) => {
    expect(Stringable.of(expected).afterLast(search).toString())
        .toBe(expected);

    expect(Str.afterLast(expected, search))
        .toBe(expected);

    expect(afterLast(expected, search))
        .toBe(expected);
});

it('should returns empty string if nothing is after', () => {
    const string = 'yvette';
    const after = 'tte';

    expect(Stringable.of(string).afterLast(after).toString())
        .toBe('');

    expect(Str.afterLast(string, after))
        .toBe('');

    expect(afterLast(string, after))
        .toBe('');
});
