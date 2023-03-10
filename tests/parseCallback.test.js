'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {parseCallback} = require('../src/methods');

it('returns an array with parsed class and method', () => {
    expect(Stringable.of('Class@method').parseCallback('foo'))
        .toStrictEqual(['Class', 'method']);

    expect(Stringable.of('Class').parseCallback('foo'))
        .toStrictEqual(['Class', 'foo']);

    expect(Stringable.of('Class').parseCallback())
        .toStrictEqual(['Class', null]);

    expect(Str.parseCallback('Class@method', 'foo'))
        .toStrictEqual(['Class', 'method']);

    expect(parseCallback('Class@method', 'foo'))
        .toStrictEqual(['Class', 'method']);
});
