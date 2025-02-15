export declare function createBEM(prefixName: string): {
    b: (block?: string) => string;
    e: (element: string) => string;
    m: (modifier: string) => string;
    be: (block: string, element: string) => string;
    bm: (block: string, modifier: string) => string;
    em: (element: string, modifier: string) => string;
    bem: (block: string, element: string, modifier: string) => string;
    is: (name: string, state: any) => void;
};
export declare function createNamespace(name: string): {
    b: (block?: string) => string;
    e: (element: string) => string;
    m: (modifier: string) => string;
    be: (block: string, element: string) => string;
    bm: (block: string, modifier: string) => string;
    em: (element: string, modifier: string) => string;
    bem: (block: string, element: string, modifier: string) => string;
    is: (name: string, state: any) => void;
};
