'use strict';

const {Str} = require('../../src/Str');

it('can generate random string using predefined sequence', () => {

    Str.createRandomStringsUsing((length) => `length:${length}`);

    expect(Str.random(7)).toBe('length:7');
    expect(Str.random(7)).toBe('length:7');

    Str.createRandomStringsNormally();

    expect(Str.random()).not.toBe('length:7');

});
