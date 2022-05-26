'use strict';

const {Stringable} = require('../src/Stringable');

it('allowing you to examine and interact with the string while not affecting the string itself', () => {

    const logSpy = jest.spyOn(console, 'log');

    expect(
        Stringable.of('Laravel')
            .append(' Framework')
            .tap(str => console.log('String after append: ' + str))
            .upper()
            .toString()
    ).toBe('LARAVEL FRAMEWORK');

    expect(logSpy).toHaveBeenCalledWith('String after append: Laravel Framework');

});

it('returns always original string', function () {

    let stringable = Stringable.of('foobarbaz');

    let fromTheTap = '';

    stringable = stringable.tap(str => {
        fromTheTap = str.substr(0, 3);
    });

    expect(fromTheTap.toString()).toBe('foo');
    expect(stringable.toString()).toBe('foobarbaz');

});