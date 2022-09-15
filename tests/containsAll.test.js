'use strict';

const {Stringable} = require('../src/Stringable');

it('determines if string contains all of the given values', () => {

    expect(Stringable.of('This is my name').containsAll(['my', 'name'])).toBe(true);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor', 'otwell'], false)).toBe(false);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor', 'otwell'], true)).toBe(true);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor'], false)).toBe(false);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor'], true)).toBe(true);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor', 'xxx'], false)).toBe(false);
    expect(Stringable.of('Taylor Otwell').containsAll(['taylor', 'xxx'], true)).toBe(false);

});