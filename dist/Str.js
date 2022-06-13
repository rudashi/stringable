"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Str = void 0;
const Stringable_1 = require("./Stringable");
class Str {
    static preg_quote(value, delimiter = '') {
        return value.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + delimiter + '-]', 'g'), '\\$&');
    }
    static random(length = 16) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const size = characters.length;
        let string = '';
        for (let i = 0; i < length; i++) {
            string += characters.charAt(Math.random() * size);
        }
        return string;
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
}
exports.Str = Str;
//# sourceMappingURL=Str.js.map