/**
 * @jest-environment jsdom
 */

'use strict';

const {Stringable} = require('../src/Stringable');

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
