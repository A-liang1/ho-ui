export declare const defaultNamespace = "ho";
export declare const useNamespace: (block: string, namespaceOverride?: string | undefined) => {
    namespace: import('vue').ComputedRef<string>;
    b: (blockSuffix?: string) => string;
    e: (element?: string) => string;
    m: (modifier?: string) => string;
    be: (blockSuffix: string, element?: string) => string;
    bm: (blockSuffix: string, modifier?: string) => string;
    em: (element?: string, modifier?: string) => string;
    bem: (blockSuffix: string, element?: string, modifier?: string) => string;
    is: {
        (name: string, state: boolean | undefined): string;
        (name: string): string;
    };
};
