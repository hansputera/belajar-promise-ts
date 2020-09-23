import type { IOptions } from "./Typings";

class GetLib {
    readonly path?: string;
    constructor(public options: IOptions) {
        this.path = options.path || "../../" + "data.json";
    }

    async initialize(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!key) {
                reject("Key is empty!");
            }

            const readon = require(this.path as string);
            if (!readon) {
                reject("Cannot find: " + this.path);
            }
            else {
                resolve(readon[key]);
            }
        });
    }
}

export { GetLib as default };