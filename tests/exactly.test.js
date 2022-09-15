'use strict';

const {Stringable} = require('../src/Stringable');

it('determines if string is an exact match with the given value', () => {

    expect(Stringable.of('Laravel').exactly('Laravel'))
        .toBe(true);

    expect(Stringable.of('Laravel').exactly(Stringable.of('Laravel')))
        .toBe(true);

    expect(Stringable.of('Laravel').exactly('laravel'))
        .toBe(false);
});
