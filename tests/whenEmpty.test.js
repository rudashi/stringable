'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string is empty', () => {

    expect(Stringable.of('')
        .whenEmpty(stringable => stringable.trim().prepend('Laravel'))
        .toString()
    ).toBe('Laravel');

    expect(Stringable.of('')
        .whenEmpty(() => 'empty')
        .toString()
    ).toBe('empty');


    expect(Stringable.of('not-empty')
        .whenEmpty(() => 'empty')
        .toString()
    ).toBe('not-empty');

});
