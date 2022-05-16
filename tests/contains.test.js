'use strict';

const {Stringable} = require('../src/Stringable');

it('It determines if string contains the given value', () => {

    expect(Stringable.of('This is my name').contains('my')).toBe(true);
    expect(Stringable.of('Taylor').contains('ylo', true)).toBe(true);
    expect(Stringable.of('Taylor').contains('ylo', false)).toBe(true);
    expect(Stringable.of('Taylor').contains('taylor', true)).toBe(true);
    expect(Stringable.of('Taylor').contains('taylor', false)).toBe(false);
    expect(Stringable.of('Taylor').contains('xxx')).toBe(false);
    expect(Stringable.of('Taylor').contains('')).toBe(false);
    expect(Stringable.of('').contains('')).toBe(false);

});

it('It determines if string contains any of the values', () => {

    expect(Stringable.of('This is my name').contains(['my', 'foo'])).toBe(true);
    expect(Stringable.of('Taylor').contains(['ylo'], true)).toBe(true);
    expect(Stringable.of('Taylor').contains(['ylo'], false)).toBe(true);
    expect(Stringable.of('Taylor').contains(['xxx', 'ylo'], true)).toBe(true);
    expect(Stringable.of('Taylor').contains(['xxx', 'ylo'], false)).toBe(true);
    expect(Stringable.of('Taylor').contains(['xxx'])).toBe(false);

});