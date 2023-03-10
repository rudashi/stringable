'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {reverse} = require('../src/methods');

it('returns reversed string', () => {
    expect(Stringable.of('Hello World').reverse().toString())
        .toBe('dlroW olleH');

    expect(Stringable.of('raBooF').reverse().toString())
        .toBe('FooBar');

    expect(Stringable.of('őtüzsineT').reverse().toString())
        .toBe('Teniszütő');

    expect(Stringable.of('☆etyBitluM❤').reverse().toString())
        .toBe('❤MultiByte☆');

    expect(Str.reverse('Hello World'))
        .toBe('dlroW olleH');

    expect(reverse('Hello World'))
        .toBe('dlroW olleH');
});
