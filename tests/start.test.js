'use strict';

const {Stringable} = require('../src/Stringable');

it('should returns string with prefix', () => {

    expect(Stringable.of('this/string').start('/').toString())
        .toBe('/this/string');
});

test.each([
    ['/this/string', '/'],
    ['//test/string', '/'],
])('.start from %p with (%p) returns base string', (expected, prefix) => {

    expect(Stringable.of(expected).start(prefix).toString())
        .toBe(expected);
});
