import { writeFile } from "fs";
import type { IOptions } from "./Typings";

class DeleteLib {
    readonly path?: string;
    constructor(options: IOptions) {
        this.path = options.path || "../../" + "data.json";
    }

    async initialize(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!key) {
                reject("Key is empty!");
            }
            const file_data = require(this.path as string)[key];
            if (!file_data) {
                reject("Cant find that data!");
            }
            else {
                const result = Object.keys(require(this.path as string)).filter(obj => obj !== key);
                writeFile(this.path!.replace("../../", ""), JSON.stringify(result, null,2), (error) => {
                    if (error) {
                        reject(error.message);
                    }
                    resolve("Just deleted data for: " + key);
                });
            }
        });
    }
}

export { DeleteLib as default };