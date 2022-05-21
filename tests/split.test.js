'use strict';

const {Stringable} = require('../src/Stringable');

it('returns an array split using the given pattern', () => {

    expect(Stringable.of('one, two, three').split(/[\s,]+/))
        .toStrictEqual(['one', 'two', 'three']);

    expect(Stringable.of('one, two, three').split('[,]+'))
        .toStrictEqual(['one', ' two', ' three']);

    expect(Stringable.of('foobarbaz').split(3))
        .toStrictEqual(['foo', 'bar', 'baz']);

    expect(Stringable.of('foo').split(''))
        .toStrictEqual(['f', 'o', 'o']);

    expect(Stringable.of('foobarbaz').split(0))
        .toStrictEqual([]);

    expect(Stringable.of('foobarbaz').split(' '))
        .toStrictEqual(['foobarbaz']);

});