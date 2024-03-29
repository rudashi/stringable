'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {title} = require('../src/methods');

it('returns a string as `Title Case`', () => {
    expect(Stringable.of('a nice title uses the correct case').title().toString())
        .toBe('A Nice Title Uses The Correct Case');

    expect(Stringable.of('jefferson costella').title().toString())
        .toBe('Jefferson Costella');

    expect(Stringable.of('jefFErson coSTella').title().toString())
        .toBe('Jefferson Costella');

    expect(Str.title('a nice title uses the correct case'))
        .toBe('A Nice Title Uses The Correct Case');

    expect(title('a nice title uses the correct case'))
        .toBe('A Nice Title Uses The Correct Case');
});