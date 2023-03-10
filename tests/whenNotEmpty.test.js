'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string is not empty', () => {
    expect(Stringable.of('Framework')
        .whenNotEmpty(stringable => stringable.prepend('Laravel '))
        .toString()
    ).toBe('Laravel Framework');

    expect(Stringable.of('')
        .whenNotEmpty((stringable) => stringable + '.')
        .toString()
    ).toBe('');


    expect(Stringable.of('Not empty')
        .whenNotEmpty((stringable) => stringable + '.')
        .toString()
    ).toBe('Not empty.');
});
