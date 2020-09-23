"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var GetLib_1 = __importDefault(require("./libs/GetLib"));
var SetLib_1 = __importDefault(require("./libs/SetLib"));
var DeleteLib_1 = __importDefault(require("./libs/DeleteLib"));
var PushLib_1 = __importDefault(require("./libs/PushLib"));
var CRUDSederhana = /** @class */ (function () {
    function CRUDSederhana(path) {
        this.path = path;
    }
    CRUDSederhana.prototype.get = function (key) {
        var constructorGet = new GetLib_1.default({ path: this.path });
        return constructorGet.initialize(key);
    };
    CRUDSederhana.prototype.set = function (key, val) {
        var constructorSet = new SetLib_1.default({ path: this.path });
        return constructorSet.initialize(key, val);
    };
    CRUDSederhana.prototype.delete = function (key) {
        var constructorDel = new DeleteLib_1.default({ path: this.path });
        return constructorDel.initialize(key);
    };
    CRUDSederhana.prototype.push = function (key, val) {
        var constructorPush = new PushLib_1.default({ path: this.path });
        return constructorPush.initialize(key, val);
    };
    return CRUDSederhana;
}());
exports.default = CRUDSederhana;
