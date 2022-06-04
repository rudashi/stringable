'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a passed closure if the string is a valid UUID', () => {

    expect(Stringable.of('2cdc7039-65a6-4ac7-8e5d-d554a98e7b15')
        .whenIsUuid(
            stringable => stringable.prepend('Uuid: '),
            stringable => stringable.prepend('Not Uuid: '),
        )
        .toString()
    ).toBe('Uuid: 2cdc7039-65a6-4ac7-8e5d-d554a98e7b15');

    expect(Stringable.of('2cdc7039-65a6-4ac7-8e5d-d554a98')
        .whenIsUuid(stringable => stringable.prepend('Uuid: '))
        .toString()
    ).toBe('2cdc7039-65a6-4ac7-8e5d-d554a98');

    expect(Stringable.of('2cdc7039-65a6-4ac7-8e5d-d554a98')
        .whenIsUuid(
            stringable => stringable.prepend('Uuid: '),
            stringable => stringable.prepend('Not Uuid: '),
        )
        .toString()
    ).toBe('Not Uuid: 2cdc7039-65a6-4ac7-8e5d-d554a98');

});
