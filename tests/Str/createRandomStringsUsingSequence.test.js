'use strict';

const {Str} = require('../../src/Str');

it('can set the sequence that will be used to generate random strings', () => {

    Str.createRandomStringsUsingSequence({
        0: 'x',
        // 1: generate a random here...
        2: 'y',
        3: 'z',
        // ...: continue to generate random...
    });

    expect(Str.random()).toBe('x');
    expect(Str.random().length).toBe(16);
    expect(Str.random()).toBe('y');
    expect(Str.random()).toBe('z');
    expect(Str.random().length).toBe(16);
    expect(Str.random().length).toBe(16);

    Str.createRandomStringsNormally();
});

it('can specify a fallback for a random string sequence', () => {

    Str.createRandomStringsUsingSequence(
        {0: Str.random(), 1: Str.random()},
        function() {
            throw new Error('Out of random strings.');
        }
    );

    expect(Str.random().length).toBe(16);
    expect(Str.random().length).toBe(16);
    expect(() => Str.random()).toThrowError(new Error('Out of random strings.'));
});