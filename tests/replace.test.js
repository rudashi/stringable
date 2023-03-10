'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {replace} = require('../src/methods');

test.each([
    ['Laravel 6.x', '6.x', '7.x', 'Laravel 7.x'],
    ['foo bar baz', 'baz', 'laravel', 'foo bar laravel'],
    ['foo bar baz ?', '?', '8.x', 'foo bar baz 8.x'],
    ['foo bar baz', ' ', '/', 'foo/bar/baz'],
    ['?1 ?2 ?3', ['?1', '?2', '?3'], ['foo', 'bar', 'baz'], 'foo bar baz'],
    ['?1 ?2 ?3', ['?1', '?2', '?3'], ['foo', 'bar', 'baz', 'des'], 'foo bar baz'],
    ['?1 ?2 ?3', ['?1', '?2', '?3'], ['foo'], 'foo  '],
    ['?1 ?2 ?3', ['?1', '?2', '?3'], 'bar', 'bar bar bar'],
])('.replace from %p search %p and replace with %p then returns %p', (string, search, replaced, expected) => {
    expect(Stringable.of(string).replace(search, replaced).toString())
        .toBe(expected);

    expect(Str.replace(search, replaced, string))
        .toBe(expected);

    expect(replace(search, replaced, string))
        .toBe(expected);
});
