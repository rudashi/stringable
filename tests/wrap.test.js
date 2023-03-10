'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {wrap} = require('../src/methods');

it('returns a string wrapped by a string', () => {
    expect(Stringable.of('is').wrap('This ', ' me!').toString())
        .toBe('This is me!');

    expect(Stringable.of('value').wrap('"').toString())
        .toBe('"value"');

    expect(Str.wrap('is', 'This ', ' me!'))
        .toBe('This is me!');

    expect(wrap('is', 'This ', ' me!'))
        .toBe('This is me!');
});
