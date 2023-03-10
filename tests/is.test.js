'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {is} = require('../src/methods');

it('determines if a string matches the given pattern', () => {
    expect(Stringable.of('foobar').is('foo*'))
        .toBe(true);

    expect(Stringable.of('foobar').is('baz*'))
        .toBe(false);

    expect(Stringable.of('/').is('/'))
        .toBe(true);

    expect(Stringable.of('/').is(' /'))
        .toBe(false);

    expect(Stringable.of('/a').is('/ '))
        .toBe(false);

    expect(Stringable.of('foo/bar/baz').is('foo/*'))
        .toBe(true);

    expect(Stringable.of('blah/baz/foo').is('*/foo'))
        .toBe(true);

    expect(Stringable.of('App\Class@method').is('*@*'))
        .toBe(true);

    expect(Stringable.of('app\Class@').is('*@*'))
        .toBe(true);

    expect(Stringable.of('@method').is('*@*'))
        .toBe(true);

    expect(Str.is('foo*', 'foobar'))
        .toBe(true);

    expect(is('foo*', 'foobar'))
        .toBe(true);
});

it('determines if a string is case sensitive when matching the given pattern', () => {
    expect(Stringable.of('foo/bar/baz').is('*BAZ*'))
        .toBe(false);

    expect(Stringable.of('foo/bar/baz').is('*FOO*'))
        .toBe(false);

    expect(Stringable.of('a').is('A'))
        .toBe(false);

    expect(Str.is('*BAZ*', 'foo/bar/baz'))
        .toBe(false);

    expect(is('*BAZ*', 'foo/bar/baz'))
        .toBe(false);
});

it('determines if a string matches array of pattern', () => {
    expect(Stringable.of('a/').is(['a*', 'b*']))
        .toBe(true);

    expect(Stringable.of('b/').is(['a*', 'b*']))
        .toBe(true);

    expect(Stringable.of('f/').is(['a*', 'b*']))
        .toBe(false);

    expect(Str.is(['a*', 'b*'], 'a/'))
        .toBe(true);

    expect(is(['a*', 'b*'], 'a/'))
        .toBe(true);
});

it('determines if a numeric string matches the given pattern', () => {
    expect(Stringable.of(123).is(['a*', 'b*']))
        .toBe(false);

    expect(Stringable.of(11211).is(['*2*', 'b*']))
        .toBe(true);
});

it('determines if a string matches empty patterns', () => {
    expect(Stringable.of('test').is([]))
        .toBe(false);

    expect(Stringable.of('').is(''))
        .toBe(true);

    expect(Stringable.of(0).is(''))
        .toBe(false);

    expect(Stringable.of(0).is([null]))
        .toBe(false);

    expect(Stringable.of(null).is([null]))
        .toBe(false);

    expect(Str.is([], 'test'))
        .toBe(false);

    expect(is([], 'test'))
        .toBe(false);
});