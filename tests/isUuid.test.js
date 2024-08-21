'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {isUuid} = require('../src/methods');

test.each([
    ['5ace9ab9-e9cf-4ec6-a19d-5881212a452c', true],
    ['Taylor', false],
    ['a0a2a2d2-0b87-4a18-83f2-2529882be2de', true],
    ['145a1e72-d11d-11e8-a8d5-f2801f1b9fd1', true],
    ['00000000-0000-0000-0000-000000000000', true],
    ['e60d3f48-95d7-4d8d-aad0-856f29a27da2', true],
    ['ff6f8cb0-c57d-11e1-9b21-0800200c9a66', true],
    ['ff6f8cb0-c57d-21e1-9b21-0800200c9a66', true],
    ['ff6f8cb0-c57d-31e1-9b21-0800200c9a66', true],
    ['ff6f8cb0-c57d-41e1-9b21-0800200c9a66', true],
    ['ff6f8cb0-c57d-51e1-9b21-0800200c9a66', true],
    ['FF6F8CB0-C57D-11E1-9B21-0800200C9A66', true],
    ['not a valid uuid so we can test this', false],
    ['zf6f8cb0-c57d-11e1-9b21-0800200c9a66', false],
    ['145a1e72-d11d-11e8-a8d5-f2801f1b9fd1\n', false],
    ['145a1e72-d11d-11e8-a8d5-f2801f1b9fd1 ', false],
    [' 145a1e72-d11d-11e8-a8d5-f2801f1b9fd1', false],
    ['145a1e72-d11d-11e8-a8d5-f2z01f1b9fd1', false],
    ['3f6f8cb0-c57d-11e1-9b21-0800200c9a6', false],
    ['af6f8cb-c57d-11e1-9b21-0800200c9a66', false],
    ['af6f8cb0c57d11e19b210800200c9a66', false],
    ['ff6f8cb0-c57da-51e1-9b21-0800200c9a66', false],
])('determines if string %p is a UUID',
    /**
     * @param {string} string
     * @param {boolean} expected
     */
    (string, expected) => {
        expect(Stringable.of(string).isUuid())
            .toBe(expected);

        expect(Str.isUuid(string))
            .toBe(expected);

        expect(isUuid(string))
            .toBe(expected);
    })
;