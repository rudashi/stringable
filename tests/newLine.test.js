'use strict';

const {Stringable} = require('../src/Stringable');

it('returns the string with appended an "end of line"', () => {
    expect(Stringable.of('Laravel').newLine().toString())
        .toBe('Laravel\n');

    expect(Stringable.of('Laravel').newLine().append('Framework').toString())
        .toBe('Laravel\nFramework');

    expect(Stringable.of('foo').newLine(2).append('bar').toString())
        .toBe('foo\n\nbar');
});