'use strict';

const {Stringable} = require('../src/Stringable');

it('determines if a string matches the given regular expression pattern', () => {
    expect(Stringable.of('Laravel Framework').test(/Laravel/))
        .toBe(true);

    expect(Stringable.of('Laravel Framework').test('Laravel'))
        .toBe(true);

    expect(Stringable.of('foo bar').test(/bar/))
        .toBe(true);

    expect(Stringable.of('foo bar').test('foo (.*)'))
        .toBe(true);
});