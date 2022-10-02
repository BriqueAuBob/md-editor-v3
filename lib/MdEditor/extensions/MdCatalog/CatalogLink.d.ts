import { PropType, ExtractPropTypes } from 'vue';
import { LooseRequired } from '@vue/shared';
import { TocItem } from './index';
import { MarkedHeadingId } from '../../type';
declare const catalogLinkProps: () => {
    tocItem: {
        type: PropType<TocItem>;
        default: () => {};
    };
    markedHeadingId: {
        type: PropType<MarkedHeadingId>;
        default: () => () => void;
    };
    scrollElement: {
        type: PropType<string | Element>;
        default: string;
    };
    onClick: {
        type: PropType<(e: MouseEvent, t: TocItem) => void>;
        default: () => () => void;
    };
};
export declare type CatalogLinkProps = Readonly<LooseRequired<Readonly<ExtractPropTypes<ReturnType<typeof catalogLinkProps>>>>>;
declare const CatalogLink: import("vue").DefineComponent<{
    tocItem: {
        type: PropType<TocItem>;
        default: () => {};
    };
    markedHeadingId: {
        type: PropType<MarkedHeadingId>;
        default: () => () => void;
    };
    scrollElement: {
        type: PropType<string | Element>;
        default: string;
    };
    onClick: {
        type: PropType<(e: MouseEvent, t: TocItem) => void>;
        default: () => () => void;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    tocItem: {
        type: PropType<TocItem>;
        default: () => {};
    };
    markedHeadingId: {
        type: PropType<MarkedHeadingId>;
        default: () => () => void;
    };
    scrollElement: {
        type: PropType<string | Element>;
        default: string;
    };
    onClick: {
        type: PropType<(e: MouseEvent, t: TocItem) => void>;
        default: () => () => void;
    };
}>>, {
    markedHeadingId: MarkedHeadingId;
    onClick: (e: MouseEvent, t: TocItem) => void;
    scrollElement: string | Element;
    tocItem: TocItem;
}>;
export default CatalogLink;