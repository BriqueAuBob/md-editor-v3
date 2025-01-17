import { App } from 'vue';
import NormalToolbar from './extensions/NormalToolbar';
import DropdownToolbar from './extensions/DropdownToolbar';
import MdCatalog from './extensions/MdCatalog';
import ModalToolbar from './extensions/ModalToolbar';
import { config } from './config';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
                type: import("vue").PropType<(list: import("./type").HeadList[]) => void>;
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
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "preview" | "htmlPreview" | "modelValue" | "theme" | "class" | "historyLength" | "pageFullScreen" | "previewOnly" | "language" | "toolbars" | "toolbarsExclude" | "noPrettier" | "editorId" | "tabWidth" | "showCodeRowNumber" | "previewTheme" | "style" | "markedHeadingId" | "tableShape" | "noMermaid" | "sanitize" | "placeholder" | "noKatex" | "codeTheme" | "footers" | "scrollAuto" | "isDiscord">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
                type: import("vue").PropType<(list: import("./type").HeadList[]) => void>;
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
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {
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
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<(list: import("./type").HeadList[]) => void>;
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
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<(list: import("./type").HeadList[]) => void>;
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
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "onChange" | "onSave" | "onUploadImg" | "onHtmlChanged" | "onGetCatalog" | "onError" | "update:modelValue", {
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
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly NormalToolbar: typeof NormalToolbar;
    readonly DropdownToolbar: typeof DropdownToolbar;
    readonly MdCatalog: typeof MdCatalog;
    readonly ModalToolbar: typeof ModalToolbar;
    readonly config: typeof config;
    install: (app: App) => App;
};
export default _default;
export * from './type';
