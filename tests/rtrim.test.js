'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a string after trims the right side', () => {

    expect(Stringable.of('  Laravel  ').rtrim().toString())
        .toBe('  Laravel');

    expect(Stringable.of(' foo ').rtrim('').toString())
        .toBe(' foo');

    expect(Stringable.of('/Laravel/').rtrim('/').toString())
        .toBe('/Laravel');

});