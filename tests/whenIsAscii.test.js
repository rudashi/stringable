'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string is a 7 bit ASCII', () => {
    expect(Stringable.of('A')
        .whenIsAscii(
            stringable => stringable.prepend('Ascii: '),
            stringable => stringable.prepend('Not Ascii: '),
        )
        .toString()
    ).toBe('Ascii: A');

    expect(Stringable.of('ù')
        .whenIsAscii(stringable => stringable.prepend('Ascii: '))
        .toString()
    ).toBe('ù');

    expect(Stringable.of('ù')
        .whenIsAscii(
            stringable => stringable.prepend('Ascii: '),
            stringable => stringable.prepend('Not Ascii: '),
        )
        .toString()
    ).toBe('Not Ascii: ù');
});
