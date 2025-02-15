declare const HoCheckbox: import('@ho-liang/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: import('vue').PropType<boolean | string | number>;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
        onChange?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string | number | boolean) => void;
        change: (value: boolean) => void;
    }, import('vue').PublicProps, {
        modelValue: string | number | boolean;
        disabled: boolean;
        indeterminate: boolean;
        label: string;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: import('vue').PropType<boolean | string | number>;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
        onChange?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        modelValue: string | number | boolean;
        disabled: boolean;
        indeterminate: boolean;
        label: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: import('vue').PropType<boolean | string | number>;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    onChange?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean) => void;
    change: (value: boolean) => void;
}, string, {
    modelValue: string | number | boolean;
    disabled: boolean;
    indeterminate: boolean;
    label: string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default HoCheckbox;
declare module 'vue' {
    interface GlobalComponents {
        HoCheckbox: typeof HoCheckbox;
    }
}
export * from './src/checkbox.js';
