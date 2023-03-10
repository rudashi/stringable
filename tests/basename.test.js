'use strict';

const {Stringable} = require('../src/Stringable');

it('should returns trailing name component of the given string', () => {
    expect(Stringable.of('/foo/bar/baz').basename().toString())
        .toBe('baz');
});

it('should returns trailing name component without extension', () => {
    expect(Stringable.of('/foo/bar/baz.jpg').basename('.jpg').toString())
        .toBe('baz');
});
