'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');

it('returns an inline html from GitHub flavored Markdown', () => {
    expect(Stringable.of('**Laravel**').inlineMarkdown())
        .toBe('<strong>Laravel</strong>');

    expect(Stringable.of('*hello world*').inlineMarkdown())
        .toBe('<em>hello world</em>');

    expect(Stringable.of('[**Laravel**](https://laravel.com)').inlineMarkdown())
        .toBe('<a href=\"https://laravel.com\"><strong>Laravel</strong></a>');

    expect(Str.inlineMarkdown('**Laravel**'))
        .toBe('<strong>Laravel</strong>');
});