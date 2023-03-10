'use strict';

const {Stringable} = require('../src/Stringable');

it('determines if string is empty', () => {
    expect(Stringable.of('  ').isNotEmpty())
        .toBe(true);

    expect(Stringable.of('  ').trim().isNotEmpty())
        .toBe(false);

    expect(Stringable.of('Laravel').isNotEmpty())
        .toBe(true);

    expect(Stringable.of('').isNotEmpty())
        .toBe(false);

    expect(Stringable.of('A').isNotEmpty())
        .toBe(true);

    expect(Stringable.of('0').isNotEmpty())
        .toBe(true);
});