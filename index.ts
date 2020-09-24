import BelajarJS from "./src";
const belajar = new BelajarJS("./temp.json");

belajar.set("key", "lmaooo").then((val) => console.log(val)).catch((err) => console.error(err));