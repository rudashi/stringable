import {Stringable} from './Stringable';
import {Callable} from './types';
import crypto from 'crypto';

export class Str {

    protected static randomStringFactory: Callable;

    static createRandomStringsUsing(callable: Callable): void {
        Str.randomStringFactory = callable;
    }

    static createRandomStringsNormally(): void {
        Str.randomStringFactory = null;
    }

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

        return (Str.randomStringFactory ?? function (length: number) {
            for (let i = 0; i < length; i++ ) {
                string += characters.charAt(Math.random() * size);
            }

            return string;
        })(length);
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
            return start <= -value.length
                ? value.substring(0, length)
                : value.slice(start, value.length + start + length)
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

    static uuid(): Stringable {
        return Stringable.of(crypto.randomUUID());
    }

}