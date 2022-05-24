'use strict';

const {Stringable} = require('../src/Stringable');

it('should returns string as a ASCII value', () => {

    expect(Stringable.of('ü').ascii().toString())
        .toBe('u');

    expect(Stringable.of('@').ascii().toString())
        .toBe('@');

    expect(Stringable.of('х Х щ Щ ъ Ъ иа йо').ascii().toString())
        .toBe('х Х щ Щ ъ Ъ иа ио');

    expect(Stringable.of('ä ö ü Ä Ö Ü').ascii().toString())
        .toBe('a o u A O U');
});

it('should returns empty string when use on null', () => {

    expect(Stringable.of(null).ascii().toString())
        .toBe('');

});
