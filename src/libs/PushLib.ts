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
                const beforeDat = require(this.path!);
                beforeDat[key] = Array(arraydata);

                writeFile(this.path!,
                JSON.stringify(
                    beforeDat
                , null,2),
                (error) => {
                    if (error) {
                        reject(error.message);
                    }
                    resolve("Just create array data!");
                    const isThe = require(this.path!)[key];
                    if (!isThe && typeof arraydata === "number") {
                        const beforeDat2 = require(this.path!);
                        beforeDat2[key] = [arraydata];

                        writeFile(this.path!,
                        JSON.stringify(
                            beforeDat2, null, 2),
                        (error) => {
                            if (error) {
                                reject(error.message);
                            }
                            resolve("Handle result.");
                        });
                    } 
                });
            } else {
                const fileData = require("../../" + this.path!)[key];
                
                if (!Array.isArray(fileData)) 
                {
                    reject("Invalid type.");
                }
                
                fileData.push(arraydata);
                const afterDat = require("../../" + this.path!);
                afterDat[key] = fileData;
                writeFile(this.path!.replace("../../", ""),
                JSON.stringify(afterDat, null,2),
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
