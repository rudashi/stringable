'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {startsWith} = require('../src/methods');

it('determines if string begins with the given value', () => {
    expect(Stringable.of('jason').startsWith('jas')).toBe(true);
    expect(Stringable.of('jason').startsWith('jason')).toBe(true);
    expect(Stringable.of('jason').startsWith('day')).toBe(false);
    expect(Stringable.of('0123').startsWith('0')).toBe(true);
    expect(Stringable.of('jason').startsWith('J')).toBe(false);
    expect(Stringable.of('jason').startsWith('')).toBe(false);
    expect(Stringable.of('').startsWith('')).toBe(false);
    expect(Stringable.of('7').startsWith(' 7')).toBe(false);
    expect(Stringable.of('7a').startsWith('7')).toBe(true);
    expect(Stringable.of('7a').startsWith(7)).toBe(true);
    expect(Stringable.of('7.12a').startsWith(7.12)).toBe(true);
    expect(Stringable.of('7.12a').startsWith(7.13)).toBe(false);
    expect(Stringable.of(7.123).startsWith('7')).toBe(true);
    expect(Stringable.of(7.123).startsWith('7.12')).toBe(true);
    expect(Stringable.of(7.123).startsWith('7.13')).toBe(false);

    expect(Str.startsWith('jason', 'jas')).toBe(true);

    expect(startsWith('jason', 'jas')).toBe(true);
});

it('determines if string begins with one of the given values', () => {
    expect(Stringable.of('jason').startsWith(['jas'])).toBe(true);
    expect(Stringable.of('jason').startsWith(['day', 'jas'])).toBe(true);
    expect(Stringable.of('jason').startsWith(['day'])).toBe(false);

    expect(Str.startsWith('jason', ['jas'])).toBe(true);

    expect(startsWith('jason', ['jas'])).toBe(true);
});

it('returns false when pass null as argument', () => {
    expect(Stringable.of('jason').startsWith(null)).toBe(false);
    expect(Stringable.of('jason').startsWith([null])).toBe(false);
    expect(Stringable.of('0123').startsWith([null])).toBe(false);

    expect(Str.startsWith('jason', null)).toBe(false);

    expect(startsWith('jason', null)).toBe(false);
});

it('determines if localized string begins with the given value', () => {
    expect(Stringable.of('Jönköping').startsWith('Jö')).toBe(true);
    expect(Stringable.of('Malmö').startsWith('Malmö')).toBe(true);
    expect(Stringable.of('Jönköping').startsWith('Jonko')).toBe(false);
    expect(Stringable.of('Malmö').startsWith('Malmo')).toBe(false);
    expect(Stringable.of('你好').startsWith('你')).toBe(true);
    expect(Stringable.of('你好').startsWith('好')).toBe(false);
    expect(Stringable.of('你好').startsWith('a')).toBe(false);
});
