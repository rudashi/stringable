'use strict';

const {Stringable} = require('../src/Stringable');

it('should returns string with appended value', () => {

    expect(Stringable.of('Taylor').append(' Otwell').toString())
        .toBe('Taylor Otwell');
});

it('should returns string with appended multiple values', () => {

    expect(Stringable.of('Taylor').append(' ', 'Otwell').toString())
        .toBe('Taylor Otwell');
});
