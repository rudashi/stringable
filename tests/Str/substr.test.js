'use strict';

const {Str} = require('../../src/Str');
const {substr} = require('../../src/methods');

it('returns the portion of string specified by the start and length parameters', () => {
    expect(Str.substr('БГДЖИЛЁ', -1)).toBe('Ё');
    expect(Str.substr('БГДЖИЛЁ', -2)).toBe('ЛЁ');
    expect(Str.substr('БГДЖИЛЁ', -3, 1)).toBe('И');
    expect(Str.substr('БГДЖИЛЁ', 2, -1)).toBe('ДЖИЛ');
    expect(Str.substr('БГДЖИЛЁ', 4, -4)).toBe('');
    expect(Str.substr('БГДЖИЛЁ', -3, -1)).toBe('ИЛ');
    expect(Str.substr('БГДЖИЛЁ', 1)).toBe('ГДЖИЛЁ');
    expect(Str.substr('БГДЖИЛЁ', 1, 3)).toBe('ГДЖ');
    expect(Str.substr('БГДЖИЛЁ', 0, 4)).toBe('БГДЖ');
    expect(Str.substr('БГДЖИЛЁ', -1, 1)).toBe('Ё');
    expect(Str.substr('Б', 2)).toBe('');

    expect(substr('taylor@email.com', -99, 5)).toBe('taylo');
    expect(substr('taylor@email.com', -7, 5)).toBe('ail.c');
});