'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if a given condition is false', () => {
    expect(Stringable.of('unless')
        .unless(false, (stringable) => stringable.append(' false'))
        .toString()
    ).toBe('unless false');

    expect(Stringable.of('unless')
        .unless(
            true,
            (stringable, value) => stringable.append(value),
            stringable => stringable.append(' true fallbacks to default'),
        )
        .toString()
    ).toBe('unless true fallbacks to default');

    expect(Stringable.of('unless')
        .unless(1, (stringable, value) => stringable.append(value).append('true'))
        .toString()
    ).toBe('unless');

    expect(Stringable.of('unless true ')
        .unless(
            1,
            (stringable, value) => stringable.append(value),
            (stringable, value) => stringable.append('fallbacks to default with value ').append(value),
        )
        .toString()
    ).toBe('unless true fallbacks to default with value 1');

    expect(Stringable.of('unless ')
        .unless(0, (stringable, value) => stringable.append(value))
        .toString()
    ).toBe('unless 0');

    expect(Stringable.of('gets the value ')
        .unless(
            0,
            (stringable, value) => stringable.append(value),
            (stringable) => stringable.append('fallbacks to default'),
        )
        .toString()
    ).toBe('gets the value 0');
});
