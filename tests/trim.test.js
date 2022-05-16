'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a string after trims', () => {

    expect(Stringable.of('  Laravel  ').trim().toString())
        .toBe('Laravel');

    expect(Stringable.of(' foo ').trim('').toString())
        .toBe('foo');

    expect(Stringable.of('/Laravel/').trim('/').toString())
        .toBe('Laravel');

});