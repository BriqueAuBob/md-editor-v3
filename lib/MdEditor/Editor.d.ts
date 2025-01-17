import { HeadList } from './type';
declare const Editor: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    theme: {
        type: import("vue").PropType<import("./type").Themes>;
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    historyLength: {
        type: import("vue").PropType<number>;
        default: number;
    };
    onChange: {
        type: import("vue").PropType<(v: string) => void>;
    };
    onSave: {
        type: import("vue").PropType<(v: string) => void>;
    };
    onUploadImg: {
        type: import("vue").PropType<(files: File[], callBack: (urls: string[]) => void) => void>;
    };
    pageFullScreen: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    htmlPreview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    previewOnly: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    language: {
        type: import("vue").PropType<string>;
        default: string;
    };
    toolbars: {
        type: import("vue").PropType<import("./type").ToolbarNames[]>;
        default: string[];
    };
    toolbarsExclude: {
        type: import("vue").PropType<import("./type").ToolbarNames[]>;
        default: never[];
    };
    noPrettier: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    onHtmlChanged: {
        type: import("vue").PropType<(h: string) => void>;
    };
    onGetCatalog: {
        type: import("vue").PropType<(list: HeadList[]) => void>;
    };
    editorId: {
        type: import("vue").PropType<string>;
        default: string;
    };
    tabWidth: {
        type: import("vue").PropType<number>;
        default: number;
    };
    showCodeRowNumber: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    previewTheme: {
        type: import("vue").PropType<string>;
        default: string;
    };
    style: {
        type: import("vue").PropType<string | import("vue").CSSProperties>;
        default: () => {};
    };
    markedHeadingId: {
        type: import("vue").PropType<import("./type").MarkedHeadingId>;
        default: import("./type").MarkedHeadingId;
    };
    tableShape: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    noMermaid: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    sanitize: {
        type: import("vue").PropType<(html: string) => string>;
        default: (html: string) => string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    noKatex: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    defToolbars: {
        type: import("vue").PropType<string | JSX.Element>;
    };
    onError: {
        type: import("vue").PropType<(err: import("./type").InnerError) => void>;
    };
    codeTheme: {
        type: import("vue").PropType<string>;
        default: string;
    };
    footers: {
        type: import("vue").PropType<import("./type").Footers[]>;
        default: import("./type").Footers[];
    };
    scrollAuto: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    defFooters: {
        type: import("vue").PropType<string | JSX.Element>;
    };
    noIconfont: {
        type: import("vue").PropType<boolean>;
    };
    isDiscord: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "onChange" | "onSave" | "onUploadImg" | "onHtmlChanged" | "onGetCatalog" | "onError" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    theme: {
        type: import("vue").PropType<import("./type").Themes>;
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    historyLength: {
        type: import("vue").PropType<number>;
        default: number;
    };
    onChange: {
        type: import("vue").PropType<(v: string) => void>;
    };
    onSave: {
        type: import("vue").PropType<(v: string) => void>;
    };
    onUploadImg: {
        type: import("vue").PropType<(files: File[], callBack: (urls: string[]) => void) => void>;
    };
    pageFullScreen: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    htmlPreview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    previewOnly: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    language: {
        type: import("vue").PropType<string>;
        default: string;
    };
    toolbars: {
        type: import("vue").PropType<import("./type").ToolbarNames[]>;
        default: string[];
    };
    toolbarsExclude: {
        type: import("vue").PropType<import("./type").ToolbarNames[]>;
        default: never[];
    };
    noPrettier: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    onHtmlChanged: {
        type: import("vue").PropType<(h: string) => void>;
    };
    onGetCatalog: {
        type: import("vue").PropType<(list: HeadList[]) => void>;
    };
    editorId: {
        type: import("vue").PropType<string>;
        default: string;
    };
    tabWidth: {
        type: import("vue").PropType<number>;
        default: number;
    };
    showCodeRowNumber: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    previewTheme: {
        type: import("vue").PropType<string>;
        default: string;
    };
    style: {
        type: import("vue").PropType<string | import("vue").CSSProperties>;
        default: () => {};
    };
    markedHeadingId: {
        type: import("vue").PropType<import("./type").MarkedHeadingId>;
        default: import("./type").MarkedHeadingId;
    };
    tableShape: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    noMermaid: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    sanitize: {
        type: import("vue").PropType<(html: string) => string>;
        default: (html: string) => string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    noKatex: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    defToolbars: {
        type: import("vue").PropType<string | JSX.Element>;
    };
    onError: {
        type: import("vue").PropType<(err: import("./type").InnerError) => void>;
    };
    codeTheme: {
        type: import("vue").PropType<string>;
        default: string;
    };
    footers: {
        type: import("vue").PropType<import("./type").Footers[]>;
        default: import("./type").Footers[];
    };
    scrollAuto: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    defFooters: {
        type: import("vue").PropType<string | JSX.Element>;
    };
    noIconfont: {
        type: import("vue").PropType<boolean>;
    };
    isDiscord: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    preview: boolean;
    htmlPreview: boolean;
    modelValue: string;
    theme: import("./type").Themes;
    class: string;
    historyLength: number;
    pageFullScreen: boolean;
    previewOnly: boolean;
    language: string;
    toolbars: import("./type").ToolbarNames[];
    toolbarsExclude: import("./type").ToolbarNames[];
    noPrettier: boolean;
    editorId: string;
    tabWidth: number;
    showCodeRowNumber: boolean;
    previewTheme: string;
    style: string | import("vue").CSSProperties;
    markedHeadingId: import("./type").MarkedHeadingId;
    tableShape: number[];
    noMermaid: boolean;
    sanitize: (html: string) => string;
    placeholder: string;
    noKatex: boolean;
    codeTheme: string;
    footers: import("./type").Footers[];
    scrollAuto: boolean;
    isDiscord: boolean;
}>;
export default Editor;
