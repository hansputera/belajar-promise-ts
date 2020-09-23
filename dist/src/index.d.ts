declare class CRUDSederhana {
    private path;
    constructor(path: string);
    get(key: string): Promise<any>;
    set(key: string, val: any): Promise<any>;
    delete(key: string): Promise<any>;
    push(key: string, val: any): Promise<any>;
}
export { CRUDSederhana as default };
