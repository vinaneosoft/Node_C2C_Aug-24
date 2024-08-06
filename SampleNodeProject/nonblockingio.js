const fs=require("node:fs");


try{
fs.readFile("./Files/Tendulkar.txt", (error, data)=>{
    if(error)
            throw new Error("error in reading a file");
     console.log(data.toString());  
})}
catch(err){
    console.log(err);
}
console.log("further operation.......");
