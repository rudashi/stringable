'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a string without HTML tags', () => {

    expect(Stringable.of('before<br>after').stripTags().toString())
        .toBe('beforeafter');

    expect(Stringable.of('before<br>after').stripTags('<br>').toString())
        .toBe('before<br>after');

    expect(Stringable.of('<strong>before</strong><br>after').stripTags('<br>').toString())
        .toBe('before<br>after');

    expect(Stringable.of('<strong>before</strong><br>after').stripTags('<br><strong>').toString())
        .toBe('<strong>before</strong><br>after');

    expect(Stringable.of('<i>hello</i> <<foo>script>world<</foo>/script>').stripTags().toString())
        .toBe('hello world');

});


