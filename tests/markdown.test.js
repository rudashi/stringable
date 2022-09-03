'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a html from GitHub markdown', () => {

    expect(Stringable.of('# Laravel').markdown())
        .toBe('<h1>Laravel</h1>');

    expect(Stringable.of('# Taylor <b>Otwell</b>').markdown({ html_input: 'STRIP' }))
        .toBe('<h1>Taylor Otwell</h1>');

    expect(Stringable.of('*hello world*').markdown())
        .toBe('<p><em>hello world</em></p>');

    expect(Stringable.of('## hello world').markdown())
        .toBe('<h2>hello world</h2>');
});