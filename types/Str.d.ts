import { Stringable } from './Stringable';
import { AssociativeArray, Callable } from './types';
export declare class Str {
    protected static randomStringFactory: Callable;
    static createRandomStringsUsing(callable: Callable): void;
    static createRandomStringsNormally(): void;
    static createRandomStringsUsingSequence(sequence: AssociativeArray, whenMissing?: Callable): void;
    static preg_quote(value: string, delimiter?: string): string;
    static random(length?: number): string;
    static substr(value: string, start: number, length?: number | null): string;
    static tap(value: Stringable, callback: Function): Stringable;
    static uuid(): Stringable;
}
