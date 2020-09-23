import type { IOptions } from "./Typings";
declare class DeleteLib {
    readonly path?: string;
    constructor(options: IOptions);
    initialize(key: string): Promise<any>;
}
export { DeleteLib as default };
