'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {isAscii} = require('../src/methods');

it('determines if a string is a 7 bit ASCII', () => {
    expect(Stringable.of('Taylor').isAscii())
        .toBe(true);

    expect(Stringable.of('ü').isAscii())
        .toBe(false);

    expect(Stringable.of('A').isAscii())
        .toBe(true);

    expect(Stringable.of('ù').isAscii())
        .toBe(false);

    expect(Stringable.of('@').isAscii())
        .toBe(true);

    expect(Stringable.of(null).isAscii())
        .toBe(true);

    expect(Stringable.of('').isAscii())
        .toBe(true);

    expect(Str.isAscii('Taylor'))
        .toBe(true);

    expect(isAscii('Taylor'))
        .toBe(true);
});
