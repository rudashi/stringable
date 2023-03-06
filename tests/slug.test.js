'use strict';

const {Stringable} = require('../src/Stringable');

it('returns the string as a URL friendly', () => {

    expect(Stringable.of('Laravel Framework').slug('-').toString())
        .toBe('laravel-framework');

    expect(Stringable.of('hello world').slug().toString())
        .toBe('hello-world');

    expect(Stringable.of('hello-world').slug().toString())
        .toBe('hello-world');

    expect(Stringable.of('hello_world').slug().toString())
        .toBe('hello-world');

    expect(Stringable.of('hello_world').slug('_').toString())
        .toBe('hello_world');

    expect(Stringable.of('user@host').slug().toString())
        .toBe('user-at-host');

    expect(Stringable.of('Crème Brulée').slug('-', null).toString())
        .toBe('crème-brulée');

    expect(Stringable.of('some text').slug('').toString())
        .toBe('sometext');

    expect(Stringable.of('').slug('').toString())
        .toBe('');

    expect(Stringable.of('').slug().toString())
        .toBe('');

    expect(Stringable.of('500$ bill').slug('-', 'en', {'$': 'dollar'}).toString())
        .toBe('500-dollar-bill');

    expect(Stringable.of('500--$----bill').slug('-', 'en', {'$': 'dollar'}).toString())
        .toBe('500-dollar-bill');

    expect(Stringable.of('500-$-bill').slug('-', 'en', {'$': 'dollar'}).toString())
        .toBe('500-dollar-bill');

    expect(Stringable.of('500$--bill').slug('-', 'en', {'$': 'dollar'}).toString())
        .toBe('500-dollar-bill');

    expect(Stringable.of('500-$--bill').slug('-', 'en', {'$': 'dollar'}).toString())
        .toBe('500-dollar-bill');

});
