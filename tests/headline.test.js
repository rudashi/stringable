'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {headline} = require('../src/methods');

it('returns the string to title case for each word', () => {
    expect(Stringable.of('steve_jobs').headline().toString())
        .toBe('Steve Jobs');

    expect(Stringable.of('EmailNotificationSent').headline().toString())
        .toBe('Email Notification Sent');

    expect(Stringable.of('jefferson costella').headline().toString())
        .toBe('Jefferson Costella');

    expect(Stringable.of('jefFErson coSTella').headline().toString())
        .toBe('Jefferson Costella');

    expect(Stringable.of('jefferson_costella uses-_Laravel').headline().toString())
        .toBe('Jefferson Costella Uses Laravel');

    expect(Stringable.of('jefferson_costella uses__Laravel').headline().toString())
        .toBe('Jefferson Costella Uses Laravel');


    expect(Stringable.of('laravel_p_h_p_framework').headline().toString())
        .toBe('Laravel P H P Framework');

    expect(Stringable.of('laravel _p _h _p _framework').headline().toString())
        .toBe('Laravel P H P Framework');

    expect(Stringable.of('laravel_php_framework').headline().toString())
        .toBe('Laravel Php Framework');

    expect(Stringable.of('laravel-phP-framework').headline().toString())
        .toBe('Laravel Ph P Framework');

    expect(Stringable.of('laravel  -_-  php   -_-   framework   ').headline().toString())
        .toBe('Laravel Php Framework');


    expect(Stringable.of('fooBar').headline().toString())
        .toBe('Foo Bar');

    expect(Stringable.of('foo_bar').headline().toString())
        .toBe('Foo Bar');

    expect(Stringable.of('foo-barBaz').headline().toString())
        .toBe('Foo Bar Baz');

    expect(Stringable.of('foo-bar_baz').headline().toString())
        .toBe('Foo Bar Baz');


    expect(Stringable.of('öffentliche-überraschungen').headline().toString())
        .toBe('Öffentliche Überraschungen');

    expect(Stringable.of('-_öffentliche_überraschungen_-').headline().toString())
        .toBe('Öffentliche Überraschungen');

    expect(Stringable.of('-öffentliche überraschungen').headline().toString())
        .toBe('Öffentliche Überraschungen');


    expect(Stringable.of('sindÖdeUndSo').headline().toString())
        .toBe('Sind Öde Und So');


    expect(Stringable.of('orwell 1984').headline().toString())
        .toBe('Orwell 1984');

    expect(Stringable.of('orwell   1984').headline().toString())
        .toBe('Orwell 1984');

    expect(Stringable.of('-orwell-1984 -').headline().toString())
        .toBe('Orwell 1984');

    expect(Stringable.of(' orwell_- 1984 ').headline().toString())
        .toBe('Orwell 1984');

    expect(Str.headline('steve_jobs'))
        .toBe('Steve Jobs');

    expect(headline('steve_jobs'))
        .toBe('Steve Jobs');
});
