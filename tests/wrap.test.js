'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a string wrapped by a string', () => {

    expect(Stringable.of('is').wrap('This ', ' me!').toString())
        .toBe('This is me!');

    expect(Stringable.of('value').wrap('"').toString())
        .toBe('"value"');

});
