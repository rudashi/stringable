'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if a given condition is true', () => {
    expect(Stringable.of('Taylor')
        .when(true, (stringable) => stringable.append(' Otwell'))
        .toString()
    ).toBe('Taylor Otwell');

    expect(Stringable.of('One')
        .when(1 === 1, (stringable) => stringable.append(' is equal One'))
        .toString()
    ).toBe('One is equal One');


    expect(Stringable.of('when ')
        .when(true, (stringable) => stringable.append('true'))
        .toString()
    ).toBe('when true');

    expect(Stringable.of('when')
        .when(false, (stringable, value) => stringable.append(value).append('false'))
        .toString()
    ).toBe('when');
});

it('returns a passed fail closure if a given condition is false', () => {
    expect(Stringable.of('gets a value ')
        .when(
            'from if',
            (stringable, value) => stringable.append(value),
            (stringable) => stringable.append('fallbacks to default'),
        ).toString()
    ).toBe('gets a value from if');

    expect(Stringable.of('when false ')
        .when(
            false,
            (stringable, value) => stringable.append(value),
            (stringable) => stringable.append('fallbacks to default'),
        ).toString()
    ).toBe('when false fallbacks to default');
});
