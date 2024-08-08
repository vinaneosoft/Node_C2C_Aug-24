const fs=require("node:fs");

const file="../Files/employees.json";

try{
fs.readFile(file, (error, data)=>{
    if(error)
            throw new Error("error in reading a file");
    // console.log(data.toString());  
    const jsondata=JSON.parse(data);
 //   console.log(jsondata);
    const array= jsondata.employeerecords;
    console.log(array);
    test(array);
})}
catch(err){
    console.log(err);
}
console.log("further operation.......");


function test(array){
    const emps=array.filter(emp=>emp.salary==45000)
    console.log(emps);
    
}