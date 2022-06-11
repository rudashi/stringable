'use strict';

const {Stringable} = require('../src/Stringable');

it('returns the string as `snake_case`', () => {

    expect(Stringable.of('fooBar').snake().toString())
        .toBe('foo_bar');

    expect(Stringable.of('LaravelPHPFramework').snake().toString())
        .toBe('laravel_p_h_p_framework');

    expect(Stringable.of('LaravelPhpFramework').snake().toString())
        .toBe('laravel_php_framework');

    expect(Stringable.of('LaravelPhpFramework').snake(' ').toString())
        .toBe('laravel php framework');

    expect(Stringable.of('Laravel Php Framework').snake().toString())
        .toBe('laravel_php_framework');

    expect(Stringable.of('Laravel    Php      Framework   ').snake().toString())
        .toBe('laravel_php_framework');

    expect(Stringable.of('LaravelPhpFramework').snake('__').toString())
        .toBe('laravel__php__framework');

    expect(Stringable.of('LaravelPhpFramework_').snake('_').toString())
        .toBe('laravel_php_framework_');

    expect(Stringable.of('laravel php Framework').snake().toString())
        .toBe('laravel_php_framework');

    expect(Stringable.of('laravel php FrameWork').snake().toString())
        .toBe('laravel_php_frame_work');

    expect(Stringable.of('foo-bar').snake().toString())
        .toBe('foo-bar');

    expect(Stringable.of('Foo-Bar').snake().toString())
        .toBe('foo-_bar');

    expect(Stringable.of('Foo_Bar').snake().toString())
        .toBe('foo__bar');

    expect(Stringable.of('ŻółtaŁódka').snake().toString())
        .toBe('żółtałódka');

});

it('should cache the string to _snakeCache property', function () {

    Stringable.flushCache();

    expect(Stringable._snakeCache).toStrictEqual({});

    Stringable.of('fooBar').snake();
    expect(Stringable._snakeCache).toStrictEqual({fooBar: { _ :'foo_bar'}});

    Stringable.of('fooBar').snake('-');
    expect(Stringable._snakeCache).toStrictEqual({'fooBar': { '_' :'foo_bar', '-' :'foo-bar'}});

});