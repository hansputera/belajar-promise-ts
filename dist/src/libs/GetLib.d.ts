import type { IOptions } from "./Typings";
declare class GetLib {
    options: IOptions;
    readonly path?: string;
    constructor(options: IOptions);
    initialize(key: string): Promise<any>;
}
export { GetLib as default };
