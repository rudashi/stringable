'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string not matches the given value', () => {

    expect(Stringable.of('framework')
        .whenNotExactly('laravel', stringable => stringable.title())
        .toString()
    ).toBe('Framework');

    expect(Stringable.of('Tony')
        .whenNotExactly('Tony Stark', () => 'Iron Man')
        .toString()
    ).toBe('Iron Man');

    expect(Stringable.of('Tony Stark')
        .whenNotExactly(
            'Tony Stark',
            () => 'Iron Man',
            () => 'Swing and a miss...!'
        )
        .toString()
    ).toBe('Swing and a miss...!');

});
