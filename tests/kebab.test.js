'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');

it('returns the string as `kebab-case`', () => {
    expect(Stringable.of('fooBar').kebab().toString())
        .toBe('foo-bar');

    expect(Stringable.of('LaravelPhpFramework').kebab().toString())
        .toBe('laravel-php-framework');

    expect(Stringable.of('LaravelPHPFramework').kebab().toString())
        .toBe('laravel-p-h-p-framework');

    expect(Stringable.of('Laravel Php Framework').kebab().toString())
        .toBe('laravel-php-framework');

    expect(Stringable.of('Laravel    Php      Framework   ').kebab().toString())
        .toBe('laravel-php-framework');

    expect(Stringable.of('LaravelPhpFramework-').kebab().toString())
        .toBe('laravel-php-framework-');

    expect(Stringable.of('laravel php Framework').kebab().toString())
        .toBe('laravel-php-framework');

    expect(Stringable.of('laravel php FrameWork').kebab().toString())
        .toBe('laravel-php-frame-work');

    expect(Stringable.of('foo-bar').kebab().toString())
        .toBe('foo-bar');

    expect(Stringable.of('Foo-Bar').kebab().toString())
        .toBe('foo--bar');

    expect(Stringable.of('Foo_Bar').kebab().toString())
        .toBe('foo_-bar');

    expect(Stringable.of('ŻółtaŁódka').kebab().toString())
        .toBe('żółtałódka');

    expect(Str.kebab('fooBar'))
        .toBe('foo-bar');
});
