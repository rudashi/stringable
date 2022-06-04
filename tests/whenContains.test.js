'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string contains the given value', () => {

    expect(Stringable.of('tony stark')
        .whenContains('tony', stringable => stringable.title())
        .toString()
    ).toBe('Tony Stark');

    expect(Stringable.of('stark')
        .whenContains(
            'tar',
            stringable => stringable.prepend('Tony ').title(),
            stringable => stringable.prepend('Arno ').title(),
        )
        .toString()
    ).toBe('Tony Stark');

    expect(Stringable.of('stark')
        .whenContains('xxx', stringable => stringable.prepend('Tony ').title())
        .toString()
    ).toBe('stark');

    expect(Stringable.of('stark')
        .whenContains(
            'xxx',
            stringable => stringable.prepend('Tony ').title(),
            stringable => stringable.prepend('Arno ').title(),
        )
        .toString()
    ).toBe('Arno Stark');

    expect(Stringable.of('tony stark')
        .whenContains(['tony', 'hulk'], stringable => stringable.title())
        .toString()
    ).toBe('Tony Stark');

});
