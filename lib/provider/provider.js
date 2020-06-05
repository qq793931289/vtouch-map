export class Provider {
    constructor(div) {
        this.init = () => {
        };
        this.loadEnd = () => {
        };
        this.exit = () => {
        };
        this.div = div;
    }
    static registerProvider(classId, factory) {
        this._Factories.set(classId, factory);
    }
    static createProvider(div) {
        const factory = this._Factories.get(div);
        if (factory) {
            return factory(div);
        }
        return undefined;
    }
}
Provider._Factories = new Map();
