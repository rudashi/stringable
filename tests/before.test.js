'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['This is my name', 'my name', 'This is '],
    ['hannah', 'nah', 'han'],
    ['hannah', 'n', 'ha'],
    ['ééé hannah', 'han', 'ééé '],
])('.before from %p with (%p) returns %p', (string, search, expected) => {
    expect(Stringable.of(string).before(search).toString())
        .toBe(expected);
});

test.each([
    ['This is my name', 'fake'],
    ['hannah', 'xxxx'],
    ['hannah', ''],
])('.before from %p with (%p) returns base string', (expected, search) => {
    expect(Stringable.of(expected).before(search).toString())
        .toBe(expected);
});
