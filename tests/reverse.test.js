'use strict';

const {Stringable} = require('../src/Stringable');

it('returns reversed string', () => {

    expect(Stringable.of('Hello World').reverse().toString())
        .toBe('dlroW olleH');

    expect(Stringable.of('raBooF').reverse().toString())
        .toBe('FooBar');

    expect(Stringable.of('őtüzsineT').reverse().toString())
        .toBe('Teniszütő');

    expect(Stringable.of('☆etyBitluM❤').reverse().toString())
        .toBe('❤MultiByte☆');

});
