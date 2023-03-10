'use strict';

const {Stringable} = require('../src/Stringable');

it('returns string with replaced all portion of a string based on pattern', () => {
    expect(Stringable.of('(+1) 501-555-1000').replaceMatches(/[^A-Za-z\d]+/, '').toString())
        .toBe('15015551000');

    expect(Stringable.of('26-500').replaceMatches(/[^a-zA-Z\d]+/, '').toString())
        .toBe('26500');
});
