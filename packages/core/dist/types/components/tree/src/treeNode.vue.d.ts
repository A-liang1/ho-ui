declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly node: {
        readonly type: import('vue').PropType<import('./tree.js').TreeNode>;
        readonly required: true;
    };
    readonly expanded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingKeys: {
        readonly type: import('vue').PropType<Set<import('./tree.js').Key>>;
        readonly default: () => Set<import('./tree.js').Key>;
        readonly required: true;
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<import('./tree.js').Key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly checked: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly indeterminate: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (node: import('./tree.js').TreeNode) => void;
    checked: (args_0: {
        node: import('./tree.js').TreeNode;
        value: boolean;
    }) => void;
    toggle: (node: import('./tree.js').TreeNode) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly node: {
        readonly type: import('vue').PropType<import('./tree.js').TreeNode>;
        readonly required: true;
    };
    readonly expanded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingKeys: {
        readonly type: import('vue').PropType<Set<import('./tree.js').Key>>;
        readonly default: () => Set<import('./tree.js').Key>;
        readonly required: true;
    };
    readonly selectedKeys: {
        readonly type: import('vue').PropType<import('./tree.js').Key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly checked: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly indeterminate: BooleanConstructor;
}>> & Readonly<{
    onSelect?: ((node: import('./tree.js').TreeNode) => any) | undefined;
    onChecked?: ((args_0: {
        node: import('./tree.js').TreeNode;
        value: boolean;
    }) => any) | undefined;
    onToggle?: ((node: import('./tree.js').TreeNode) => any) | undefined;
}>, {
    readonly disabled: boolean;
    readonly indeterminate: boolean;
    readonly selectedKeys: import('./tree.js').Key[];
    readonly showCheckbox: boolean;
    readonly expanded: boolean;
    readonly loadingKeys: Set<import('./tree.js').Key>;
    readonly checked: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
