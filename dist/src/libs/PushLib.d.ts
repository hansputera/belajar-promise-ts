import type { IOptions } from "./Typings";
export default class PushLib {
    path?: string;
    constructor(options: IOptions);
    initialize(key: string, arraydata: any): Promise<any>;
}
