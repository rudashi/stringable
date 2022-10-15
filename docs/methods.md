## Fluent Methods

- [after](#after)
- [afterLast](#afterlast)
- [append](#append)
- [ascii](#ascii)
- [basename](#basename)
- [before](#before)
- [beforeLast](#beforelast)
- [between](#between)
- [betweenFirst](#betweenfirst)
- [camel](#camel)
- [contains](#contains)
- [containsAll](#containsall)
- [dirname](#dirname)
- [dd](#dd)
- [dump](#dump)
- [endsWith](#endswith)
- [excerpt](#excerpt)
- [exactly](#exactly)
- [explode](#explode)
- [finish](#finish)
- [flushCache](#flushcache)
- [headline](#headline)
- [is](#is)
- [isAscii](#isascii)
- [isEmpty](#isempty)
- [isNotEmpty](#isnotempty)
- [isJson](#isjson)
- [isUlid](#isulid)
- [isUuid](#isuuid)
- [kebab](#kebab)
- [lcfirst](#lcfirst)
- [length](#length)
- [limit](#limit)
- [lower](#lower)
- [ltrim](#ltrim)
- [mask](#mask)
- [match](#match)
- [matchAll](#matchall)
- [newLine](#newline)
- [padBoth](#padboth)
- [padLeft](#padleft)
- [padRight](#padright)
- [parseCallback](#parsecallback)
- [pipe](#pipe)
- [prepend](#prepend)
- [remove](#remove)
- [repeat](#repeat)
- [replace](#replace)
- [replaceArray](#replacearray)
- [replaceFirst](#replacefirst)
- [replaceLast](#replacelast)
- [replaceMatches](#replacematches)
- [reverse](#reverse)
- [rtrim](#rtrim)
- [scan](#scan)
- [slug](#slug)
- [snake](#snake)
- [split](#split)
- [squish](#squish)
- [start](#start)
- [startsWith](#startswith)
- [stripTags](#striptags)
- [studly](#studly)
- [substr](#substr)
- [substrCount](#substrcount)
- [substrReplace](#substrreplace)
- [swap](#swap)
- [tap](#tap)
- [test](#test)
- [title](#title)
- [toHtmlString](#tohtmlstring)
- [toString](#tostring)
- [trim](#trim)
- [ucfirst](#ucfirst)
- [ucsplit](#ucsplit)
- [upper](#upper)
- [when](#when)
- [whenContains](#whencontains)
- [whenContainsAll](#whencontainsall)
- [whenEmpty](#whenempty)
- [whenNotEmpty](#whennotempty)
- [whenStartsWith](#whenstartswith)
- [whenEndsWith](#whenendswith)
- [whenExactly](#whenexactly)
- [whenNotExactly ](#whennotexactly)
- [whenIs](#whenis)
- [whenIsAscii](#whenisascii)
- [whenIsUuid](#whenisuuid)
- [whenTest](#whentest)
- [wordCount](#wordcount)
- [words](#words)
- [wrap](#wrap)
- [value](#value)

## Fluent Strings
### after()
The `after` method returns everything after the given value in a string.
The entire string will be returned if the value does not exist within the string:
```js
Stringable.of('This is my name').after('This is');

// ' my name'
```
### afterLast()
The `afterLast` method returns everything after the last occurrence of the given value in a string.
The entire string will be returned if the value does not exist within the string:
```js
Stringable.of('App\\Http\\Controllers\\Controller').afterLast('\\');

// 'Controller'
```
### append()
The `append` method appends the given values to the string:
```js
Stringable.of('Taylor').append(' Otwell');

// 'Taylor Otwell'
```
### ascii()
The `ascii` method will attempt to transliterate the string into an ASCII value:
```js
Stringable.of('ü').ascii();

// 'u'
```
### basename()
The `basename` method will return the trailing name component of the given string:
```js
Stringable.of('/foo/bar/baz').basename();

// 'baz'
```
If needed, you may provide an "extension" that will be removed from the trailing component:
```js
Stringable.of('/foo/bar/baz.jpg').basename('.jpg');

// 'baz'
```
### before()
The `before` method returns everything before the given value in a string:
```js
Stringable.of('This is my name').before('my name');

// 'This is '
```
### beforeLast()
The `beforeLast` method returns everything before the last occurrence of the given value in a string:
```js
Stringable.of('This is my name').beforeLast('is');

// 'This '
```
### between()
The `between` method returns the portion of a string between two values:
```js
Stringable.of('This is my name').between('This', 'name');

// ' is my '
```
### betweenFirst()
The `betweenFirst` method returns the smallest possible portion of a string between two values:
```js
Stringable.of('[a] bc [d]').betweenFirst('[', ']');

// 'a'
```
### camel()
The `camel` method converts the given string to `camelCase`:
```js
Stringable.of('foo_bar').camel();

// 'fooBar'
```
### contains()
The `contains` method determines if the given string contains the given value. This method is case-sensitive:
```js
Stringable.of('This is my name').contains('my');

// true
```
You may also pass an array of values to determine if the given string contains any of the values in the array:
```js
Stringable.of('This is my name').contains(['my', 'foo']);

// true
```
### containsAll()
The `containsAll` method determines if the given string contains all the values in the given array:
```js
Stringable.of('This is my name').containsAll(['my', 'name']);

// true
```
### dirname()
The `dirname` method returns the parent directory portion of the given string:
```js
Stringable.of('/foo/bar/baz').dirname();

// '/foo/bar'
```
If necessary, you may specify how many directory levels you wish to trim from the string:
```js
Stringable.of('/foo/bar/baz').dirname(2);

// '/foo'
```
### dd()
The `dd` method dumps the string and ends execution of the script:
```js
Stringable.of('This is my name').dd();

// Error: 'This is my name'
```
If you do not want to halt the execution of your script, use the [dump](#dump) method instead.
### dump()
The `dump` method dumps the string:
```js
Stringable.of('This is my name').dump();

// 'This is my name'
```
If you want to stop executing the script after dumping the variables, use the [dd](#dd) method instead.
### excerpt()
The `excerpt` method extracts an excerpt from the string that matches the first instance of a phrase within that string:
```js
Stringable.of('This is my name').excerpt('my', {
    radius: 3 
});

// '...is my na...'
```
The `radius` option, which defaults to `100`, allows you to define the number of characters that should appear on each side of the truncated string.

In addition, you may use the `omission` option to change the string that will be prepended and appended to the truncated string:
```js
Stringable.of('This is my name').excerpt('name', {
    radius: 3,
    omission: '(...) '
});

// '(...) my name'
```
### endsWith()
The `endsWith` method determines if the given string ends with the given value:
```js
Stringable.of('This is my name').endsWith('name');

// true
```
You may also pass an array of values to determine if the given string ends with any of the values in the array:
```js
Stringable.of('This is my name').endsWith(['name', 'foo']);

// true

Stringable.of('This is my name').endsWith(['this', 'foo']);

// false
```
### exactly()
The `exactly` method determines if the given string is an exact match with another string:
```js
Stringable.of('Laravel').exactly('Laravel');

// true
```
### explode()
The `explode` method splits the string by the given delimiter and returns an array containing each section of the split string:
```js
Stringable.of('foo bar baz').explode(' ');

// ['foo', 'bar', 'baz']
```
### finish()
The `finish` method adds a single instance of the given value to a string if it does not already end with that value:
```js
Stringable.of('this/string').finish('/');

// 'this/string/'

Stringable.of('this/string/').finish('/');

// 'this/string/'
```
### flushCache()
The `flushCache` method removes all strings from the casing caches.
```js
Stringable.flushCache();
```
### headline()
The `headline` method will convert strings delimited by casing, hyphens, or underscores into a space delimited string with each word's first letter capitalized:
```js
Stringable.of('steve_jobs').headline();

// 'Steve Jobs'
Stringable.of('EmailNotificationSent').headline();

// 'Email Notification Sent'
```
### is()
The `is` method determines if a given string matches a given pattern. Asterisks may be used as wildcard values
```js
Stringable.of('foobar').is('foo*');

// true

Stringable.of('foobar').is(/baz*/);

// false
```
### isAscii()
The `isAscii` method determines if a given string is an ASCII string:
```js
Stringable.of('Taylor').isAscii();

// true

Stringable.of('ü').isAscii();

// false
```
### isEmpty()
The `isEmpty` method determines if the given string is empty:
```js
Stringable.of('  ').trim().isEmpty();

// true

Stringable.of('Laravel').trim().isEmpty();

// false
```
### isNotEmpty()
The `isNotEmpty` method determines if the given string is not empty:
```js
Stringable.of('  ').trim().isNotEmpty();

// false

Stringable.of('Laravel').trim().isNotEmpty();

// true
```
### isJson()
The `isJson` method determines if a given string is valid JSON:
```js
Stringable.of('[1,2,3]').isJson();

// true

Stringable.of('{"first": "John", "last": "Doe"}').isJson();

// true

Stringable.of('{first: "John", last: "Doe"}').isJson();

// false
```
### isUlid()
The `isUlid` method determines if a given string is a valid ULID:
```js
Stringable.of('01ARZ3NDEKTSV4RRFFQ69G5FAV').isUlid();

// true

Stringable.of('Taylor').isUlid();

// false
```
### isUuid()
The `isUuid` method determines if a given string is a UUID:
```js
Stringable.of('5ace9ab9-e9cf-4ec6-a19d-5881212a452c').isUuid();

// true

Stringable.of('Taylor').isUuid();

// false
```
### kebab()
The `kebab` method converts the given string to `kebab-case`:
```js
Stringable.of('fooBar').kebab();

// 'foo-bar'
```
### lcfirst()
The `lcfirst` method returns the given string with the first character lowercased:
```js
Stringable.of('Foo Bar').lcfirst();

// 'foo Bar'
```
### length()
The `length` method returns the length of the given string:
```js
Stringable.of('Laravel').length();

// 7
```
### limit()
The `limit` method truncates the given string to the specified length:

```js
Stringable.of('The quick brown fox jumps over the lazy dog').limit(20);

// 'The quick brown fox...'
```
You may also pass a second argument to change the string that will be appended to the end of the truncated string:
```js
Stringable.of('The quick brown fox jumps over the lazy dog').limit(20, ' (...)');

// 'The quick brown fox (...)'
```
### lower()
The `lower` method converts the given string to lowercase:
```js
Stringable.of('LARAVEL').lower();

// 'laravel'
```
### ltrim()
The `ltrim` method trims the left side of the string:
```js
Stringable.of('  Laravel  ').ltrim();

// 'Laravel  '

Stringable.of('/Laravel/').ltrim('/');

// 'Laravel/'
```
### markdown()
The `markdown` method converts GitHub flavored Markdown into HTML:
```js
Stringable.of('# Laravel').markdown();

// <h1>Laravel</h1>

Stringable.of('# Taylor <b>Otwell</b>').markdown({'html_input': 'strip'});

// <h1>Taylor Otwell</h1>
```
### inlineMarkdown()
The `inlineMarkdown` method converts GitHub flavored Markdown into inline HTML. 
However, unlike the markdown method, it does not wrap all generated HTML in a block-level element:
```js
Stringable.of('**Laravel**').inlineMarkdown();

// <strong>Laravel</strong>
```
### mask()
The `mask` method masks a portion of a string with a repeated character, and may be used to obfuscate
segments of strings such as email addresses and phone numbers:
```js
Stringable.of('taylor@example.com').mask('*', 3);

// 'tay***************'
```
If needed, you provide a negative number as the third argument to the `mask` method, which will instruct the method
to begin masking at the given distance from the end of the string:
```js
Stringable.of('taylor@example.com').mask('*', -15, 3);

// 'tay***@example.com'
```
### match()
The `match` method will return the portion of a string that matches a given regular expression pattern:
```js
Stringable.of('foo bar').match('bar');

// 'bar'

Stringable.of('foo bar').match(/foo (.*)/);

// 'bar'
```
### matchAll()
The `matchAll` method will return an array containing the portions of a string that match a given regular expression pattern:
```js
Stringable.of('bar foo bar').matchAll('bar');

// ['bar', 'bar']
```
If you specify a matching group within the expression, package will return an array of that group's matches:
```js
Stringable.of('bar fun bar fly').matchAll(/f(\w*)/);

// ['un', 'ly']
```
If no matches are found, an empty array will be returned.
### newLine()
The `newLine` method appends an "end of line" character to a string:
```js
Stringable.of('Laravel').newLine().append('Framework');

// 'Laravel
//  Framework'
```
### padBoth()
The `padBoth` method wraps both sides of a string with another string until the final string reaches the desired length:
```js
Stringable.of('James').padBoth(10, '_');

// '__James___'

Stringable.of('James').padBoth(10);

// '  James   '
```
### padLeft()
The `padLeft` method wraps the left side of a string with another string until the final string reaches the desired length:
```js
Stringable.of('James').padLeft(10, '-=');

// '-=-=-James'

Stringable.of('James').padLeft(10);

// '     James'
```
### padRight()
The `padRight` method wraps the right side of a string with another string until the final string reaches the desired length:
```js
Stringable.of('James').padRight(10, '-');

// 'James-----'

Stringable.of('James').padRight(10);

// 'James     '
```
### parseCallback()
The `parseCallback` method parse to an array a `Class@method` style callback into class and method:
```js
Stringable.of('Class@method').parseCallback();

// ['Class', 'method']
```
### pipe()
The `pipe` method allows you to transform the string by passing its current value to the given callable:
```js
Stringable.of('Laravel').pipe('md5').prepend('Checksum: ');

// 'Checksum: a5c95b86291ea299fcbe64458ed12702'

Stringable.of('foo').pipe(str => 'bar');

// 'bar'
```
### plural()
Not implemented.
### prepend()
The `prepend` method prepends the given values onto the string:
```js
Stringable.of('Framework').prepend('Laravel ');

// 'Laravel Framework'
```
### remove()
The `remove` method removes the given value or array of values from the string:
```js
Stringable.of('Arkansas is quite beautiful!').remove('quite');

// 'Arkansas is beautiful!'
```
You may also pass `false` as a second parameter to ignore case when removing strings.
### repeat()
The `repeat` method repeats the given value N times:
```js
Stringable.of('a').repeat('5');

// 'aaaaa'
```
### replace()
The `replace` method replaces a given string within the string:
```js
Stringable.of('Laravel 6.x').replace('6.x', '7.x');

// 'Laravel 7.x'
```
### replaceArray()
The `replaceArray` method replaces a given value in the string sequentially using an array:
```js
Stringable.of('The event will take place between ? and ?').replaceArray('?', ['8:30', '9:00']);

// 'The event will take place between 8:30 and 9:00'
```
### replaceFirst()
The `replaceFirst` method replaces the first occurrence of a given value in a string:
```js
Stringable.of('the quick brown fox jumps over the lazy dog').replaceFirst('the', 'a');

// 'a quick brown fox jumps over the lazy dog'
```
### replaceLast()
The `replaceLast` method replaces the last occurrence of a given value in a string:
```js
Stringable.of('the quick brown fox jumps over the lazy dog').replaceLast('the', 'a');

// 'the quick brown fox jumps over a lazy dog'
```
### replaceMatches()
The `replaceMatches` method replaces all portions of a string matching a pattern with the given replacement string:
```js
Stringable.of('(+1) 501-555-1000').replaceMatches(/[^A-Za-z0-9]++/, '')

// '15015551000'
```
The `replaceMatches` method also accepts a closure that will be invoked with each portion of the string matching the given pattern,
allowing you to perform the replacement logic within the closure and return the replaced value:
```js
Stringable.of('123').replaceMatches(/\d/, match => '['+match[0]+']');

// '[1][2][3]'
```
### reverse()
The `reverse` method reverses the given string:
```js
Stringable.of('Hello World').reverse();

// 'dlroW olleH'
```
### rtrim()
The `rtrim` method trims the right side of the given string:
```js
Stringable.of('  Laravel  ').rtrim();

// '  Laravel'

Stringable.of('/Laravel/').rtrim('/');

// '/Laravel'
```
### scan()
The `scan` method parses input from a string into an array similar to [scan PHP function](https://www.php.net/manual/en/function.sscanf.php):
```js
Stringable.of('filename.jpg').scan('%[^.].%s');

// ['filename', 'jpg']
```
### singular()
Not implemented.
### slug()
The `slug` method generates a URL friendly "slug" from the given string:
```js
Stringable.of('Laravel Framework').slug('-');

// 'laravel-framework'
```
### snake()
The `snake` method converts the given string to `snake_case`:
```js
Stringable.of('fooBar').snake();

// 'foo_bar'
```
### split()
The `split` method splits a string into an array using a regular expression:
```js
Stringable.of('one, two, three').split(/[\s,]+/);

// ["one", "two", "three"]
```
### squish()
The `squish` method removes all extraneous white space from a string, including extraneous white space between words:
```js
Stringable.of('    laravel    framework    ').squish();

// 'laravel framework'
```
### start()
The `start` method adds a single instance of the given value to a string if it does not already start with that value:
```js
Stringable.of('this/string').start('/');

// '/this/string'

Stringable.of('/this/string').start('/');

// '/this/string'
```
### startsWith()
The `startsWith` method determines if the given string begins with the given value:
```js
Stringable.of('This is my name').startsWith('This');

// true
```
### stripTags()
The `stripTags` method strips HTML and PHP tags from the given string:
```js
Stringable.of('before<br>after').stripTags();

// 'beforeafter'
```
### studly()
The `studly` method converts the given string to `StudlyCase`:
```js
Stringable.of('foo_bar').studly();

// 'FooBar'
```
### substr()
The `substr` method returns the portion of the string specified by the given start and length parameters:
```js
Stringable.of('Laravel Framework').substr(8);

// 'Framework'

Stringable.of('Laravel Framework').substr(8, 5);

// 'Frame'
```
### substrCount()
The `substrCount` method returns the number of occurrences of a given value in the given string:
```js
Stringable.of('If you like ice cream, you will like snow cones.').substrCount('like');

// 2
```
### substrReplace()
The `substrReplace` method replaces text within a portion of a string, starting at the position specified by the second argument
and replacing the number of characters specified by the third argument. Passing `0` to the method's third argument
will insert the string at the specified position without replacing any of the existing characters in the string:
```js
Stringable.of('1300').substrReplace(':', 2);

// '13':

Stringable.of('The Framework').substrReplace(' Laravel', 3, 0);

// 'The Laravel Framework'
```
### swap()
The `swap` method replaces multiple values in the string similar to PHP `strtr` function:
```js
Stringable.of('Tacos are great!').swap({
    'Tacos': 'Burritos',
    'great': 'fantastic',
});

// 'Burritos are fantastic!'
```
### tap()
The `tap` method passes the string to the given closure, allowing you to examine and interact with the string while
not affecting the string itself. The original string is returned by the `tap` method regardless of what is returned by the closure:
```js
Stringable.of('Laravel')
    .append(' Framework')
    .tap((str) => {
        console.log('String after append: ' + str);
    })
    .upper();

// 'LARAVEL FRAMEWORK'
```
### test()
The `test` method determines if a string matches the given regular expression pattern:
```js
Stringable.of('Laravel Framework').test(/Laravel/);

// true
```
### title()
The `title` method converts the given string to `Title Case`:
```js
Stringable.of('a nice title uses the correct case').title();

// 'A Nice Title Uses The Correct Case'
```
### toHtmlString()
The `toHtmlString` method converts the string instance to an instance of `Element`, which may be displayed in HTML:
```js
Stringable.of('Nuno Maduro').toHtmlString();
```
### toString()
The `toString` method returns the underlying string value.
```js
Stringable.of('foo').toString();

// 'foo'
```
### toInteger()
The `toInteger` method returns string value as an integer.
```js
Stringable.of('123').toInteger();

// 123
```
### toFloat()
The `toFloat` method returns string value as a float.
```js
Stringable.of('1').toFloat();

// 1.0'
```
### toBoolean()
The `toBoolean` method returns string value as a boolean.
```js
Stringable.of('yes').toBoolean();

// true
```
### toDate()
The `toDate` method returns string value as a Date.
```js
Stringable.of('2020-01-01 16:30:25').toDate();

// Date(2020-01-01 16:30:25)
```
### trim()
The `trim` method trims the given string:
```js
Stringable.of('  Laravel  ').trim();

// 'Laravel'

Stringable.of('/Laravel/').trim('/');

// 'Laravel'
```
### ucfirst()
The `ucfirst` method returns the given string with the first character capitalized:
```js
Stringable.of('foo bar').ucfirst();

// 'Foo bar'
```
### ucsplit()
The `ucsplit` method splits the given string into an array by uppercase characters:
```js
Stringable.of('Foo Bar').ucsplit();

// ['Foo', 'Bar']
```
### upper()
The `upper` method converts the given string to uppercase:
```js
Stringable.of('laravel').upper();

// 'LARAVEL'
```
### when()
The `when` method invokes the given function if a given condition is `true`. The function will receive the fluent string instance:
```js
Stringable.of('Taylor').when(true, (str) => str.append(' Otwell'));

// 'Taylor Otwell'
```
If necessary, you may pass another function as the third parameter to `when` method. This function will execute if the condition parameter evaluates to `false`.
### whenContains()
The `whenContains` method invokes the given function if the string contains the given value. The function will receive the fluent string instance:
```js
Stringable.of('tony stark').whenContains('tony', (str) => str.title());

// 'Tony Stark'
```
If necessary, you may pass another function as the third parameter to `when` method. This function will execute if the string does not contain the given value.

You may also pass an array of values to determine if the given string contains any of the values in the array:
```js
Stringable.of('tony stark').whenContains(['tony', 'hulk'], (str) => str.title());

// 'Tony Stark'
```
### whenContainsAll()
The `whenContainsAll` method invokes the given function if the string contains all the given sub-strings.
The function will receive the fluent string instance:
```js
Stringable.of('tony stark').whenContainsAll(['tony', 'stark'], (str) => str.title());

// 'Tony Stark'
```
If necessary, you may pass another closure as the third parameter to `when` method.
This function will execute if the condition parameter evaluates to `false`.
### whenEmpty()
The `whenEmpty` method invokes the given function if the string is empty. If the function returns a value,
that value will also be returned by the `whenEmpty` method. If the function does not return a value, the fluent string instance will be returned:
```js
Stringable.of('').whenEmpty((str) => str.trim().prepend('Laravel'));

// 'Laravel'
```
### whenNotEmpty()
The `whenNotEmpty` method invokes the given function if the string is not empty. If the function returns a value,
that value will also be returned by the `whenNotEmpty` method. If the function does not return a value,
the fluent string instance will be returned:
```js
Stringable.of('Framework').whenNotEmpty(str => str.prepend('Laravel '));

// 'Laravel Framework'
```
### whenStartsWith()
The `whenStartsWith` method invokes the given function if the string starts with the given sub-string.
The function will receive the fluent string instance:
```js
Stringable.of('disney world').whenStartsWith('disney', (str) => str.title());

// 'Disney World'
```
### whenEndsWith()
The `whenEndsWith` method invokes the given function if the string ends with the given sub-string.
The function will receive the fluent string instance:
```js
Stringable.of('disney world').whenEndsWith('world', (str) => str.title());

// 'Disney World'
```
### whenExactly()
The `whenExactly` method invokes the given function if the string exactly matches the given string.
The function will receive the fluent string instance:
```js
Stringable.of('laravel').whenExactly('laravel', (str) => str.title());

// 'Laravel'
```
### whenNotExactly()
The `whenNotExactly` method invokes the given closure if the string does not exactly match the given string. 
The closure will receive the fluent string instance:
```js
Stringable.of('framework').whenNotExactly('laravel', (str) => str.title());

// 'Framework'
```
### whenIs()
The `whenIs` method invokes the given function if the string matches a given pattern. Asterisks may be used as wildcard values.
The function will receive the fluent string instance:
```js
Stringable.of('foo/bar').whenIs('foo/*', (str) => str.append('/baz'));

// 'foo/bar/baz'
```
### whenIsAscii()
The `whenIsAscii` method invokes the given function if the string is 7 bit ASCII.
The function will receive the fluent string instance:
```js
Stringable.of('A').whenIsAscii((str) => str.prepend('Ascii:'));

// 'Ascii: A'
```
### whenIsUuid()
The `whenIsUuid` method invokes the given function if the string is a valid UUID.
The function will receive the fluent string instance:
```js
Stringable.of('2cdc7039-65a6-4ac7-8e5d-d554a98e7b15').whenIsUuid((str) => str.prepend('Uuid: '));

// 'Uuid: 2cdc7039-65a6-4ac7-8e5d-d554a98e7b15'
```
### whenTest()
The `whenTest` method invokes the given function if the string matches the given regular expression.
The function will receive the fluent string instance:
```js
Stringable.of('laravel framework').whenTest(/laravel/, (str) => str.title());

// 'Laravel Framework'
```
### wordCount()
The `wordCount` method returns the number of words that a string contains:
```js
Stringable.of('Hello, world!').wordCount(); 

// 2
```
### words()
The `words` method limits the number of words in a string. If necessary, you may specify an additional string that will be appended to the truncated string:
```js
Stringable.of('Perfectly balanced, as all things should be.').words(3, ' >>>');

// 'Perfectly balanced, as >>>'
```
### wrap()
The `wrap` method wraps the string with the given strings:
```js
Stringable.of('is').wrap('This ', ' me!');

// 'This is me!'
```
### value()
The `value` method returns the underlying string value.
```js
Stringable.of('foo').value();

// 'foo'
```
## Strings
### Str.orderedUuid()
Not implemented
### Str.preg_quote()
The `Str.preg_quote` method quote regular expression characters:
```js
Str.preg_quote('*RRRING* Hello?');

// '\*RRRING\* Hello\?'
```
### Str.random()
The `Str.random` method generates a random string of the specified length:
```js
Str.random(40);
```
### Str.createRandomStringsUsing()
The `Str.createRandomStringsUsing` method allows to intercept and control the random string generation.
```js
Str.createRandomStringsUsing((length) => `xyz|${length}`);
Str.random(7);

// 'xyz:7'
```
### Str.createRandomStringsUsingSequence()
The `Str.createRandomStringsUsingSequence` method allows to set a sequence that will be used to generate random strings.
```js
Str.createRandomStringsUsingSequence({0: 'x', 2: 'y', 3: 'z'});

Str.random();
// 'x'
Str.random();
// random String
Str.random();
// 'y'
```
### Str.createRandomStringsNormally()
The `Str.createRandomStringsNormally` method resets to default random string generator.
```js
Str.createRandomStringsUsing((length) => `xyz|${length}`);
Str.createRandomStringsNormally();
Str.random(7);

// random 7 characters
```
### Str.substr()
The `Str.substr` method returns the portion of string specified by the start and length parameters:
```js
Str.substr('The Laravel Framework', 4, 7);

// 'Laravel'
```
### Str.uuid()
The `Str.uuid` method generates a UUID (version 4):
```js
Str.uuid();

// Stringable object
```
### Str.ulid()
The `Str.ulid` method generates a ULID:
```js
Str.ulid();

// Stringable object
```