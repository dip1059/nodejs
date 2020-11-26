let f;
const m = require("./my-modules/my-node");
m();
async function getES(){
    f = await import ("./my-modules/my-es.mjs");
    console.log(f.default());
    console.log(f.hello());
}
getES();
