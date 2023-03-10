'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string matches the given regular expression', () => {
    expect(Stringable.of('laravel framework')
        .whenTest('laravel', stringable => stringable.title())
        .toString()
    ).toBe('Laravel Framework');

    expect(Stringable.of('laravel framework')
        .whenTest(/laravel/, stringable => stringable.title())
        .toString()
    ).toBe('Laravel Framework');

    expect(Stringable.of('foo bar')
        .whenTest(
            /bar/,
            stringable => stringable.prepend('Winner: '),
            () => 'Try again'
        )
        .toString()
    ).toBe('Winner: foo bar');

    expect(Stringable.of('foo bar')
        .whenTest(
            /link/,
            stringable => stringable.prepend('Winner: '),
            () => 'Try again'
        )
        .toString()
    ).toBe('Try again');

    expect(Stringable.of('foo bar')
        .whenTest(/link/, stringable => stringable.prepend('Winner: '))
        .toString()
    ).toBe('foo bar');
});
