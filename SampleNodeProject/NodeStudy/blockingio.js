const fs=require("node:fs");

const filepath="../Files/Tendulkar.txt";

fs.exists(filepath, (av)=>console.log(av));

const contents=fs.readFileSync(filepath);
console.log(contents);
console.log(contents.toString());
console.log("further operation....");

fs.writeFileSync(filepath, "Tendulkar has received several awards from the government of India");
console.log("write operation completed....");


fs.appendFileSync(filepath, "data to append");
console.log("append operation completed....");

function readData(fp){
    const contents=fs.readFileSync(fp);
    return contents.toString();
}

function writeData(contents){
    fs.writeFileSync(filepath, contents);
}

//writeData("This is new data to go in file");
//console.log("write operation completed....");
//const filepath2="./Files/Tendulkar.txt";
//const cont=readData(filepath2);
//console.log(cont);
