'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a string with removed all extraneous white spaces', () => {

    expect(Stringable.of('    laravel    framework    ').squish().toString())
        .toBe('laravel framework');

    expect(Stringable.of(' laravel   php  framework ').squish().toString())
        .toBe('laravel php framework');

    expect(Stringable.of('laravel\t\tphp\n\nframework').squish().toString())
        .toBe('laravel php framework');

    expect(Stringable.of('laravel\nphp\nframework').squish().toString())
        .toBe('laravel php framework');

    expect(Stringable.of('   laravel   php   framework   ').squish().toString())
        .toBe('laravel php framework');

    expect(Stringable.of('   123    ').squish().toString())
        .toBe('123');

    expect(Stringable.of('だ').squish().toString())
        .toBe('だ');

    expect(Stringable.of('ム').squish().toString())
        .toBe('ム');

    expect(Stringable.of('   だ    ').squish().toString())
        .toBe('だ');

    expect(Stringable.of('   ム    ').squish().toString())
        .toBe('ム');

    expect(Stringable.of('laravelㅤㅤㅤphpㅤframework').squish().toString())
        .toBe('laravel php framework');

});
