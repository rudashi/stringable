'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {words} = require('../src/methods');

it('returns a string with limited number of words', () => {
    expect(Stringable.of('Perfectly balanced, as all things should be.').words(3, ' >>>').toString())
        .toBe('Perfectly balanced, as >>>');

    expect(Stringable.of('Taylor Otwell').words(1).toString())
        .toBe('Taylor...');

    expect(Stringable.of('Taylor Otwell').words(1, '___').toString())
        .toBe('Taylor___');

    expect(Stringable.of(' Taylor Otwell ').words(1).toString())
        .toBe(' Taylor...');

    expect(Str.words('Perfectly balanced, as all things should be.',3, ' >>>'))
        .toBe('Perfectly balanced, as >>>');

    expect(words('Perfectly balanced, as all things should be.', 3, ' >>>'))
        .toBe('Perfectly balanced, as >>>');
});

it('returns a non ascii string with limited number of words', () => {
    expect(Stringable.of('这是 段中文').words(1).toString())
        .toBe('这是...');

    expect(Stringable.of('这是 段中文').words(1, '___').toString())
        .toBe('这是___');

    expect(Stringable.of('这是-段中文').words(3, '___').toString())
        .toBe('这是-段中文');

    expect(Stringable.of('这是     段中文').words(1, '___').toString())
        .toBe('这是___');
});

it('trim string only where is necessary', () => {
    expect(Stringable.of(' Taylor Otwell ').words(3).toString())
        .toBe(' Taylor Otwell ');

    expect(Stringable.of('Taylor Otwell').words(3).toString())
        .toBe('Taylor Otwell');

    expect(Stringable.of(' ').words().toString())
        .toBe(' ');

    expect(Str.words(' Taylor Otwell ',3))
        .toBe(' Taylor Otwell ');

    expect(words(' Taylor Otwell ', 3))
        .toBe(' Taylor Otwell ');
});
