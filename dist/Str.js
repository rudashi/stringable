"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Str = void 0;
const Stringable_1 = require("./Stringable");
const crypto_1 = __importDefault(require("crypto"));
class Str {
    static createRandomStringsUsing(callable) {
        Str.randomStringFactory = callable;
    }
    static createRandomStringsNormally() {
        Str.randomStringFactory = null;
    }
    static createRandomStringsUsingSequence(sequence, whenMissing = null) {
        let next = 0;
        let callable = whenMissing !== null && whenMissing !== void 0 ? whenMissing : function (length) {
            let factoryCache = Str.randomStringFactory;
            Str.randomStringFactory = null;
            let randomString = Str.random(length);
            Str.randomStringFactory = factoryCache;
            next++;
            return randomString;
        };
        Str.createRandomStringsUsing(function (length) {
            if (sequence.hasOwnProperty(next)) {
                return sequence[next++];
            }
            return callable(length);
        });
    }
    static preg_quote(value, delimiter = '') {
        return value.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + delimiter + '-]', 'g'), '\\$&');
    }
    static random(length = 16) {
        var _a;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const size = characters.length;
        let string = '';
        return ((_a = Str.randomStringFactory) !== null && _a !== void 0 ? _a : function (length) {
            for (let i = 0; i < length; i++) {
                string += characters.charAt(Math.random() * size);
            }
            return string;
        })(length);
    }
    static substr(value, start, length = null) {
        if (length === null) {
            if (start < 0) {
                return value.slice(start);
            }
            return value.slice(start, value.length);
        }
        if (!start && length < 0) {
            return value.slice(length);
        }
        if (start < 0 && length > 0) {
            return start <= -value.length
                ? value.substring(0, length)
                : value.slice(start, value.length + start + length);
        }
        if (length < 0) {
            return value.slice(start, length);
        }
        return value.slice(start, start + length);
    }
    static tap(value, callback) {
        callback(Stringable_1.Stringable.of(value));
        return value;
    }
    static uuid() {
        return Stringable_1.Stringable.of(crypto_1.default.randomUUID());
    }
}
exports.Str = Str;
//# sourceMappingURL=Str.js.map