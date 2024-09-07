## Static Methods

### of
The `of` function creates new instance of `Stringable` class:
```js
Str.of('foo bar');

// Stringable Object
```
### after
The `after` function returns everything after the given value in a string.
The entire string will be returned if the value does not exist within the string:
```js
Str.after('This is my name', 'This is');

// ' my name'
```
### afterLast
The `afterLast` function returns everything after the last occurrence of the given value in a string.
The entire string will be returned if the value does not exist within the string:
```js
Str.afterLast('App\\Http\\Controllers\\Controller', '\\');

// 'Controller'
```
### ascii
The `ascii` function will attempt to transliterate the string into an ASCII value:
```js
Str.ascii('ü');

// 'u'
```
### before
The `before` function returns everything before the given value in a string:
```js
Str.before('This is my name', 'my name');

// 'This is '
```
### beforeLast
The `beforeLast` function returns everything before the last occurrence of the given value in a string:
```js
Str.beforeLast('This is my name', 'is');

// 'This '
```
### between
The `between` function returns the portion of a string between two values:
```js
Str.between('This is my name', 'This', 'name');

// ' is my '
```
### betweenFirst
The `betweenFirst` function returns the smallest possible portion of a string between two values:
```js
Str.betweenFirst('[a] bc [d]', '[', ']');

// 'a'
```
### camel
The `camel` function converts the given string to `camelCase`:
```js
Str.camel('foo_bar');

// 'fooBar'
```
### charAt
The `charAt` function allows to get a character by index from a multibyte string:
```js
Str.charAt('Hello, world!', 1);

// 'e'
```
### contains
The `contains` function determines if the given string contains the given value. This function is case-sensitive:
```js
Str.contains('This is my name', 'my');

// true
```
You may also pass an array of values to determine if the given string contains any of the values in the array:
```js
Str.contains('This is my name', ['my', 'foo']);

// true
```
### containsAll
The `containsAll` function determines if the given string contains all the values in the given array:
```js
Str.containsAll('This is my name', ['my', 'name']);

// true
```

### convertCase

The `convertCase` function converts the given string to given mode:

```js
Str.convertCase('HeLLo WoRLD', MB_CASE_LOWER);

// 'hello world'
```

### endsWith
The `endsWith` function determines if the given string ends with the given value:
```js
Str.endsWith('This is my name', 'name');

// true
```
You may also pass an array of values to determine if the given string ends with any of the values in the array:
```js
Str.endsWith('This is my name', ['name', 'foo']);

// true

Str.endsWith('This is my name', ['this', 'foo']);

// false
```
### excerpt
The `excerpt` function extracts an excerpt from the string that matches the first instance of a phrase within that string:
```js
Str.excerpt('This is my name', 'my', {
    radius: 3 
});

// '...is my na...'
```
The `radius` option, which defaults to `100`, allows you to define the number of characters that should appear on each side of the truncated string.

In addition, you may use the `omission` option to change the string that will be prepended and appended to the truncated string:
```js
Str.excerpt('This is my name', 'name', {
    radius: 3,
    omission: '(...) '
});

// '(...) my name'
```
### explode
The `explode` function splits the string by the given delimiter and returns an array containing each section of the split string:
```js
Str.explode('foo bar baz', ' ');

// ['foo', 'bar', 'baz']
```
### finish
The `finish` function adds a single instance of the given value to a string if it does not already end with that value:
```js
Str.finish('this/string', '/');

// 'this/string/'

Str.finish('this/string/', '/');

// 'this/string/'
```
### wrap
The `wrap` function wraps the string with the given strings:
```js
Str.wrap('is', 'This ', ' me!');

// 'This is me!'
```
### is
The `is` function determines if a given string matches a given pattern. Asterisks may be used as wildcard values
```js
Str.is('foo*', 'foobar');

// true

Str.is(/baz*/, 'foobar');

// false
```
### isAscii
The `isAscii` function determines if a given string is an ASCII string:
```js
Str.isAscii('Taylor');

// true

Str.isAscii('ü');

// false
```
### isJson
The `isJson` function determines if a given string is valid JSON:
```js
Str.isJson('[1,2,3]');

// true

Str.isJson('{"first": "John", "last": "Doe"}');

// true

Str.isJson('{first: "John", last: "Doe"}');

// false
```
### isUrl
The `isUrl` function determines if a given string is a valid URL:
```js
Str.isUrl('https://example.com');

// true

Str.isUrl('example');

// false
```
### isUlid
The `isUlid` function determines if a given string is a valid ULID:
```js
Str.isUlid('01ARZ3NDEKTSV4RRFFQ69G5FAV');

// true

Str.isUlid('Taylor');

// false
```
### isUuid
The `isUuid` function determines if a given string is a UUID:
```js
Str.isUuid('5ace9ab9-e9cf-4ec6-a19d-5881212a452c');

// true

Str.isUuid('Taylor');

// false
```
### isMatch
The `isMatch` function will return `true` if the string matches a given regular expression:
```js
Str.isMatch(/foo (.*)/, 'foo bar');

// true

Str.isMatch(/foo (.*)/, 'laravel');

// false
```
### kebab
The `kebab` function converts the given string to `kebab-case`:
```js
Str.kebab('fooBar');

// 'foo-bar'
```
### length
The `length` function returns the length of the given string:
```js
Str.length('Laravel');

// 7
```
### limit
The `limit` function truncates the given string to the specified length:

```js
Str.limit('The quick brown fox jumps over the lazy dog', 20);

// 'The quick brown fox...'
```
You may also pass a second argument to change the string that will be appended to the end of the truncated string:
```js
Str.limit('The quick brown fox jumps over the lazy dog', 20, ' (...)');

// 'The quick brown fox (...)'
```
### lower
The `lower` function converts the given string to lowercase:
```js
Str.lower('LARAVEL');

// 'laravel'
```
### words
The `words` function limits the number of words in a string. If necessary, you may specify an additional string that will be appended to the truncated string:
```js
Str.words('Perfectly balanced, as all things should be.', 3, ' >>>');

// 'Perfectly balanced, as >>>'
```
### markdown
The `markdown` function converts GitHub flavored Markdown into HTML:
```js
Str.markdown('# Laravel');

// <h1>Laravel</h1>

Str.markdown('# Taylor <b>Otwell</b>', {'html_input': 'strip'});

// <h1>Taylor Otwell</h1>
```
### inlineMarkdown
The `inlineMarkdown` function converts GitHub flavored Markdown into inline HTML.
However, unlike the markdown function, it does not wrap all generated HTML in a block-level element:
```js
Str.inlineMarkdown('**Laravel**');

// <strong>Laravel</strong>
```
### mask
The `mask` function masks a portion of a string with a repeated character, and may be used to obfuscate
segments of strings such as email addresses and phone numbers:
```js
Str.mask('taylor@example.com', '*', 3);

// 'tay***************'
```
If needed, you provide a negative number as the third argument to the `mask` function, which will instruct the function
to begin masking at the given distance from the end of the string:
```js
Str.mask('taylor@example.com', '*', -15, 3);

// 'tay***@example.com'
```
### match
The `match` function will return the portion of a string that matches a given regular expression pattern:
```js
Str.match('bar', 'foo bar');

// 'bar'

Str.match(/foo (.*)/, 'foo bar');

// 'bar'
```
### matchAll
The `matchAll` function will return an array containing the portions of a string that match a given regular expression pattern:
```js
Str.matchAll('bar', 'bar foo bar');

// ['bar', 'bar']
```
If you specify a matching group within the expression, package will return an array of that group's matches:
```js
Str.matchAll(/f(\w*)/, 'bar fun bar fly');

// ['un', 'ly']
```
### padBoth
The `padBoth` function wraps both sides of a string with another string until the final string reaches the desired length:
```js
Str.padBoth('James', 10, '_');

// '__James___'

Str.padBoth('James', 10);

// '  James   '
```
### padLeft
The `padLeft` function wraps the left side of a string with another string until the final string reaches the desired length:
```js
Str.padLeft('James', 10, '-=');

// '-=-=-James'

Str.padLeft('James', 10);

// '     James'
```
### padRight
The `padRight` function wraps the right side of a string with another string until the final string reaches the desired length:
```js
Str.padRight('James', 10, '-');

// 'James-----'

Str.padRight('James', 10);

// 'James     '
```
### parseCallback
The `parseCallback` function parse to an array a `Class@method` style callback into class and method:
```js
Str.parseCallback('Class@method');

// ['Class', 'method']
```
### password
The `password` method may be used to generate a secure, random password of a given length. The password will consist 
of a combination of letters, numbers, symbols, and spaces. By default, passwords are 32 characters long.
```js
Str.password();

// 'EbJo2vE-AS:U,$%_gkrV4n,q~1xy/-_4'

Str.password(12);

// 'qwuar>#V|i]N'
```
### random
The `random` function generates a random string of the specified length:
```js
Str.random(40);
```
### createRandomStringsUsing
The `createRandomStringsUsing` function allows to intercept and control the random string generation.
```js
Str.createRandomStringsUsing((length) => `xyz|${length}`);
Str.random(7);

// 'xyz:7'
```
### createRandomStringsUsingSequence
The `createRandomStringsUsingSequence` function allows to set a sequence that will be used to generate random strings.
```js
Str.createRandomStringsUsingSequence({0: 'x', 2: 'y', 3: 'z'});

Str.random();
// 'x'
Str.random();
// random String
Str.random();
// 'y'
```
### createRandomStringsNormally
The `createRandomStringsNormally` function resets to default random string generator.
```js
Str.createRandomStringsUsing((length) => `xyz|${length}`);
Str.createRandomStringsNormally();
Str.random(7);

// random 7 characters
```
### repeat
The `repeat` function repeats the given value N times:
```js
Str.repeat('a', '5');

// 'aaaaa'
```
### replaceArray
The `replaceArray` function replaces a given value in the string sequentially using an array:
```js
Str.replaceArray('?', ['8:30', '9:00'], 'The event will take place between ? and ?');

// 'The event will take place between 8:30 and 9:00'
```
### replace
The `replace` function replaces a given string within the string:
```js
Str.replace('6.x', '7.x', 'Laravel 6.x');

// 'Laravel 7.x'
```

### replaceEnd

The `replaceEnd` function replaces the last occurrence of the given value only if the value appears at the start of the string:

```js
Str.replaceEnd('World', 'Laravel', 'Hello World');

// Hello Laravel
```

### replaceFirst
The `replaceFirst` function replaces the first occurrence of a given value in a string:
```js
Str.replaceFirst('the', 'a', 'the quick brown fox jumps over the lazy dog');

// 'a quick brown fox jumps over the lazy dog'
```
### replaceLast
The `replaceLast` function replaces the last occurrence of a given value in a string:
```js
Str.replaceLast('the', 'a', 'the quick brown fox jumps over the lazy dog');

// 'the quick brown fox jumps over a lazy dog'
```

### replaceStart

The `replaceStart` function replaces the first occurrence of the given value only if the value appears at the start of the string:

```js
Str.replaceStart('Hello', 'Laravel', 'Hello World');

// Laravel World
```

### remove
The `remove` function removes the given value or array of values from the string:
```js
Str.remove('quite', 'Arkansas is quite beautiful!');

// 'Arkansas is beautiful!'
```
You may also pass `false` as a third parameter to ignore case when removing strings.
### reverse
The `reverse` function reverses the given string:
```js
Str.reverse('Hello World');

// 'dlroW olleH'
```
### start
The `start` function adds a single instance of the given value to a string if it does not already start with that value:
```js
Str.start('this/string', '/');

// '/this/string'

Str.start('/this/string', '/');

// '/this/string'
```
### upper
The `upper` function converts the given string to uppercase:
```js
Str.upper('laravel');

// 'LARAVEL'
```
### take
The `take` function returns a specified number of characters from the beginning of a string:
```js
Str.take('Build something amazing!', 5);

// 'Build'
```
### title
The `title` function converts the given string to `Title Case`:
```js
Str.title('a nice title uses the correct case');

// 'A Nice Title Uses The Correct Case'
```
### headline
The `headline` function will convert strings delimited by casing, hyphens, or underscores into a space delimited string with each word's first letter capitalized:
```js
Str.headline('steve_jobs');

// 'Steve Jobs'
Str.headline('EmailNotificationSent');

// 'Email Notification Sent'
```
### slug
The `slug` function generates a URL friendly "slug" from the given string:
```js
Str.slug('Laravel Framework', '-');

// 'laravel-framework'
```
### snake
The `snake` function converts the given string to `snake_case`:
```js
Str.snake('fooBar');

// 'foo_bar'
```
### squish
The `squish` function removes all extraneous white space from a string, including extraneous white space between words:
```js
Str.squish('    laravel    framework    ');

// 'laravel framework'
```
### startsWith
The `startsWith` function determines if the given string begins with the given value:
```js
Str.startsWith('This is my name', 'This');

// true
```
### stripTags
The `stripTags` function strips HTML and PHP tags from the given string:
```js
Str.stripTags('before<br>after');

// 'beforeafter'
```
### studly
The `studly` function converts the given string to `StudlyCase`:
```js
Str.studly('foo_bar');

// 'FooBar'
```
### substr
The `substr` function returns the portion of string specified by the start and length parameters:
```js
Str.substr('The Laravel Framework', 4, 7);

// 'Laravel'
```
### substrCount
The `substrCount` function returns the number of occurrences of a given value in the given string:
```js
Str.substrCount('If you like ice cream, you will like snow cones.', 'like');

// 2
```
### substrReplace
The `substrReplace` function replaces text within a portion of a string, starting at the position specified by the second argument
and replacing the number of characters specified by the fourth argument. Passing `0` to the function's fourth argument
will insert the string at the specified position without replacing any of the existing characters in the string:
```js
Str.substrReplace('1300', ':', 2);

// '13':

Str.substrReplace('The Framework', ' Laravel', 3, 0);

// 'The Laravel Framework'
```
### swap
The `swap` function replaces multiple values in the string similar to PHP `strtr` function:
```js
Str.swap({
    'Tacos': 'Burritos',
    'great': 'fantastic',
}, 'Tacos are great!');

// 'Burritos are fantastic!'
```
### trim
The `trim` function trims the given string:
```js
Str.trim('  Laravel  ');

// 'Laravel'

Str.trim('/Laravel/', '/');

// 'Laravel'
```
### ltrim
The `ltrim` function trims the left side of the string:
```js
Str.ltrim('  Laravel  ');

// 'Laravel  '

Str.ltrim('/Laravel/', '/');

// 'Laravel/'
```
### rtrim
The `rtrim` function trims the right side of the given string:
```js
Str.trim('  Laravel  ');

// '  Laravel'

Str.rtrim('/Laravel/', '/');

// '/Laravel'
```
### lcfirst
The `lcfirst` function returns the given string with the first character lowercase:
```js
Str.lcfirst('Foo Bar');

// 'foo Bar'
```
### ucfirst
The `ucfirst` function returns the given string with the first character capitalized:
```js
Str.ucfirst('foo bar');

// 'Foo bar'
```
### ucsplit
The `ucsplit` function splits the given string into an array by uppercase characters:
```js
Str.ucsplit('Foo Bar');

// ['Foo', 'Bar']
```
### wordCount
The `wordCount` function returns the number of words that a string contains:
```js
Str.wordCount('Hello, world!'); 

// 2
```
### wordWrap
The `wordWrap` function wraps a string to a given number of characters:
```js
Str.wordWrap('The quick brown fox jumped over the lazy dog', 20, "<br />\n");

/*
The quick brown fox<br />
jumped over the lazy<br />
dog.
*/
```
### uuid
The `uuid` function generates a UUID (version 4):
```js
Str.uuid();

// Stringable object
```
### ulid
The `ulid` function generates a ULID:
```js
Str.ulid();

// Stringable object
```
### preg_quote
The `preg_quote` function quote regular expression characters:
```js
Str.preg_quote('*RRRING* Hello?');

// '\*RRRING\* Hello\?'
```
### unwrap
The `unwrap` function removes the specified strings from the beginning and end of a given string:
```js
Str.unwrap('-Laravel-', '- ');

// 'Laravel'
```
### flushCache
The `flushCache` function removes all strings from the casing caches.
```js
Str.flushCache();
```
