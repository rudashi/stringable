import { marked } from 'marked';
import MarkedOptions = marked.MarkedOptions;
export declare const defaultConfiguration: MarkdownConfiguration;
export interface MarkdownConfiguration extends MarkedOptions {
    html_input: 'ALLOW' | 'STRIP';
}
