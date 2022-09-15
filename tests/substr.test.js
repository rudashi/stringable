'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['Laravel Framework', 8, undefined, 'Framework'],
    ['Laravel Framework', 8, 5, 'Frame'],
    ['БГДЖИЛЁ', '', -1, 'Ё'],
    ['БГДЖИЛЁ', -2, undefined, 'ЛЁ'],
    ['БГДЖИЛЁ', -3, 1, 'И'],
    ['БГДЖИЛЁ', 2, -1, 'ДЖИЛ'],
    ['БГДЖИЛЁ', 4, -4, ''],
    ['БГДЖИЛЁ',  -3, -1, 'ИЛ'],
    ['БГДЖИЛЁ', 1, undefined, 'ГДЖИЛЁ'],
    ['БГДЖИЛЁ', 1, 3, 'ГДЖ'],
    ['БГДЖИЛЁ', 0, 4, 'БГДЖ'],
    ['БГДЖИЛЁ', -1, 1, 'Ё'],
    ['Б', 2, undefined, ''],
])('.substr from %p with (start: %p, length: %p) returns %p',
    /**
     * @param {string} string
     * @param {number} start
     * @param {number} length
     * @param {E} expected
    */
(string, start, length, expected) => {

    expect(Stringable.of(string).substr(start, length).toString())
        .toBe(expected);
});
