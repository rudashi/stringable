'use strict';

const {Str} = require('../../src/Str');

it('Generate a ULID', () => {

    expect(Str.ulid().isUlid()).toBe(true);
    expect(Str.ulid().isUlid()).toBe(true);
});