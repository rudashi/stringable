'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');

it('returns the string as `camelCase`', () => {
    expect(Stringable.of('foo_bar').camel().toString())
        .toBe('fooBar');

    expect(Stringable.of('Laravel_p_h_p_framework').camel().toString())
        .toBe('laravelPHPFramework');

    expect(Stringable.of('Laravel_php_framework').camel().toString())
        .toBe('laravelPhpFramework');

    expect(Stringable.of('laravel-phP-framework').camel().toString())
        .toBe('laravelPhPFramework');

    expect(Stringable.of('laravel  -_-  php   -_-   framework   ').camel().toString())
        .toBe('laravelPhpFramework');

    expect(Stringable.of('FooBar').camel().toString())
        .toBe('fooBar');

    expect(Stringable.of('foo_bar').camel().toString())
        .toBe('fooBar');

    // test cache
    expect(Stringable.of('foo_bar').camel().toString())
        .toBe('fooBar');

    expect(Stringable.of('Foo-barBaz').camel().toString())
        .toBe('fooBarBaz');

    expect(Stringable.of('foo-bar_baz').camel().toString())
        .toBe('fooBarBaz');

    expect(Str.camel('foo_bar'))
        .toBe('fooBar');
});

it('should cache the string to _camelCache property', function () {
    Stringable.flushCache();

    expect(Str._camelCache).toStrictEqual({});

    Stringable.of('foo').camel();
    expect(Str._camelCache).toStrictEqual({foo: 'foo'});

    Stringable.of('bar').camel();
    expect(Str._camelCache).toStrictEqual({foo: 'foo', bar: 'bar'});
});