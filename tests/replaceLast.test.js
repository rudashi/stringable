'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['the quick brown fox jumps over the lazy dog', 'the', 'a', 'the quick brown fox jumps over a lazy dog'],
    ['foobar foobar', 'bar', 'qux', 'foobar fooqux'],
    ['foo/bar? foo/bar?', 'bar?', 'qux?', 'foo/bar? foo/qux?'],
    ['foobar foobar', 'bar', '', 'foobar foo'],
    ['foobar foobar', 'xxx', 'yyy', 'foobar foobar'],
    ['foobar foobar', '', 'yyy', 'foobar foobar'],
    ['Malmö Jönköping', 'ö', 'xxx', 'Malmö Jönkxxxping'],
    ['Malmö Jönköping', '', 'yyy', 'Malmö Jönköping'],

])('.replaceLast from %p search %p and replace with %p then returns %p', (string, search, replace, expected) => {

    expect(Stringable.of(string).replaceLast(search, replace).toString())
        .toBe(expected);
});
