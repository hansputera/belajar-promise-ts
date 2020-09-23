import GetLib from "./libs/GetLib";
import SetLib from "./libs/SetLib";
import DelLib from "./libs/DeleteLib";
import PushLib from "./libs/PushLib";

class CRUDSederhana {
    constructor(private path: string) {}

    get(key: string) {
        const constructorGet = new GetLib({ path: this.path });
        return constructorGet.initialize(key);
    }
    set(key: string, val: any) {
        const constructorSet = new SetLib({ path: this.path });
        return constructorSet.initialize(key, val);
    }
    delete(key: string) {
        const constructorDel = new DelLib({ path: this.path });
        return constructorDel.initialize(key);
    }
    push(key: string, val:any) {
        const constructorPush = new PushLib({ path: this.path });
        return constructorPush.initialize(key, val);
    }
}

export { CRUDSederhana as default };