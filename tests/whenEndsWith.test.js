'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string ends with the given string', () => {
    expect(Stringable.of('disney world')
        .whenEndsWith('world', stringable => stringable.title())
        .toString()
    ).toBe('Disney World');

    expect(Stringable.of('tony stark')
        .whenEndsWith(
            'ark',
            stringable => stringable.title(),
            stringable => stringable.studly(),
        )
        .toString()
    ).toBe('Tony Stark');

    expect(Stringable.of('tony stark')
        .whenEndsWith(
            ['kra', 'ark'],
            stringable => stringable.title(),
            stringable => stringable.studly(),
        )
        .toString()
    ).toBe('Tony Stark');

    expect(Stringable.of('tony stark')
        .whenEndsWith(['xxx'], stringable => stringable.title())
        .toString()
    ).toBe('tony stark');

    expect(Stringable.of('tony stark')
        .whenEndsWith(
            ['tony', 'xxx'],
            stringable => stringable.title(),
            stringable => stringable.studly(),
        )
        .toString()
    ).toBe('TonyStark');
});
