'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a string matching the given pattern', () => {

    expect(Stringable.of('foo bar').match(/bar/))
        .toBe('bar');

    expect(Stringable.of('foo bar').match('foo (.*)'))
        .toBe('bar');

    expect(Stringable.of('foo bar').match(/nothing/))
        .toBe('');

});
