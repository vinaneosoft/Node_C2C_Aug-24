

const path = require('node:path'); // object

let baseName=path.basename("D://Sessions/C2C_July-Aug-Sept-24/WebBasics_C2C_July-24/HTML/TableDemo.html");
console.log(baseName);
const baseName2=path.basename("D://Sessions/C2C_July-Aug-Sept-24/WebBasics_C2C_July-24/HTML");
console.log(baseName2);
 baseName=path.basename("D://Sessions/C2C_July-Aug-Sept-24/WebBasics_C2C_July-24/HTML/TableDemo.html", ".html");
console.log(baseName);
//console.log(process.env.PATH);

let dir1=path.dirname("D://Sessions/C2C_July-Aug-Sept-24/WebBasics_C2C_July-24/HTML/TableDemo.html");
let dir2=path.dirname("D://Sessions/C2C_July-Aug-Sept-24/WebBasics_C2C_July-24/HTML");
console.log(dir1);
console.log(dir2);

let ext=path.extname("D://Sessions/C2C_July-Aug-Sept-24/WebBasics_C2C_July-24/HTML/TableDemo.html");
console.log(ext);

let filePathObject={
    root:"D:/" ,
    dir: "D://Sessions/C2C_July-Aug-Sept-24/WebBasics_C2C_July-24/HTML",
    base: "TableDemo.html"
}

let filePathObject2={
    dir: "D://Sessions/C2C_July-Aug-Sept-24/WebBasics_C2C_July-24/HTML",
    base: "TableDemo.html"
}
let filepath=path.format(filePathObject2); // object to string
console.log(filepath);
console.log(path.parse(filepath));  // string to object


let status1=path.isAbsolute("../server.js");
console.log(status1);
let status2=path.isAbsolute("D://Sessions/C2C_July-Aug-Sept-24/WebBasics_C2C_July-24/HTML/TableDemo.html");
console.log(status2);
