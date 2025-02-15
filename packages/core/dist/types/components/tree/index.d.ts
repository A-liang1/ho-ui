declare const HoTree: import('@ho-liang/utils').SFCWithInstall<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly data: {
        readonly type: import('vue').PropType<import('./src/tree').TreeOptions[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandedKeys: {
        readonly type: import('vue').PropType<import('./src/tree').Key[]>;
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
    readonly onLoad: import('vue').PropType<(node: import('./src/tree').TreeOptions) => Promise<import('./src/tree').TreeOptions[]>>;
    readonly selectedKeys: import('vue').PropType<import('./src/tree').Key[]>;
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
        readonly type: import('vue').PropType<import('./src/tree').Key[]>;
        readonly default: () => never[];
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:selectedKeys": (keys: import('./src/tree').Key[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly data: {
        readonly type: import('vue').PropType<import('./src/tree').TreeOptions[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandedKeys: {
        readonly type: import('vue').PropType<import('./src/tree').Key[]>;
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
    readonly onLoad: import('vue').PropType<(node: import('./src/tree').TreeOptions) => Promise<import('./src/tree').TreeOptions[]>>;
    readonly selectedKeys: import('vue').PropType<import('./src/tree').Key[]>;
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
        readonly type: import('vue').PropType<import('./src/tree').Key[]>;
        readonly default: () => never[];
    };
}>> & Readonly<{
    "onUpdate:selectedKeys"?: ((keys: import('./src/tree').Key[]) => any) | undefined;
}>, {
    readonly data: import('./src/tree').TreeOptions[];
    readonly defaultExpandedKeys: import('./src/tree').Key[];
    readonly labelField: string;
    readonly keyField: string;
    readonly childrenField: string;
    readonly selectable: boolean;
    readonly multiple: boolean;
    readonly showCheckbox: boolean;
    readonly defaultCheckedKeys: import('./src/tree').Key[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>>;
export default HoTree;
declare module 'vue' {
    interface GlobalComponents {
        HoTree: typeof HoTree;
    }
}
export * from './src/tree';
