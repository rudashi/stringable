'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {ucsplit} = require('../src/methods');

test.each([
    ['Foo Bar', ['Foo', 'Bar']],
    ['Laravel_p_h_p_framework', ['Laravel_p_h_p_framework']],
    ['Laravel_P_h_p_framework', ['Laravel_', 'P_h_p_framework']],
    ['laravelPHPFramework', ['laravel', 'P', 'H', 'P', 'Framework']],
    ['Laravel-phP-framework', ['Laravel-ph', 'P-framework']],
    ['ŻółtaŁódka', ['Żółta', 'Łódka']],
    ['sindÖdeUndSo', ['sind', 'Öde', 'Und', 'So']],
    ['ÖffentlicheÜberraschungen', ['Öffentliche', 'Überraschungen']],
])('.ucsplit from %p returns %p', (string, expected) => {
    expect(Stringable.of(string).ucsplit())
        .toStrictEqual(expected);

    expect(Str.ucsplit(string))
        .toStrictEqual(expected);

    expect(ucsplit(string))
        .toStrictEqual(expected);
});
