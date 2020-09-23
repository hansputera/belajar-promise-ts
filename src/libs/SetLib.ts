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

            writeFile(this.path!.replace("../../", ""), 
            JSON.stringify({ [key]: value }, null,2),
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