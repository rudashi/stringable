'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['This is my name', 'This is', ' my name'],
    ['hannah', 'han', 'nah'],
    ['hannah', 'n', 'nah'],
    ['ééé hannah', 'han', 'nah'],
])('.after from %p with (%p) returns %p', (string, search, expected) => {
    expect(Stringable.of(string).after(search).toString())
        .toBe(expected);
});

test.each([
    ['This is my name', 'fake'],
    ['hannah', 'xxxx'],
    ['hannah', ''],
])('.after from %p with (%p) returns base string', (expected, search) => {
    expect(Stringable.of(expected).after(search).toString())
        .toBe(expected);
});
