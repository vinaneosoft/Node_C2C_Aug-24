const fs=require("node:fs");

const contents=fs.readFileSync("./Files/Tendulkar.txt");
console.log(contents);
console.log(contents.toString());
console.log("further operation....");

