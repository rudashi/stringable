'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {endsWith} = require('../src/methods');

it('determines if string ends with the given value', () => {
    expect(Stringable.of('This is my name').endsWith('name')).toBe(true);
    expect(Stringable.of('jason').endsWith('on')).toBe(true);
    expect(Stringable.of('jason').endsWith('jason')).toBe(true);
    expect(Stringable.of('jason').endsWith('no')).toBe(false);

    expect(Stringable.of('jason').endsWith('')).toBe(false);
    expect(Stringable.of('').endsWith('')).toBe(false);
    expect(Stringable.of('jason').endsWith('N')).toBe(false);

    expect(Stringable.of('7').endsWith(' 7')).toBe(false);
    expect(Stringable.of('a7').endsWith('7')).toBe(true);
    expect(Stringable.of('a7').endsWith(7)).toBe(true);
    expect(Stringable.of('a7.12').endsWith(7.12)).toBe(true);
    expect(Stringable.of('a7.12').endsWith(7.13)).toBe(false);
    expect(Stringable.of(0.27).endsWith('7')).toBe(true);
    expect(Stringable.of(0.27).endsWith('0.27')).toBe(true);
    expect(Stringable.of(0.27).endsWith('8')).toBe(false);

    expect(Str.endsWith('This is my name', 'name')).toBe(true);
    expect(endsWith('This is my name', 'name')).toBe(true);
});

it('determines if string ends with one of the given values', () => {
    expect(Stringable.of('This is my name').endsWith(['name', 'foo'])).toBe(true);
    expect(Stringable.of('This is my name').endsWith(['this', 'foo'])).toBe(false);
    expect(Stringable.of('jason').endsWith(['on'])).toBe(true);
    expect(Stringable.of('jason').endsWith(['no', 'on'])).toBe(true);
    expect(Stringable.of('jason').endsWith(['no'])).toBe(false);

    expect(Str.endsWith('This is my name', ['name', 'foo'])).toBe(true);
    expect(endsWith('This is my name', ['name', 'foo'])).toBe(true);
});

it('returns false when pass null as argument', () => {
    expect(Stringable.of('jason').endsWith([null])).toBe(false);
    expect(Stringable.of('jason').endsWith(null)).toBe(false);
});

it('determines if localized string ends with the given value', () => {
    expect(Stringable.of('Jönköping').endsWith('öping')).toBe(true);
    expect(Stringable.of('Malmö').endsWith('mö')).toBe(true);
    expect(Stringable.of('Jönköping').endsWith('oping')).toBe(false);
    expect(Stringable.of('Malmö').endsWith('mo')).toBe(false);
    expect(Stringable.of('你好').endsWith('好')).toBe(true);
    expect(Stringable.of('你好').endsWith('你')).toBe(false);
    expect(Stringable.of('你好').endsWith('a')).toBe(false);

    expect(Str.endsWith('Jönköping', 'öping')).toBe(true);
    expect(endsWith('Jönköping', 'öping')).toBe(true);
});
