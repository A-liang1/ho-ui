import { TreeOptions, Key } from './tree';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly data: {
        readonly type: import('vue').PropType<TreeOptions[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly keyField: {
        readonly type: StringConstructor;
        readonly default: "key";
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly onLoad: import('vue').PropType<(node: TreeOptions) => Promise<TreeOptions[]>>;
    readonly selectedKeys: import('vue').PropType<Key[]>;
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:selectedKeys": (keys: Key[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly data: {
        readonly type: import('vue').PropType<TreeOptions[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly keyField: {
        readonly type: StringConstructor;
        readonly default: "key";
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly onLoad: import('vue').PropType<(node: TreeOptions) => Promise<TreeOptions[]>>;
    readonly selectedKeys: import('vue').PropType<Key[]>;
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: import('vue').PropType<Key[]>;
        readonly default: () => never[];
    };
}>> & Readonly<{
    "onUpdate:selectedKeys"?: ((keys: Key[]) => any) | undefined;
}>, {
    readonly data: TreeOptions[];
    readonly defaultExpandedKeys: Key[];
    readonly labelField: string;
    readonly keyField: string;
    readonly childrenField: string;
    readonly selectable: boolean;
    readonly multiple: boolean;
    readonly showCheckbox: boolean;
    readonly defaultCheckedKeys: Key[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
