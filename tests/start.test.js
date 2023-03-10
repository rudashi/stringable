'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {start} = require('../src/methods');

it('should returns string with prefix', () => {
    expect(Stringable.of('this/string').start('/').toString())
        .toBe('/this/string');

    expect(Str.start('this/string', '/'))
        .toBe('/this/string');

    expect(Str.start('this/string', '/'))
        .toBe('/this/string');
});

test.each([
    ['/this/string', '/'],
    ['//test/string', '/'],
])('.start from %p with (%p) returns base string', (expected, prefix) => {
    expect(Stringable.of(expected).start(prefix).toString())
        .toBe(expected);

    expect(Str.start(expected, prefix))
        .toBe(expected);

    expect(start(expected, prefix))
        .toBe(expected);
});
