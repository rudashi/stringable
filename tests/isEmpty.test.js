'use strict';

const {Stringable} = require('../src/Stringable');

it('determines if string is empty', () => {
    expect(Stringable.of('  ').isEmpty())
        .toBe(false);

    expect(Stringable.of('  ').trim().isEmpty())
        .toBe(true);

    expect(Stringable.of('Laravel').isEmpty())
        .toBe(false);

    expect(Stringable.of('').isEmpty())
        .toBe(true);

    expect(Stringable.of('A').isEmpty())
        .toBe(false);

    expect(Stringable.of('0').isEmpty())
        .toBe(false);
});