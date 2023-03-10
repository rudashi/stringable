'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {mask} = require('../src/methods');

it('returns a masked portion of a string with a repeated character', () => {
    expect(Stringable.of('taylor@example.com').mask('*', 3).toString())
        .toBe('tay***************');
    expect(Stringable.of('taylor@example.com').mask('*', -15, 3).toString())
        .toBe('tay***@example.com');

    expect(Stringable.of('taylor@email.com').mask('*', 0, 6).toString())
        .toBe('******@email.com');
    expect(Stringable.of('taylor@email.com').mask('*', -13).toString())
        .toBe('tay*************');
    expect(Stringable.of('taylor@email.com').mask('*', -13, 3).toString())
        .toBe('tay***@email.com');

    expect(Stringable.of('taylor@email.com').mask('*', -17).toString())
        .toBe('****************');
    expect(Stringable.of('taylor@email.com').mask('*', -99, 5).toString())
        .toBe('*****r@email.com');

    expect(Stringable.of('taylor@email.com').mask('*', 16).toString())
        .toBe('taylor@email.com');
    expect(Stringable.of('taylor@email.com').mask('*', 16, 99).toString())
        .toBe('taylor@email.com');

    expect(Stringable.of('taylor@email.com').mask('', 3).toString())
        .toBe('taylor@email.com');

    expect(Stringable.of('taylor@email.com').mask('something', 3).toString())
        .toBe('taysssssssssssss');

    expect(Stringable.of('这是一段中文').mask('*', 3).toString())
        .toBe('这是一***');
    expect(Stringable.of('这是一段中文').mask('*', 0, 2).toString())
        .toBe('**一段中文');

    expect(Stringable.of('maan@email.com').mask('*', 2, 1).toString())
        .toBe('ma*n@email.com');
    expect(Stringable.of('maan@email.com').mask('*', 2, 3).toString())
        .toBe('ma***email.com');
    expect(Stringable.of('maan@email.com').mask('*', 2).toString())
        .toBe('ma************');

    expect(Stringable.of('maria@email.com').mask('*', 4, 1).toString())
        .toBe('mari*@email.com');
    expect(Stringable.of('tamara@email.com').mask('*', 5, 1).toString())
        .toBe('tamar*@email.com');

    expect(Stringable.of('maria@email.com').mask('*', 0, 1).toString())
        .toBe('*aria@email.com');
    expect(Stringable.of('maria@email.com').mask('*', -1, 1).toString())
        .toBe('maria@email.co*');
    expect(Stringable.of('maria@email.com').mask('*', -1).toString())
        .toBe('maria@email.co*');
    expect(Stringable.of('maria@email.com').mask('*', -15).toString())
        .toBe('***************');
    expect(Stringable.of('maria@email.com').mask('*', 0).toString())
        .toBe('***************');

    expect(Str.mask('taylor@example.com', '*', 3).toString())
        .toBe('tay***************');

    expect(mask('taylor@example.com', '*', 3).toString())
        .toBe('tay***************');
});
