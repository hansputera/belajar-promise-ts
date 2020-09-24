import { writeFile } from "fs";
import type { IOptions } from "./Typings";

class SetLib {
    public path?: string;
    constructor(options: IOptions) {
        this.path = options.path || "../../" + "data.json";
    }

    async initialize(key: string, value: any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!key) {
                reject("Key is empty!");
            }
            if (!value) {
                reject("Value is empty!");
            }

            const beforeData = require(this.path!);
            beforeData[key] = value;

            writeFile(this.path!, 
            JSON.stringify(beforeData, null,2),
            (error) => {
                if (error) {
                    reject(error.message);
                }
                resolve("Just updated value for " + key);
            })
        });
    }
}

export { SetLib as default };