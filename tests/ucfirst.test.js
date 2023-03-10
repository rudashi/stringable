'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {ucfirst} = require('../src/methods');

it('returns a string with first character uppercase', () => {
    expect(Stringable.of('foo bar').ucfirst().toString())
        .toBe('Foo bar');

    expect(Stringable.of('laravel').ucfirst().toString())
        .toBe('Laravel');

    expect(Stringable.of('laravel framework').ucfirst().toString())
        .toBe('Laravel framework');

    expect(Stringable.of('мама').ucfirst().toString())
        .toBe('Мама');

    expect(Stringable.of('мама мыла раму').ucfirst().toString())
        .toBe('Мама мыла раму');

    expect(Str.ucfirst('foo bar'))
        .toBe('Foo bar');

    expect(ucfirst('foo bar'))
        .toBe('Foo bar');
});