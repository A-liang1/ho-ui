import { PropType } from 'vue';

export declare const vlProps: {
    items: {
        type: PropType<any[]>;
        required: boolean;
    };
    remain: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
};
