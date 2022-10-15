'use strict';

const {Stringable} = require('../src/Stringable');

it('dumps the string', () => {

    const logSpy = jest.spyOn(console, 'log', jest.GetAccessor);

    expect(Stringable.of('JavaScript Laravel Stringable').dump())
        .toBeInstanceOf(Stringable);

    expect(logSpy).toHaveBeenCalledWith('JavaScript Laravel Stringable');

});

it('dumps the string and ends execution of the script', () => {

    const logSpy = jest.spyOn(console, 'log', jest.GetAccessor);

    expect(() => Stringable.of('JavaScript Laravel Stringable').dd()).toThrow(Error);

    expect(logSpy).toHaveBeenCalledWith('JavaScript Laravel Stringable');

});

it('returns the string', function () {

    expect(Stringable.of('foo').value()).toBe('foo');
    expect(Stringable.of('foo').toString()).toBe('foo');

});

it('returns string value as an integer', function () {

    expect(Stringable.of('123').toInteger()).toBe(123);
    expect(Stringable.of(456).toInteger()).toBe(456);
    expect(Stringable.of(' 901').toInteger()).toBe(901);
    expect(Stringable.of('nan').toInteger()).toBe(0);
    expect(Stringable.of('1ab').toInteger()).toBe(1);
    expect(Stringable.of('2_000').toInteger()).toBe(2);

});

it('returns a string value as a float', function () {

    expect(Stringable.of('1.23').toFloat()).toBe(1.23);
    expect(Stringable.of(45.6).toFloat()).toBe(45.6);
    expect(Stringable.of('.6').toFloat()).toBe(.6);
    expect(Stringable.of('0.78').toFloat()).toBe(0.78);
    expect(Stringable.of(' 90.1').toFloat()).toBe(90.1);
    expect(Stringable.of('nan').toFloat()).toBe(0.0);
    expect(Stringable.of('1.ab').toFloat()).toBe(1.0);
    expect(Stringable.of('1e3').toFloat()).toBe(1e3);

});

it('returns a string value as a boolean', function () {

    expect(Stringable.of(true).toBoolean()).toBe(true);
    expect(Stringable.of('true').toBoolean()).toBe(true);
    expect(Stringable.of(false).toBoolean()).toBe(false);
    expect(Stringable.of('1').toBoolean()).toBe(true);
    expect(Stringable.of('0').toBoolean()).toBe(false);
    expect(Stringable.of('on').toBoolean()).toBe(true);
    expect(Stringable.of('off').toBoolean()).toBe(false);
    expect(Stringable.of('yes').toBoolean()).toBe(true);
    expect(Stringable.of('no').toBoolean()).toBe(false);

});

it('returns a string value as a Date', function () {

    const current = new Date(2020, 0, 1, 16, 30, 25);

    expect(Stringable.of('2020-01-01 16:30:25').toDate().toString()).toBe(current.toString());
    expect(Stringable.of('1577896225').toDate().toString()).toBe(current.toString());
    expect(Stringable.of(1577896225).toDate().toString()).toBe(current.toString());
    expect(Stringable.of('2020-01-01').toDate().getDate()).toBe(current.getDate());
    expect(Stringable.of('16:30:25').toDate().getSeconds()).toBe(current.getSeconds());

    expect(Stringable.of('6:30:25').toDate().toString()).toBe('Invalid Date');
});

it('can flush cached words', function () {

    expect(Stringable._camelCache).toStrictEqual({});

    Stringable.flushCache();
    expect(Stringable._camelCache).toStrictEqual({});

    Stringable.of('foo').camel();
    expect(Stringable._camelCache).not.toStrictEqual({});
    expect(Stringable._camelCache).toStrictEqual({foo: 'foo'});

    Stringable.flushCache();
    expect(Stringable._camelCache).toStrictEqual({});

});