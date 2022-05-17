'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a string with first character lowercase', () => {

    expect(Stringable.of('Foo Bar').lcfirst().toString())
        .toBe('foo Bar');

    expect(Stringable.of('Laravel').lcfirst().toString())
        .toBe('laravel');

    expect(Stringable.of('Laravel framework').lcfirst().toString())
        .toBe('laravel framework');

    expect(Stringable.of('Мама').lcfirst().toString())
        .toBe('мама');

    expect(Stringable.of('Мама мыла раму').lcfirst().toString())
        .toBe('мама мыла раму');
});