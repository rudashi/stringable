'use strict';

const {Stringable} = require('../src/Stringable');

it('returns a truncated string', () => {

    expect(Stringable.of('This is my name')
        .excerpt('my', {radius: 3})
        .toString()
    ).toBe('...is my na...');

    expect(Stringable.of('This is a beautiful morning')
        .excerpt('beautiful', {radius: 5})
        .toString()
    ).toBe('...is a beautiful morn...');

    expect(Stringable.of('This is a beautiful morning')
        .excerpt('this', {radius: 5})
        .toString()
    ).toBe('This is a...');

    expect(Stringable.of('This is a beautiful morning')
        .excerpt('morning', {radius: 5})
        .toString()
    ).toBe('...iful morning');

    expect(Stringable.of('This is a beautiful! morning')
        .excerpt('Beautiful', {radius: 5})
        .toString()
    ).toBe('...is a beautiful! mor...');

    expect(Stringable.of('This is a beautiful? morning')
        .excerpt('beautiful', {radius: 5})
        .toString()
    ).toBe('...is a beautiful? mor...');

    expect(Stringable.of('')
        .excerpt('', {radius: 0})
        .toString()
    ).toBe('');

    expect(Stringable.of('a')
        .excerpt('a', {radius: 0})
        .toString()
    ).toBe('a');

    expect(Stringable.of('abc')
        .excerpt('B', {radius: 0})
        .toString()
    ).toBe('...b...');

    expect(Stringable.of('abc')
        .excerpt('b', {radius: 1})
        .toString()
    ).toBe('abc');

    expect(Stringable.of('abcd')
        .excerpt('b', {radius: 1})
        .toString()
    ).toBe('abc...');

    expect(Stringable.of('zabc')
        .excerpt('b', {radius: 1})
        .toString()
    ).toBe('...abc');

    expect(Stringable.of('zabcd')
        .excerpt('b', {radius: 1})
        .toString()
    ).toBe('...abc...');

    expect(Stringable.of('zabcd')
        .excerpt('b', {radius: 2})
        .toString()
    ).toBe('zabcd');

    expect(Stringable.of('  zabcd  ')
        .excerpt('b', {radius: 4})
        .toString()
    ).toBe('zabcd');

    expect(Stringable.of('z  abc  d')
        .excerpt('b', {radius: 1})
        .toString()
    ).toBe('...abc...');

    expect(Stringable.of('taylor')
        .excerpt('y', {radius: 0})
        .toString()
    ).toBe('...y...');

    expect(Stringable.of('taylor')
        .excerpt('Y', {radius: 1})
        .toString()
    ).toBe('...ayl...');

    expect(Stringable.of('<div> The article description </div>')
        .excerpt('article')
        .toString()
    ).toBe('<div> The article description </div>');

    expect(Stringable.of('<div> The article description </div>')
        .excerpt('article', {radius: 5})
        .toString()
    ).toBe('... The article desc...');

    expect(Stringable.of('The article description')
        .excerpt('', {radius: 8})
        .toString()
    ).toBe('The arti...');

    expect(Stringable.of('The article description')
        .excerpt(' ', {radius: 4})
        .toString()
    ).toBe('The arti...');

    expect(Stringable.of('The article description')
        .excerpt('description', {radius: 4})
        .toString()
    ).toBe('...cle description');

    expect(Stringable.of('The article description')
        .excerpt('T', {radius: 0})
        .toString()
    ).toBe('T...');

    expect(Stringable.of('åèö - 二 sān 大åèö\'')
        .excerpt('二 sān', {radius: 4})
        .toString()
    ).toBe('...ö - 二 sān 大åè...')

    expect(Stringable.of('åèö - 二 sān 大åèö')
        .excerpt('åèö', {radius: 4})
        .toString()
    ).toBe('åèö - 二...')

    expect(Stringable.of('åèö - 二 sān 大åèö')
        .excerpt('åèö - 二 sān 大åèö', {radius: 4})
        .toString()
    ).toBe('åèö - 二 sān 大åèö')

    expect(Stringable.of('㏗༼㏗')
        .excerpt('༼', {radius: 0})
        .toString()
    ).toBe('...༼...')

    expect(Stringable.of('Como você está')
        .excerpt('ê', {radius: 2})
        .toString()
    ).toBe('...ocê e...')

    expect(Stringable.of('João Antônio')
        .excerpt('jo', {radius: 2})
        .toString()
    ).toBe('João...')

    expect(Stringable.of('João Antônio')
        .excerpt('JOÃO', {radius: 5})
        .toString()
    ).toBe('João Antô...')

});

it('returns a truncated string with custom omission', () => {

    expect(Stringable.of('This is my name')
        .excerpt('name', {radius: 3, omission: '(...) '})
        .toString()
    ).toBe('(...) my name');

    expect(Stringable.of('This is a beautiful morning')
        .excerpt('beautiful', {radius: 5, omission: '[...]'})
        .toString()
    ).toBe('[...]is a beautiful morn[...]');

    expect(Stringable.of('This is the ultimate supercalifragilisticexpialidoceous very looooooooooooooooooong looooooooooooong beautiful morning with amazing sunshine and awesome temperatures. So what are you gonna do about it?')
        .excerpt('very', {omission: '[...]'})
        .toString()
    ).toBe('This is the ultimate supercalifragilisticexpialidoceous very looooooooooooooooooong looooooooooooong beautiful morning with amazing sunshine and awesome tempera[...]');

    expect(Stringable.of('What is the article?')
        .excerpt('What', {radius: 2, omission: '?'})
        .toString()
    ).toBe('What i?');

});

it('returns an empty string when truncate failed', () => {

    expect(Stringable.of('This is a beautiful morning')
        .excerpt('day')
        .toString()
    ).toBe('');

    expect(Stringable.of(null)
        .excerpt()
        .toString()
    ).toBe('');

    expect(Stringable.of('')
        .excerpt()
        .toString()
    ).toBe('');

    expect(Stringable.of(null)
        .excerpt('')
        .toString()
    ).toBe('');

    expect(Stringable.of(' ')
        .excerpt()
        .toString()
    ).toBe('');

});
