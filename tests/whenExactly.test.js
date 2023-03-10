'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string exactly matches the given value', () => {
    expect(Stringable.of('laravel')
        .whenExactly('laravel', stringable => stringable.title())
        .toString()
    ).toBe('Laravel');

    expect(Stringable.of('Tony Stark')
        .whenExactly(
            'Tony Stark',
            () => 'Nailed it...!',
            () => 'Swing and a miss...!'
        )
        .toString()
    ).toBe('Nailed it...!');

    expect(Stringable.of('Tony Stark')
        .whenExactly(
            'Iron Man',
            () => 'Nailed it...!',
            () => 'Swing and a miss...!'
        )
        .toString()
    ).toBe('Swing and a miss...!');

    expect(Stringable.of('Tony Stark')
        .whenExactly('Iron Man', () => 'Nailed it...!')
        .toString()
    ).toBe('Tony Stark');
});
