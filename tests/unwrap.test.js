'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {unwrap} = require('../src/methods');

it('returns an unwrapped string', () => {
    expect(Stringable.of('-Laravel-').unwrap('-').toString())
        .toBe('Laravel');

    expect(Stringable.of('{framework: "Laravel"}').unwrap('{', '}').toString())
        .toBe('framework: "Laravel"');

    expect(Stringable.of('"value').unwrap('"').toString())
        .toBe('value');

    expect(Stringable.of('value"').unwrap('"').toString())
        .toBe('value');

    expect(Stringable.of('foo-bar-baz').unwrap('foo-', '-baz').toString())
        .toBe('bar');

    expect(Stringable.of('{some: "json"}').unwrap('{', '}').toString())
        .toBe('some: "json"');

    expect(Stringable.of('"value"').unwrap('"').toString())
        .toBe('value');

    expect(Str.unwrap('"value"', '"'))
        .toBe('value');

    expect(unwrap('"value"', '"'))
        .toBe('value');
});
