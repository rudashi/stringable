'use strict';

const {Stringable} = require('../src/Stringable');

it('returns an array from a string parsed to a given format', () => {

    expect(Stringable.of('SN/123456').scan('SN/%d'))
        .toEqual(expect.arrayContaining(['123456']));

    expect(Stringable.of('filename.jpg').scan('%[^.].%s'))
        .toEqual(expect.arrayContaining(['filename', 'jpg']));

    expect(Stringable.of('Otwell Taylor').scan('%s %s'))
        .toEqual(expect.arrayContaining(['Otwell', 'Taylor']));

    expect(Stringable.of('Otwell, Taylor').scan('%[^,],%s'))
        .toEqual(expect.arrayContaining(['Otwell', 'Taylor']));

});