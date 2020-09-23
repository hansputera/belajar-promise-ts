import type { IOptions } from "./Typings";
declare class SetLib {
    path?: string;
    constructor(options: IOptions);
    initialize(key: string, value: any): Promise<any>;
}
export { SetLib as default };
