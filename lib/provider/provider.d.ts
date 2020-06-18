export declare type ProviderFactoryFunction = (div: string) => Provider;
export declare abstract class Provider {
    private static _Factories;
    static registerProvider(classId: string, factory: ProviderFactoryFunction): void;
    static createProvider(div: string): Provider | undefined;
    div: string;
    constructor(div: string);
    init: () => void;
    loadEnd: () => void;
    exit: () => void;
}
