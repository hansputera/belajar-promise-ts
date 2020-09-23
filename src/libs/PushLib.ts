import { writeFile } from "fs";
import type { IOptions } from "./Typings";

export default class PushLib {
    public path?: string;
    constructor(options: IOptions) {
        this.path = options.path || "../../" + "data.json";
    }

    async initialize(key: string, arraydata: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const file = require(this.path!);
            if (!file[key]) {
                writeFile(this.path!.replace("../../", ""),
                JSON.stringify(
                    {[key]: Array(arraydata) }
                , null,2),
                (error) => {
                    if (error) {
                        reject(error.message);
                    }
                    resolve("Just create array data!");
                    const isThe = require(this.path!)[key];
                    if (!isThe && typeof arraydata === "number") {
                        writeFile(this.path!.replace("../../", ""),
                        JSON.stringify(
                            { [key]: [arraydata] }, null, 2),
                        (error) => {
                            if (error) {
                                reject(error.message);
                            }
                            resolve("Handle result.");
                        });
                    } 
                });
            } else {
                const fileData = require(this.path!)[key];
                
                if (!Array.isArray(fileData)) 
                {
                    reject("Invalid type.");
                }
                
                fileData.push(arraydata);

                writeFile(this.path!.replace("../../", ""),
                JSON.stringify({ [key]:  fileData }, null,2),
                (error) => {
                    if (error) {
                        reject(error.message);
                    }
                    resolve("Just updated array data type!");
                });
            }
        });
    }
}
