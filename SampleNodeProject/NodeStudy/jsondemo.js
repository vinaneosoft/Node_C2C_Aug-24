const { log } = require("node:console");
const fs=require("node:fs/promises");

const file="../Files/employees.json";


async function readJSONData(){
        const jsondata=await fs.readFile(file);
        //console.log(jsondata);
        const array=JSON.parse(jsondata).employeerecords;
       // console.log(array);
        return array;
}


function test(array){
array.filter(emp=>emp.salary==45000).forEach(emp=>console.log(emp.id))}

async function writeJSONData(){
    let array=await readJSONData();
    //console.log(array);
    const newemp={
        "id":789,
        "name":"seema",
        "salary":90000
    }
    array.push(newemp)
    const jsondata={
        "employeerecords":array
    }
    await fs.writeFile(file, JSON.stringify(jsondata)).catch(err=>console.log(err))
    console.log("DONE");
       
}
writeJSONData();