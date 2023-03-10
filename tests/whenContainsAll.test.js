'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string contains all of the given strings', () => {
    expect(Stringable.of('tony stark')
        .whenContainsAll(['tony', 'stark'], stringable => stringable.title())
        .toString()
    ).toBe('Tony Stark');

    expect(Stringable.of('tony stark')
        .whenContainsAll(
            ['tony', 'stark'],
            stringable => stringable.title(),
            stringable => stringable.studly(),
        )
        .toString()
    ).toBe('Tony Stark');

    expect(Stringable.of('tony stark')
        .whenContainsAll(['xxx'], stringable => stringable.title())
        .toString()
    ).toBe('tony stark');

    expect(Stringable.of('tony stark')
        .whenContainsAll(
            ['tony', 'xxx'],
            stringable => stringable.title(),
            stringable => stringable.studly(),
        )
        .toString()
    ).toBe('TonyStark');
});
