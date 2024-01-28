'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {wordWrap} = require('../src/methods');

it('returns a string wrapped to a given number of characters', () => {
    expect(Stringable.of('The quick brown fox jumped over the lazy dog.').wordWrap(20, "<br />\n").toString())
        .toBe("The quick brown fox<br />\njumped over the lazy<br />\ndog.");

    expect(Stringable.of('Hello World').wordWrap(3, '<br />').toString())
        .toBe('Hello<br />World');

    expect(Stringable.of('A very long woooooooooooord.').wordWrap(8, '<br />', true).toString())
        .toBe('A very<br />long<br />wooooooo<br />ooooord.');

    expect(Stringable.of('A very long woooooooooooooooooord and something').wordWrap(8, '<br />', false).toString())
        .toBe('A very<br />long<br />woooooooooooooooooord<br />and<br />something');

    expect(Stringable.of('Hello World').wordWrap(3, '<br />', true).toString())
        .toBe('Hel<br />lo<br />Wor<br />ld');

    expect(Stringable.of('❤Multi Byte☆❤☆❤☆❤').wordWrap(3, '<br />').toString())
        .toBe('❤Multi<br />Byte☆❤☆❤☆❤');

    expect(Str.wordWrap('❤Multi Byte☆❤☆❤☆❤', 3, '<br />'))
        .toBe('❤Multi<br />Byte☆❤☆❤☆❤');

    expect(wordWrap('❤Multi Byte☆❤☆❤☆❤',3, '<br />'))
        .toBe('❤Multi<br />Byte☆❤☆❤☆❤');
});
