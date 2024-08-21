## Functions

### after
The `after` function returns everything after the given value in a string.
The entire string will be returned if the value does not exist within the string:
```js
after('This is my name', 'This is');

// ' my name'
```
### afterLast
The `afterLast` function returns everything after the last occurrence of the given value in a string.
The entire string will be returned if the value does not exist within the string:
```js
afterLast('App\\Http\\Controllers\\Controller', '\\');

// 'Controller'
```
### ascii
The `ascii` function will attempt to transliterate the string into an ASCII value:
```js
ascii('ü');

// 'u'
```
### before
The `before` function returns everything before the given value in a string:
```js
before('This is my name', 'my name');

// 'This is '
```
### beforeLast
The `beforeLast` function returns everything before the last occurrence of the given value in a string:
```js
beforeLast('This is my name', 'is');

// 'This '
```
### between
The `between` function returns the portion of a string between two values:
```js
between('This is my name', 'This', 'name');

// ' is my '
```
### betweenFirst
The `betweenFirst` function returns the smallest possible portion of a string between two values:
```js
betweenFirst('[a] bc [d]', '[', ']');

// 'a'
```
### charAt
The `charAt` function allows to get a character by index from a multibyte string:
```js
charAt('Hello, world!', 1);

// 'e'
```
### contains
The `contains` function determines if the given string contains the given value. This function is case-sensitive:
```js
contains('This is my name', 'my');

// true
```
You may also pass an array of values to determine if the given string contains any of the values in the array:
```js
contains('This is my name', ['my', 'foo']);

// true
```
### containsAll
The `containsAll` function determines if the given string contains all the values in the given array:
```js
containsAll('This is my name', ['my', 'name']);

// true
```
### endsWith
The `endsWith` function determines if the given string ends with the given value:
```js
endsWith('This is my name', 'name');

// true
```
You may also pass an array of values to determine if the given string ends with any of the values in the array:
```js
endsWith('This is my name', ['name', 'foo']);

// true

endsWith('This is my name', ['this', 'foo']);

// false
```
### excerpt
The `excerpt` function extracts an excerpt from the string that matches the first instance of a phrase within that string:
```js
excerpt('This is my name', 'my', {
    radius: 3 
});

// '...is my na...'
```
The `radius` option, which defaults to `100`, allows you to define the number of characters that should appear on each side of the truncated string.

In addition, you may use the `omission` option to change the string that will be prepended and appended to the truncated string:
```js
excerpt('This is my name', 'name', {
    radius: 3,
    omission: '(...) '
});

// '(...) my name'
```
### explode
The `explode` function splits the string by the given delimiter and returns an array containing each section of the split string:
```js
explode('foo bar baz', ' ');

// ['foo', 'bar', 'baz']
```
### finish
The `finish` function adds a single instance of the given value to a string if it does not already end with that value:
```js
finish('this/string', '/');

// 'this/string/'

finish('this/string/', '/');

// 'this/string/'
```
### headline
The `headline` function will convert strings delimited by casing, hyphens, or underscores into a space delimited string with each word's first letter capitalized:
```js
headline('steve_jobs');

// 'Steve Jobs'
headline('EmailNotificationSent');

// 'Email Notification Sent'
```
### is
The `is` function determines if a given string matches a given pattern. Asterisks may be used as wildcard values
```js
is('foo*', 'foobar');

// true

is(/baz*/, 'foobar');

// false
```
### isAscii
The `isAscii` function determines if a given string is an ASCII string:
```js
isAscii('Taylor');

// true

isAscii('ü');

// false
```
### isJson
The `isJson` function determines if a given string is valid JSON:
```js
isJson('[1,2,3]');

// true

isJson('{"first": "John", "last": "Doe"}');

// true

isJson('{first: "John", last: "Doe"}');

// false
```
### isUlid
The `isUlid` function determines if a given string is a valid ULID:
```js
isUlid('01ARZ3NDEKTSV4RRFFQ69G5FAV');

// true

isUlid('Taylor');

// false
```
### isUrl
The `isUrl` function determines if a given string is a valid URL:
```js
isUrl('https://example.com');

// true

isUrl('example');

// false
```
### isUuid
The `isUuid` function determines if a given string is a UUID:
```js
isUuid('5ace9ab9-e9cf-4ec6-a19d-5881212a452c');

// true

isUuid('Taylor');

// false
```
### isMatch
The `isMatch` function will return `true` if the string matches a given regular expression:
```js
isMatch(/foo (.*)/, 'foo bar');

// true

isMatch(/foo (.*)/, 'laravel');

// false
```
### lcfirst
The `lcfirst` function returns the given string with the first character lowercase:
```js
lcfirst('Foo Bar');

// 'foo Bar'
```
### length
The `length` function returns the length of the given string:
```js
length('Laravel');

// 7
```

### limit

The `limit` function truncates the given string to the specified length:

```js
limit('The quick brown fox jumps over the lazy dog', 20);

// 'The quick brown fox...'
```

You may also pass a third argument to change the string that will be appended to the end of the truncated string:

```js
limit('The quick brown fox jumps over the lazy dog', 20, ' (...)');

// 'The quick brown fox (...)'
```

If you want to keep whole words when truncating a string, you can use the fourth argument.
When this argument is true, the string will be truncated to the nearest full word boundary:

```js
limit('The quick brown fox jumps over the lazy dog', 12, '...', true);

// 'The quick...'
```

### lower
The `lower` function converts the given string to lowercase:
```js
lower('LARAVEL');

// 'laravel'
```
### ltrim
The `ltrim` function trims the left side of the string:
```js
ltrim('  Laravel  ');

// 'Laravel  '

ltrim('/Laravel/', '/');

// 'Laravel/'
```
### mask
The `mask` function masks a portion of a string with a repeated character, and may be used to obfuscate
segments of strings such as email addresses and phone numbers:
```js
mask('taylor@example.com', '*', 3);

// 'tay***************'
```
If needed, you provide a negative number as the third argument to the `mask` function, which will instruct the function
to begin masking at the given distance from the end of the string:
```js
mask('taylor@example.com', '*', -15, 3);

// 'tay***@example.com'
```
### match
The `match` function will return the portion of a string that matches a given regular expression pattern:
```js
match('bar', 'foo bar');

// 'bar'

match(/foo (.*)/, 'foo bar');

// 'bar'
```
### matchAll
The `matchAll` function will return an array containing the portions of a string that match a given regular expression pattern:
```js
matchAll('bar', 'bar foo bar');

// ['bar', 'bar']
```
If you specify a matching group within the expression, package will return an array of that group's matches:
```js
matchAll(/f(\w*)/, 'bar fun bar fly');

// ['un', 'ly']
```
### padBoth
The `padBoth` function wraps both sides of a string with another string until the final string reaches the desired length:
```js
padBoth('James', 10, '_');

// '__James___'

padBoth('James', 10);

// '  James   '
```
### padLeft
The `padLeft` function wraps the left side of a string with another string until the final string reaches the desired length:
```js
padLeft('James', 10, '-=');

// '-=-=-James'

padLeft('James', 10);

// '     James'
```
### padRight
The `padRight` function wraps the right side of a string with another string until the final string reaches the desired length:
```js
padRight('James', 10, '-');

// 'James-----'

padRight('James', 10);

// 'James     '
```
### parseCallback
The `parseCallback` function parse to an array a `Class@method` style callback into class and method:
```js
parseCallback('Class@method');

// ['Class', 'method']
```
### preg_quote
The `preg_quote` function quote regular expression characters:
```js
preg_quote('*RRRING* Hello?');

// '\*RRRING\* Hello\?'
```
### remove
The `remove` function removes the given value or array of values from the string:
```js
remove('quite', 'Arkansas is quite beautiful!');

// 'Arkansas is beautiful!'
```
### repeat
The `repeat` function repeats the given value N times:
```js
repeat('a', '5');

// 'aaaaa'
```
### replace
The `replace` function replaces a given string within the string:
```js
replace('6.x', '7.x', 'Laravel 6.x');

// 'Laravel 7.x'
```

The `replace` function also accepts a `caseSensitive` argument. By default, the `replace` function is case-sensitive:

```js
replace('10.X', '11.x', 'Laravel 10.x', false);

// 'Laravel 11.x'
```
### replaceArray
The `replaceArray` function replaces a given value in the string sequentially using an array:
```js
replaceArray('?', ['8:30', '9:00'], 'The event will take place between ? and ?');

// 'The event will take place between 8:30 and 9:00'
```
### replaceFirst
The `replaceFirst` function replaces the first occurrence of a given value in a string:
```js
replaceFirst('the', 'a', 'the quick brown fox jumps over the lazy dog');

// 'a quick brown fox jumps over the lazy dog'
```
### replaceLast
The `replaceLast` function replaces the last occurrence of a given value in a string:
```js
replaceLast('the', 'a', 'the quick brown fox jumps over the lazy dog');

// 'the quick brown fox jumps over a lazy dog'
```

You may also pass `false` as a third parameter to ignore case when removing strings.
### reverse
The `reverse` function reverses the given string:
```js
reverse('Hello World');

// 'dlroW olleH'
```
### rtrim
The `rtrim` function trims the right side of the given string:
```js
trim('  Laravel  ');

// '  Laravel'

rtrim('/Laravel/', '/');

// '/Laravel'
```
### slug
The `slug` function generates a URL friendly "slug" from the given string:
```js
slug('Laravel Framework', '-');

// 'laravel-framework'
```
### squish
The `squish` function removes all extraneous white space from a string, including extraneous white space between words:
```js
squish('    laravel    framework    ');

// 'laravel framework'
```
### start
The `start` function adds a single instance of the given value to a string if it does not already start with that value:
```js
start('this/string', '/');

// '/this/string'

start('/this/string', '/');

// '/this/string'
```
### startsWith
The `startsWith` function determines if the given string begins with the given value:
```js
startsWith('This is my name', 'This');

// true
```
### stripTags
The `stripTags` function strips HTML and PHP tags from the given string:
```js
stripTags('before<br>after');

// 'beforeafter'
```
### substr
The `substr` function returns the portion of string specified by the start and length parameters:
```js
substr('The Laravel Framework', 4, 7);

// 'Laravel'
```
### substrCount
The `substrCount` function returns the number of occurrences of a given value in the given string:
```js
substrCount('If you like ice cream, you will like snow cones.', 'like');

// 2
```
### substrReplace
The `substrReplace` function replaces text within a portion of a string, starting at the position specified by the second argument
and replacing the number of characters specified by the fourth argument. Passing `0` to the function's fourth argument
will insert the string at the specified position without replacing any of the existing characters in the string:
```js
substrReplace('1300', ':', 2);

// '13':

substrReplace('The Framework', ' Laravel', 3, 0);

// 'The Laravel Framework'
```
### swap
The `swap` function replaces multiple values in the string similar to PHP `strtr` function:
```js
swap({
    'Tacos': 'Burritos',
    'great': 'fantastic',
}, 'Tacos are great!');

// 'Burritos are fantastic!'
```
### take
The `take` function returns a specified number of characters from the beginning of a string:
```js
take('Build something amazing!', 5);

// 'Build'
```
### title
The `title` function converts the given string to `Title Case`:
```js
title('a nice title uses the correct case');

// 'A Nice Title Uses The Correct Case'
```
### trim
The `trim` function trims the given string:
```js
trim('  Laravel  ');

// 'Laravel'

trim('/Laravel/', '/');

// 'Laravel'
```
### ucfirst
The `ucfirst` function returns the given string with the first character capitalized:
```js
ucfirst('foo bar');

// 'Foo bar'
```
### ucsplit
The `ucsplit` function splits the given string into an array by uppercase characters:
```js
ucsplit('Foo Bar');

// ['Foo', 'Bar']
```
### unwrap
The `unwrap` function removes the specified strings from the beginning and end of a given string:
```js
unwrap('-Laravel-', '- ');

// 'Laravel'
```
### upper
The `upper` function converts the given string to uppercase:
```js
upper('laravel');

// 'LARAVEL'
```
### wordCount
The `wordCount` function returns the number of words that a string contains:
```js
wordCount('Hello, world!'); 

// 2
```
### wordWrap
The `wordWrap` function wraps a string to a given number of characters:
```js
wordWrap('The quick brown fox jumped over the lazy dog', 20, "<br />\n");

/*
The quick brown fox<br />
jumped over the lazy<br />
dog.
*/
```
### words
The `words` function limits the number of words in a string. If necessary, you may specify an additional string that will be appended to the truncated string:
```js
words('Perfectly balanced, as all things should be.', 3, ' >>>');

// 'Perfectly balanced, as >>>'
```
### wrap
The `wrap` function wraps the string with the given strings:
```js
wrap('is', 'This ', ' me!');

// 'This is me!'
```
