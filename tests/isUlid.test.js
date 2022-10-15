'use strict';

const {Stringable} = require('../src/Stringable');

test.each([
    ['5ace9ab9-e9cf-4ec6-a19d-5881212a452c', false],
    ['00000000000000000000000000', true],
    ['01ARYZ6S41YYYYYYYYYYYYYYYY', true],
    ['01ARYZ6S41YYYYYYYYYYYYYYYZ', true],
    ['01ARYZ6S41YYYYYYYYYYYYYYZ0', true],
    ['01ARYZ6S41YYYYYYYYYYYYYYZ1', true],
    ['01BX5ZZKBKACTAV9WEVGEMMVRY', true],
    ['01BX5ZZKBKACTAV9WEVGEMMVS0', true],
    ['01BX5ZZKBKZZZZZZZZZZZZZZZZ', true],
    ['0AAAAAAAAAAAAAAAAAAAAAAAAA', true],
    ['7ZZZZZZZZZZZZZZZZZZZZZZZZZ', true],
    ['this is not a ulid', false],
    ['8ZZZZZZZZZZZZZZZZZZZZZZZZZ', false],
    ['abcdefghijklmnoppstqwxyzab', false],
    ['01BX5ZZKBKZZZZZZZZZZZZZZZZ ', false],
    [' 01BX5ZZKBKZZZZZZZZZZZZZZZZ', false],
    ['01BX5ZZKBKZZZZZZZZZZZZZZZą', false],
])('determines if string %p is a valid ULID', (string, expected) => {

    expect(Stringable.of(string).isUlid())
        .toBe(expected);
});