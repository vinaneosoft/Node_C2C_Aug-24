const os = require('node:os');


const cpuarch=os.arch();
console.log(cpuarch);
console.log(os.constants);

console.log(os.getPriority());
console.log(os.getPriority(21860));
