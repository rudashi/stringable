'use strict';

const {Str} = require('../../src/Str');
const {Stringable} = require('../../src/Stringable');

it('returns Stringable instance from string', () => {
    expect(Str.of('Laravel'))
        .toBeInstanceOf(Stringable);

    expect(Str.of('Taylor').append(' Otwell').toString())
        .toBe('Taylor Otwell');
});