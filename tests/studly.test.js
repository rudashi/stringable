'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');

it('returns the string as `StudlyCase`', () => {
    expect(Stringable.of('laravel_p_h_p_framework').studly().toString())
        .toBe('LaravelPHPFramework');

    expect(Stringable.of('laravel_php_framework').studly().toString())
        .toBe('LaravelPhpFramework');

    expect(Stringable.of('laravel-phP-framework').studly().toString())
        .toBe('LaravelPhPFramework');

    expect(Stringable.of('laravel  -_-  php   -_-   framework   ').studly().toString())
        .toBe('LaravelPhpFramework');

    expect(Stringable.of('fooBar').studly().toString())
        .toBe('FooBar');

    expect(Stringable.of('foo_bar').studly().toString())
        .toBe('FooBar');

    // test cache
    expect(Stringable.of('foo_bar').studly().toString())
        .toBe('FooBar');

    expect(Stringable.of('foo-barBaz').studly().toString())
        .toBe('FooBarBaz');

    expect(Stringable.of('foo-bar_baz').studly().toString())
        .toBe('FooBarBaz');

    expect(Stringable.of('öffentliche-überraschungen').studly().toString())
        .toBe('ÖffentlicheÜberraschungen');

    expect(Str.studly('laravel_p_h_p_framework'))
        .toBe('LaravelPHPFramework');
});

it('should cache the string to _studlyCache property', function () {
    Str.flushCache();

    expect(Str._studlyCache).toStrictEqual({});

    Str.of('foo').studly();
    expect(Str._studlyCache).toStrictEqual({foo: 'Foo'});

    Str.of('bar').studly();
    expect(Str._studlyCache).toStrictEqual({foo: 'Foo', bar: 'Bar'});
});