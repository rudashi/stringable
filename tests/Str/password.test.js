'use strict';

const {Str} = require('../../src/Str');

it('generates a random and secure password', () => {
    expect(Str.password().length).toBe(32);
    expect(Str.password(40).length).toBe(40);
    expect(Str.password(32, true, false, false)).toMatch(/^[A-Za-z]*$/);
    expect(Str.password(32, false, true, false)).toMatch(/^[0-9]*$/);
    expect(Str.password(32, false, false, true)).toMatch(/^[^a-zA-Z0-9]+$/);
    expect(typeof Str.password() === 'string').toBe(true);
});