'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string matches a given pattern', () => {

    expect(Stringable.of('foo/bar')
        .whenIs('foo/*', stringable => stringable.append('/baz'))
        .toString()
    ).toBe('foo/bar/baz');

    expect(Stringable.of('/')
        .whenIs(
            '/',
            stringable => stringable.prepend('Winner: '),
            () => 'Try again'
        )
        .toString()
    ).toBe('Winner: /');

    expect(Stringable.of('/')
        .whenIs(' /', stringable => stringable.prepend('Winner: '))
        .toString()
    ).toBe('/');

    expect(Stringable.of('/')
        .whenIs(
            ' /',
            stringable => stringable.prepend('Winner: '),
            () => 'Try again'
        )
        .toString()
    ).toBe('Try again');

    expect(Stringable.of('foo/bar/baz')
        .whenIs('foo/*', stringable => stringable.prepend('Winner: '))
        .toString()
    ).toBe('Winner: foo/bar/baz');

});
