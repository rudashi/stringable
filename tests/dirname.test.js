'use strict';

const {Stringable} = require('../src/Stringable');

it('returns the parent directory portion of the given string', () => {
    expect(Stringable.of('/foo/bar/baz').dirname().toString())
        .toBe('/foo/bar');
});

it('returns directory after trimming multiple directory levels', () => {
    expect(Stringable.of('/foo/bar/baz').dirname(2).toString())
        .toBe('/foo');
});
