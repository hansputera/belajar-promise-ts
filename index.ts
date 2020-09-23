import BelajarJS from "./src";
const belajar = new BelajarJS("./temp.json");

belajar.set("key", "lmaoooooo").then((val) => console.log(val)).catch((err) => console.error(err));