'use strict';

const {Str} = require('../../src/Str');
const {preg_quote} = require('../../src/methods');

it('returns quoted regular expression characters', () => {
    expect(Str.preg_quote('$40')).toBe('\\$40');
    expect(Str.preg_quote('*RRRING* Hello?')).toBe('\\*RRRING\\* Hello\\?');
    expect(Str.preg_quote('\\.+*?[^]$(){}=!<>|:')).toBe('\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:');
    expect(Str.preg_quote('$40 for a g3/400', '/')).toBe('\\$40 for a g3\\/400');

    expect(preg_quote('$40 for a g3/400', '/')).toBe('\\$40 for a g3\\/400');
});