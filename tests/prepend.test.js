'use strict';

const {Stringable} = require('../src/Stringable');

it('returns the string with prepended given values', () => {
    expect(Stringable.of('Framework').prepend('Laravel ').toString())
        .toBe('Laravel Framework');

    expect(Stringable.of('Framework').prepend('Laravel', ' ').toString())
        .toBe('Laravel Framework');
});
