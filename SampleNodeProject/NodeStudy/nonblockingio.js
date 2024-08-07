const fs=require("node:fs");


try{
fs.readFile("../Files/Tendulkar.txt", (error, data)=>{
    if(error)
            throw new Error("error in reading a file");
     console.log(data.toString());  
})}
catch(err){
    console.log(err);
}
console.log("further operation.......");


try{
    fs.writeFile("../Files/Mangeshkar.txt", "new contents", (error)=>{
        if(error)
                throw new Error("error in writing a file");
        console.log("write operation done..."); 
    })}
    catch(err){
        console.log("hi", err);
    }
    console.log("further operation.......");
    
    