import {marked} from 'marked';
import MarkedOptions = marked.MarkedOptions;

export const defaultConfiguration: MarkdownConfiguration = {
    html_input: 'ALLOW',

    headerIds: false,
};

export interface MarkdownConfiguration extends MarkedOptions {
    html_input: 'ALLOW' | 'STRIP',
}
