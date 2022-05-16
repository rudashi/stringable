'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['App\\Http\\Controllers\\Controller', '\\', 'Controller'],
    ['yvette', 'yve', 'tte'],
    ['yvette', 't', 'e'],
    ['ééé yvette', 't', 'e'],
])('.afterLast from %p with (%p) returns %p', (string, search, expected) => {
    expect(Stringable.of(string).afterLast(search).toString())
        .toBe(expected);
});

test.each([
    ['App\\Http\\Controllers\\Controller', 'fake'],
    ['yvette', 'xxxx'],
    ['yvette', ''],
])('.afterLast from %p with (%p) returns base string', (expected, search) => {
    expect(Stringable.of(expected).afterLast(search).toString())
        .toBe(expected);
});

it('should returns empty string if nothing is after', () => {

    expect(Stringable.of('yvette').afterLast('tte').toString())
        .toBe('');
});
