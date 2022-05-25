/**
 * @jest-environment jsdom
 */

'use strict';

const {Stringable} = require('../src/Stringable');

it('dumps the string', () => {

    const logSpy = jest.spyOn(console, 'log');

    expect(Stringable.of('JavaScript Laravel Stringable').dump())
        .toBeInstanceOf(Stringable);

    expect(logSpy).toHaveBeenCalledWith('JavaScript Laravel Stringable');

});

it('dumps the string and ends execution of the script', () => {

    const logSpy = jest.spyOn(console, 'log');

    expect(() => Stringable.of('JavaScript Laravel Stringable').dd()).toThrow(Error);

    expect(logSpy).toHaveBeenCalledWith('JavaScript Laravel Stringable');

});

it('converts the string instance to an instance of Element or Node', () => {

    expect(Stringable.of('Nuno Maduro').toHtmlString())
        .toBeInstanceOf(Node);

    expect(Stringable.of('<h1>Test String</h1>').toHtmlString())
        .toBeInstanceOf(HTMLHeadingElement);

    expect(Stringable.of('<div>Test String</div>').toHtmlString())
        .toBeInstanceOf(HTMLDivElement);

    expect(Stringable.of('<div>Test String</div>').toHtmlString())
        .toBeInstanceOf(Element);

    expect(Stringable.of('<div>Test String</div>').toHtmlString())
        .toBeInstanceOf(Node);

});

it('returns the string', function () {

    expect(Stringable.of('foo').value()).toBe('foo');
    expect(Stringable.of('foo').toString()).toBe('foo');

});