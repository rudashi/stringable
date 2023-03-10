'use strict';

const {Str} = require('../../src/Str');

it('generates a random string of the specified length', () => {
    const randomInteger = Math.floor(Math.random() * 100);

    expect(Str.random(40).length).toBe(40);
    expect(Str.random().length).toBe(16);
    expect(Str.random(randomInteger).length).toBe(randomInteger);
    expect(typeof Str.random() === 'string').toBe(true);
});