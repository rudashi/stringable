'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {swap} = require('../src/methods');

it('returns a string with replaced multiple values', () => {
    expect(Stringable.of('Tacos are great!')
        .swap({
            'Tacos': 'Burritos',
            'great': 'fantastic',
        }).toString()
    ).toBe('Burritos are fantastic!');

    expect(Stringable.of('PHP is awesome')
        .swap({
            'PHP': 'PHP 8',
            'awesome': 'fantastic',
        }).toString()
    ).toBe('PHP 8 is fantastic');

    expect(Stringable.of('foo bar ⓐⓑ')
        .swap({
            'ⓐⓑ': 'baz',
        }).toString()
    ).toBe('foo bar baz');

    expect(Stringable.of('[test]')
        .swap({
            '[': '-',
            ']': '-',
        }).toString()
    ).toBe('-test-');

    expect(Str.swap({
            'Tacos': 'Burritos',
            'great': 'fantastic',
        }, 'Tacos are great!')
    ).toBe('Burritos are fantastic!');

    expect(swap({
            'Tacos': 'Burritos',
            'great': 'fantastic',
        }, 'Tacos are great!')
    ).toBe('Burritos are fantastic!');
});