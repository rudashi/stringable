'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {containsAll} = require('../src/methods');

it('determines if string contains all of the given values', () => {

    expect(Stringable.of('This is my name').containsAll(['my', 'name'])).toBe(true);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor', 'otwell'], false)).toBe(false);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor', 'otwell'], true)).toBe(true);
    expect(Stringable.of('taylor otwell').containsAll(['TAYLOR', 'OTWELL'], true)).toBe(true);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor'], false)).toBe(false);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor'], true)).toBe(true);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor', 'xxx'], false)).toBe(false);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor', 'xxx'], true)).toBe(false);

    expect(Str.containsAll('This is my name', ['my', 'name'])).toBe(true);
    expect(containsAll('This is my name', ['my', 'name'])).toBe(true);
});