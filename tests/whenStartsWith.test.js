'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string starts with the given string', () => {
    expect(Stringable.of('disney world')
        .whenStartsWith('disney', stringable => stringable.title())
        .toString()
    ).toBe('Disney World');

    expect(Stringable.of('tony stark')
        .whenStartsWith(
            'ton',
            stringable => stringable.title(),
            stringable => stringable.studly(),
        )
        .toString()
    ).toBe('Tony Stark');

    expect(Stringable.of('tony stark')
        .whenStartsWith(
            ['ton', 'not'],
            stringable => stringable.title(),
            stringable => stringable.studly(),
        )
        .toString()
    ).toBe('Tony Stark');

    expect(Stringable.of('tony stark')
        .whenStartsWith(['xxx'], stringable => stringable.title())
        .toString()
    ).toBe('tony stark');

    expect(Stringable.of('tony stark')
        .whenStartsWith(
            ['tony', 'xxx'],
            stringable => stringable.title(),
            stringable => stringable.studly(),
        )
        .toString()
    ).toBe('Tony Stark');
});
