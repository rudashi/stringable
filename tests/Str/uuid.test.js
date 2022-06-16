'use strict';

const {Str} = require('../../src/Str');

it('generates a UUID (version 4)', () => {

    expect(Str.uuid().isUuid()).toBe(true);
    expect(Str.uuid().isUuid()).toBe(true);
});