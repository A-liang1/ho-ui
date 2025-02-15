import { ExtractPropTypes, InjectionKey, PropType, SetupContext } from 'vue';

export type Key = string | number;
export interface TreeNode extends Required<TreeOptions> {
    level: number;
    rawNode: TreeOptions;
    children: TreeNode[];
    isLeaf: boolean;
    parentKey: Key | undefined;
}
export interface TreeOptions {
    label?: Key;
    key?: Key;
    children?: TreeOptions[];
    isLeaf?: boolean;
    disabled?: boolean;
    [key: string]: unknown;
}
export declare const treeProps: {
    readonly data: {
        readonly type: PropType<TreeOptions[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandedKeys: {
        readonly type: PropType<Key[]>;
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
    readonly onLoad: PropType<(node: TreeOptions) => Promise<TreeOptions[]>>;
    readonly selectedKeys: PropType<Key[]>;
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
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
};
export declare const treeNodeProps: {
    readonly node: {
        readonly type: PropType<TreeNode>;
        readonly required: true;
    };
    readonly expanded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingKeys: {
        readonly type: PropType<Set<Key>>;
        readonly default: () => Set<Key>;
        readonly required: true;
    };
    readonly selectedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly checked: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly indeterminate: BooleanConstructor;
};
export declare const treeEmits: {
    readonly 'update:selectedKeys': (keys: Key[]) => Key[];
};
export declare const treeNodeEmits: {
    readonly toggle: (node: TreeNode) => TreeNode;
    readonly select: (node: TreeNode) => TreeNode;
    readonly checked: ({ node, value }: {
        node: TreeNode;
        value: boolean;
    }) => boolean;
};
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;
export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>;
export interface TreeContext {
    slots: SetupContext['slots'];
}
export declare const treeInjectKey: InjectionKey<TreeContext>;
export declare const treeNodeContextProps: {
    readonly node: {
        readonly type: PropType<TreeNode>;
        readonly required: true;
    };
};
