import { Stringable } from './Stringable';
export declare class Str {
    static preg_quote(value: string, delimiter?: string): string;
    static random(length?: number): string;
    static substr(value: string, start: number, length?: number | null): string;
    static tap(value: Stringable, callback: Function): Stringable;
}
