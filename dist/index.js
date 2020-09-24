"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __importDefault(require("./src"));
var belajar = new src_1.default("./temp.json");
belajar.set("key", "lmaooo").then(function (val) { return console.log(val); }).catch(function (err) { return console.error(err); });
