import {Stringable} from "./Stringable";

export class Str {

    static preg_quote(value: string, delimiter: string = ''): string {
        return value.replace(
            new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + delimiter + '-]', 'g'),
            '\\$&'
        );
    }

    static random(length: number = 16): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const size = characters.length;
        let string = '';

        for (let i = 0; i < length; i++ ) {
            string += characters.charAt(Math.random() * size);
        }

        return string;
    }

    static substr(value: string, start: number, length: number | null = null): string {
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
            return value.slice(start, value.length + start + length)
        }
        if (length < 0) {
            return value.slice(start, length);
        }
        return value.slice(start, start + length);
    }

    static tap(value: Stringable, callback: Function): Stringable {

        callback(Stringable.of(value));

        return value;
    }

}