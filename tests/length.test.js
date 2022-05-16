'use strict';

const {Stringable} = require('../src/Stringable');

it('returns the length of the given string', () => {

    expect(Stringable.of('Laravel').length())
        .toBe(7);

    expect(Stringable.of('foo bar baz').length())
        .toBe(11);

});
