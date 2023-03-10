'use strict';

const {Stringable} = require('../src/Stringable');

it('transform the string by passing its current value to the given callable', () => {
    expect(Stringable.of('Laravel').pipe('toLowerCase').prepend('lower case: ').toString())
        .toBe('lower case: laravel');

    expect(Stringable.of('foo').pipe(() => 'bar'))
        .toBeInstanceOf(Stringable);

    expect(Stringable.of('foo').pipe(() => 'bar').toString())
        .toBe('bar');
});
