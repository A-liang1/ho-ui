import { ExtractPropTypes, PropType } from 'vue';

export declare const checkboxProps: {
    modelValue: {
        type: PropType<boolean | string | number>;
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
};
export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>;
export declare const checkboxEmits: {
    'update:modelValue': (value: boolean | string | number) => value is boolean;
    change: (value: boolean) => boolean;
};
export type CheckboxEmits = typeof checkboxEmits;
