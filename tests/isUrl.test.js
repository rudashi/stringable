'use strict';

const {Stringable} = require('../src/Stringable');
const {Str} = require('../src/Str');
const {isUrl} = require('../src/methods');

describe('provided URLs are valid', function () {
    test.each([
        ['http://a.pl'],
        ['http://www.example.com'],
        ['http://tt.example.com'],
        ['http://m.example.com'],
        ['http://m.m.m.example.com'],
        ['http://example.m.example.com'],
        ['https://long-string_with+symbols.m.example.com'],
        ['http://www.example.com.'],
        ['http://www.example.museum'],
        ['https://example.com/'],
        ['https://example.com:80/'],
        ['http://examp_le.com'],
        ['http://www.sub_domain.examp_le.com'],
        ['http://www.example.coop/'],
        ['http://www.test-example.com/'],
        ['http://www.symfony.com/'],
        ['http://symfony.fake/blog/'],
        ['http://symfony.com/?'],
        ['http://symfony.com/search?type=&q=url+validator'],
        ['http://symfony.com/#'],
        ['http://symfony.com/#?'],
        ['http://www.symfony.com/doc/current/book/validation.html#supported-constraints'],
        ['http://very.long.domain.name.com/'],
        ['http://localhost/'],
        ['http://myhost123/'],
        ['http://internal-api'],
        ['http://internal-api.'],
        ['http://internal-api/'],
        ['http://internal-api/path'],
        ['http://127.0.0.1/'],
        ['http://127.0.0.1:80/'],
        ['http://[::1]/'],
        ['http://[::1]:80/'],
        ['http://[1:2:3::4:5:6:7]/'],
        ['http://sãopaulo.com/'],
        ['http://xn--sopaulo-xwa.com/'],
        ['http://sãopaulo.com.br/'],
        ['http://xn--sopaulo-xwa.com.br/'],
        ['http://пример.испытание/'],
        ['http://xn--e1afmkfd.xn--80akhbyknj4f/'],
        ['http://مثال.إختبار/'],
        ['http://xn--mgbh0fb.xn--kgbechtv/'],
        ['http://例子.测试/'],
        ['http://xn--fsqu00a.xn--0zwm56d/'],
        ['http://例子.測試/'],
        ['http://xn--fsqu00a.xn--g6w251d/'],
        ['http://例え.テスト/'],
        ['http://xn--r8jz45g.xn--zckzah/'],
        ['http://مثال.آزمایشی/'],
        ['http://xn--mgbh0fb.xn--hgbk6aj7f53bba/'],
        ['http://실례.테스트/'],
        ['http://xn--9n2bp8q.xn--9t4b11yi5a/'],
        ['http://العربية.idn.icann.org/'],
        ['http://xn--ogb.idn.icann.org/'],
        ['http://xn--e1afmkfd.xn--80akhbyknj4f.xn--e1afmkfd/'],
        ['http://xn--espaa-rta.xn--ca-ol-fsay5a/'],
        ['http://xn--d1abbgf6aiiy.xn--p1ai/'],
        ['http://☎.com/'],
        ['http://username:password@symfony.com'],
        ['http://user.name:password@symfony.com'],
        ['http://user_name:pass_word@symfony.com'],
        ['http://username:pass.word@symfony.com'],
        ['http://user.name:pass.word@symfony.com'],
        ['http://user-name@symfony.com'],
        ['http://user_name@symfony.com'],
        ['http://u%24er:password@symfony.com'],
        ['http://user:pa%24%24word@symfony.com'],
        ['http://symfony.com?'],
        ['http://symfony.com?query=1'],
        ['http://symfony.com/?query=1'],
        ['http://symfony.com#'],
        ['http://symfony.com#fragment'],
        ['http://symfony.com/#fragment'],
        ['http://symfony.com/#one_more%20test'],
        ['http://example.com/exploit.html?hello[0]=test'],
        ['http://বিডিআইএ.বাংলা'],
    ])('url [%p] is valid', (string) => {
        expect(Stringable.of(string).isUrl())
            .toBe(true);

        expect(Str.isUrl(string))
            .toBe(true);

        expect(isUrl(string))
            .toBe(true);
    });

    test.each([
        ['//example.com'],
        ['//examp_le.com'],
        ['//symfony.fake/blog/'],
        ['//symfony.com/search?type=&q=url+validator'],
    ])('relative URL [%p] is valid', (string) => {
        expect(Stringable.of(string).isUrl())
            .toBe(true);

        expect(Str.isUrl(string))
            .toBe(true);

        expect(isUrl(string))
            .toBe(true);
    });

    test.each([
        ["\x20http://www.example.com"],
        ["\x09\x09http://www.example.com."],
        ["http://symfony.fake/blog/\x0A"],
        ["http://symfony.com/search?type=&q=url+validator\x0D\x0D"],
        ["\x00https://example.com:80\x00"],
        ["\x0B\x0Bhttp://username:password@symfony.com\x0B\x0B"],
    ])('whitespace URL [%p] is valid', (string) => {
        expect(Stringable.of(string).isUrl())
            .toBe(true);

        expect(Str.isUrl(string))
            .toBe(true);

        expect(isUrl(string))
            .toBe(true);
    });

    test.each([
        ['ftp://example.com'],
        ['file://127.0.0.1'],
        ['git://[::1]/'],
    ])('custom protocol [%p] is valid', (string) => {
        expect(Stringable.of(string).isUrl())
            .toBe(true);

        expect(Str.isUrl(string))
            .toBe(true);

        expect(isUrl(string))
            .toBe(true);
    });
});

describe('provided URLs are invalid', function () {
    test.each([
        ['/example.com'],
        ['//example.com::aa'],
        ['//example.com:aa'],
        ['//127.0.0.1:aa/'],
        ['//[::1'],
        ['//username:passwordsymfony.com'],
        ['//'],
    ])('incorrect relative URL [%p] is invalid', (string) => {
        expect(Stringable.of(string).isUrl())
            .toBe(false);

        expect(Str.isUrl(string))
            .toBe(false);

        expect(isUrl(string))
            .toBe(false);
    });

    test.each([
        ['example.com'],
        ['://example.com'],
        ['http ://example.com'],
        ['http:/example.com'],
        ['http://example.com::aa'],
        ['http://example.com:aa'],
        ['faked://example.fr'],
        ['http://127.0.0.1:aa/'],
        ['http://username:passwordsymfony.com'],
        ['http://'],
        ['http://www..com'],
        ['http://www..example.com'],
        ['http://www..m.example.com'],
        ['http://.m.example.com'],
        ['http://wwww.example..com'],
        ['http://.www.example.com'],
        ['http:///path'],
    ])('incorrect URL [%p] is invalid', (string) => {
        expect(Stringable.of(string).isUrl())
            .toBe(false);

        expect(Str.isUrl(string))
            .toBe(false);

        expect(isUrl(string))
            .toBe(false);
    });
});