'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['This is my name', 'is', 'This '],
    ['yvette', 'tte', 'yve'],
    ['yvette', 't', 'yvet'],
    ['ééé yvette', 'yve', 'ééé '],
])('.beforeLast from %p with (%p) returns %p', (string, search, expected) => {
    expect(Stringable.of(string).beforeLast(search).toString())
        .toBe(expected);
});

test.each([
    ['This is my name', 'fake'],
    ['yvette', 'xxxx'],
    ['yvette', ''],
])('.beforeLast from %p with (%p) returns base string', (expected, search) => {
    expect(Stringable.of(expected).beforeLast(search).toString())
        .toBe(expected);
});

it('It should returns empty string if nothing is before', () => {

    expect(Stringable.of('yvette').beforeLast('yve').toString())
        .toBe('');
});
