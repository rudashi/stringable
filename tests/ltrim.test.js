'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a string after trims the left side', () => {

    expect(Stringable.of('  Laravel  ').ltrim().toString())
        .toBe('Laravel  ');

    expect(Stringable.of(' foo ').ltrim('').toString())
        .toBe('foo ');

    expect(Stringable.of('/Laravel/').ltrim('/').toString())
        .toBe('Laravel/');

});