'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {limit} = require('../src/methods');

it('truncates the given string to the specified length', () => {
    expect(Stringable.of('The quick brown fox jumps over the lazy dog').limit(20).toString())
        .toBe('The quick brown fox...');

    expect(Stringable.of('Laravel is a free, open source PHP web application framework.').limit(10).toString())
        .toBe('Laravel is...');

    expect(Stringable.of('这是一段中文').limit(3).toString())
        .toBe('这是一...');

    expect(Stringable.of('The PHP framework for web artisans.').limit(7).toString())
        .toBe('The PHP...');

    expect(Stringable.of('The PHP framework for web artisans.').limit(7, '').toString())
        .toBe('The PHP');

    expect(Stringable.of('The PHP framework for web artisans.').limit(100).toString())
        .toBe('The PHP framework for web artisans.');

    expect(Stringable.of('这是一段中文').limit(3).toString())
        .toBe('这是一...');

    expect(Stringable.of('这是一段中文').limit(3, '').toString())
        .toBe('这是一');

    expect(Str.limit('The quick brown fox jumps over the lazy dog', 20))
        .toBe('The quick brown fox...');

    expect(limit('The quick brown fox jumps over the lazy dog', 20))
        .toBe('The quick brown fox...');
});