'use strict';

const {Stringable} = require('../src/Stringable');

it('determines if a string is a valid JSON', () => {

    expect(Stringable.of('[1,2,3]').isJson())
        .toBe(true);

    expect(Stringable.of('{"first": "John", "last": "Doe"}').isJson())
        .toBe(true);

    expect(Stringable.of('{first: "John", last: "Doe"}').isJson())
        .toBe(false);

    expect(Stringable.of('1').isJson())
        .toBe(true);

    expect(Stringable.of('[1,   2,   3]').isJson())
        .toBe(true);

    expect(Stringable.of('[{"first": "John", "last": "Doe"}, {"first": "Jane", "last": "Doe"}]').isJson())
        .toBe(true);

    expect(Stringable.of('1,').isJson())
        .toBe(false);

    expect(Stringable.of('[1,2,3').isJson())
        .toBe(false);

    expect(Stringable.of('[1,   2   3]').isJson())
        .toBe(false);

    expect(Stringable.of('{first: "John"}').isJson())
        .toBe(false);

    expect(Stringable.of('[{first: "John"}, {first: "Jane"}]').isJson())
        .toBe(false);

    expect(Stringable.of('').isJson())
        .toBe(false);

    expect(Stringable.of(null).isJson())
        .toBe(false);

});