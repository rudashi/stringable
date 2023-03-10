'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string is a valid ULID', () => {
    expect(Stringable.of('01GJSNW9MAF792C0XYY8RX6QFT')
        .whenIsUlid(
            stringable => stringable.prepend('Ulid: '),
            stringable => stringable.prepend('Not Ulid: '),
        )
        .toString()
    ).toBe('Ulid: 01GJSNW9MAF792C0XYY8RX6QFT');

    expect(Stringable.of('2cdc7039-65a6-4ac7-8e5d-d554a98')
        .whenIsUlid(stringable => stringable.prepend('Ulid: '))
        .toString()
    ).toBe('2cdc7039-65a6-4ac7-8e5d-d554a98');

    expect(Stringable.of('ss-01GJSNW9MAF792C0XYY8RX6QFT')
        .whenIsUlid(
            stringable => stringable.prepend('Ulid: '),
            stringable => stringable.prepend('Not Ulid: '),
        )
        .toString()
    ).toBe('Not Ulid: ss-01GJSNW9MAF792C0XYY8RX6QFT');
});